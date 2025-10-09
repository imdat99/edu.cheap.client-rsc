import rsc from "@vitejs/plugin-rsc/plugin";
import react from "@vitejs/plugin-react";
import { defineConfig, type Plugin, type Rolldown } from "vite";
import devtoolsJson from "vite-plugin-devtools-json";
import { cloudflare } from '@cloudflare/vite-plugin'
import tsConfigPaths from "vite-tsconfig-paths";
import UnoCSS from "unocss/vite";
import { CheckCSSPlugin, cssTextReplacePlugin } from "./vite.plugin";
export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [["babel-plugin-react-compiler"]],
      },
    }),
    rsc({
      entries: {
        client: "src/core/entry.browser.tsx",
        rsc: "src/core/entry.rsc.tsx",
        ssr: "src/core/entry.ssr.tsx",
      },
      // serverHandler: false,
    }),
    // cloudflare({
    //   configPath: './cf/wrangler.ssr.jsonc',
    //   viteEnvironment: {
    //     name: 'ssr',
    //   },
    //   auxiliaryWorkers: [
    //     {
    //       configPath: './cf/wrangler.rsc.jsonc',
    //       viteEnvironment: {
    //         name: 'rsc',
    //       },
    //     },
    //   ],
    // }),
    UnoCSS(),
    devtoolsJson(),
    tsConfigPaths(),
    cssTextReplacePlugin(),
    CheckCSSPlugin(),
  ],
  build: {
    rolldownOptions: {
      plugins: [
        {
          name: "remove-router-version",
          async transform(code) {
            return code
              .replace(
                "window.__reactRouterVersion",
                'console.log("Tao không dùng next lỏd =))")//'
              )
              .replace("%c ArtPlayer %c", "%c XemĐi %c")
              .replace("https://artplayer.org", "https://xemdi.fun")
              .replace(/vite-rsc\/importer-resources/g, "edu.cheap.resources")
              .replace(/precedence: "vite-rsc\/client-reference"/g, "precedence: \"edu.cheap.reference\"")
              .replace(/--un-/g, "--eco-");
          },
        },
      ],
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
    outDir: "dist/rsc",
  },
  // environments: {
  //   client: {
  //     optimizeDeps: {
  //       include: ['react-router', 'react-router/internal/react-server-client'],
  //     },
  //   },
  //   ssr: {
  //     optimizeDeps: {
  //       exclude: ['react-router'],
  //     },
  //   },
  //   rsc: {
  //     optimizeDeps: {
  //       exclude: ['react-router'],
  //     },
  //   },
  // },
});
