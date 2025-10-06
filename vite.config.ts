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
    cssTextReplacePlugin(),
    // ReplaceCSSInBundlePlugin(),
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
function fnv1a(str: string): string {
  let hash = 0x811c9dc5
  for (let i = 0; i < str.length; i++) {
    hash ^= str.charCodeAt(i)
    hash = (hash * 0x01000193) >>> 0
  }
  return ('0000000' + hash.toString(16)).slice(-8)
}

function cssTextReplacePlugin(): Plugin[] {
  return [{
    name: 'css-text-replace', // tên plugin
    enforce: 'pre',           // chạy trước các plugin khác
    transform(code, id) {
      if (!id.endsWith('.css')) return; // chỉ xử lý CSS
      let newCode = code.replace(/--un-/g, '--eco-');
      // for (const [search, replace] of Object.entries(replacements)) {
      //   const regex = new RegExp(search, 'g'); // replace tất cả
      //   newCode = newCode.replace(regex, replace);
      // }
      return {
        code: newCode,
        map: null,
      };
    },
  }];
}