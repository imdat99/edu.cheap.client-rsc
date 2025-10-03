import rsc from "@vitejs/plugin-rsc/plugin";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import devtoolsJson from "vite-plugin-devtools-json";
import { cloudflare } from '@cloudflare/vite-plugin'
import tsConfigPaths from "vite-tsconfig-paths";
export default defineConfig({
  plugins: [
    tailwindcss(),
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
    devtoolsJson(),
    tsConfigPaths(),
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
              .replaceAll("vite-rsc/importer-resources", "edu.cheap");
          },
        },
      ],
      input: "./src/main.tsx",
      output: {
        manualChunks: undefined,
        // entryFileNames: `assets/[hash].js`,
        chunkFileNames: `assets/[hash].js`,
        // assetFileNames: `assets/[name].[ext]`
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
      // resolve: {
      //   conditions: ["react-server"],
      // }
    },
    rsc: {
      optimizeDeps: {
        exclude: ['react-router'],
      },
    },
  },
});
