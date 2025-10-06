import rsc from "@vitejs/plugin-rsc/plugin";
import react from "@vitejs/plugin-react";
import { defineConfig, type Plugin, type Rolldown } from "vite";
import devtoolsJson from "vite-plugin-devtools-json";
import { cloudflare } from '@cloudflare/vite-plugin'
import tsConfigPaths from "vite-tsconfig-paths";
import UnoCSS from "unocss/vite";
export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [["babel-plugin-react-compiler"]],
      },
    }),
    rsc({
      entries: {
        client: "./src/entry.browser.tsx",
        // rsc: "src/entry.rsc.tsx",
        // ssr: "src/entry.ssr.tsx",
      },
      serverHandler: false,
      copyServerAssetsToClient: (fileName) => fileName.includes(".css"),
    }),
    cloudflare({
      configPath: './cf/wrangler.ssr.jsonc',
      viteEnvironment: {
        name: 'ssr',
      },
      auxiliaryWorkers: [
        {
          configPath: './cf/wrangler.rsc.jsonc',
          viteEnvironment: {
            name: 'rsc',
          },
        },
      ],
    }),
    UnoCSS({
      mode: "per-module",
      postcss: true
    }),
    devtoolsJson(),
    tsConfigPaths(),
    ReplaceCSSInBundlePlugin(),
  ],
  build: {
    rollupOptions: {
      plugins: [
        {
          name: "remove-router-version",
          async transform(code) {
            return code
              .replace(
                "window.__reactRouterVersion",
                'window.__reactRouterVersion="https://dat09.dev";window.__movie'
              )
              .replace("%c ArtPlayer %c", "%c XemĐi %c")
              .replace("https://artplayer.org", "https://xemdi.fun")
              .replace(/vite-rsc\/importer-resources/g, "edu.cheap.resources")
              .replace(/precedence: "vite-rsc\/client-reference"/g, "precedence: \"edu.cheap.reference\"")
          },
        },
      ],
      input: "./src/entry.browser.tsx",
      output: {
        manualChunks: undefined,
        // entryFileNames: `assets/[hash].js`,
        chunkFileNames: `assets/[hash].js`,
        assetFileNames: `assets/[name].[ext]`
        // assetFileNames: `assets/[hash].[ext]`
      },
    },
    chunkSizeWarningLimit: 512,
    target: ["es2015", "edge88", "firefox78", "chrome87", "safari11"],
  },
  environments: {
    client: {
      optimizeDeps: {
        include: ['react-router', 'react-router/internal/react-server-client'],
      },
    },
    ssr: {
      optimizeDeps: {
        exclude: ['react-router'],
      },
    },
    rsc: {
      optimizeDeps: {
        exclude: ['react-router'],
      },
    },
  },
});

function ReplaceCSSInBundlePlugin(): Plugin {
  const seen = new Map<string, string>()
  return {
    name: 'vite-plugin-replace-css-bundle',
    apply: 'build',
    enforce: 'post',
    generateBundle(output, bundle) {
      const outputEnv: string = fnv1a((output as any)?.outputOptions?.dir)
      const outDir: string = (output as any)?.outputOptions?.dir;
      if (outDir.endsWith('client')) {
        this.warn(`Skip processing for client build to avoid conflicts. ${outDir} and ${outputEnv}, ${Object.keys(bundle)} files.`);
      for (const [fileName, chunk] of Object.entries(bundle)) {
        if (fileName.endsWith('.css')) {
          // seen.set(fileName, (seen.get(fileName) || 0) + 1)
          console.log("fileName", fileName, outputEnv);
          (chunk as Rolldown.OutputAsset).source = (chunk as Rolldown.OutputAsset).source.toString().replace(/--un-/g, '--eco-');
          if (seen.get(outputEnv)?.includes(fileName)) {
            console.warn("seen", seen);
          this.warn(
            `[SkipDuplicateAssetsPlugin] Bỏ qua file trùng: "${fileName}" trong "${outDir}" vì đã có trong "${seen.get(outputEnv)}"`
          )
          delete bundle[fileName] // xóa file trùng khỏi output
          continue // bỏ qua, không đổi tên
        }
        seen.set(outputEnv, fileName)
        // seen.add(fileName)
        }
      }
      console.log("seen", seen);
    }},
  };
}
function fnv1a(str: string): string {
  let hash = 0x811c9dc5
  for (let i = 0; i < str.length; i++) {
    hash ^= str.charCodeAt(i)
    hash = (hash * 0x01000193) >>> 0
  }
  return ('0000000' + hash.toString(16)).slice(-8)
}