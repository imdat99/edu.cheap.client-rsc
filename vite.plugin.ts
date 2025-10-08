import type { Plugin } from "vite";

function fnv1a(str: string): string {
  let hash = 0x811c9dc5
  for (let i = 0; i < str.length; i++) {
    hash ^= str.charCodeAt(i)
    hash = (hash * 0x01000193) >>> 0
  }
  return ('0000000' + hash.toString(16)).slice(-8)
}

export function cssTextReplacePlugin(): Plugin[] {
  return [{
    name: 'css-text-replace', // tên plugin
    enforce: 'pre',           // chạy trước các plugin khác
    transform(code, id) {
      if (!id.endsWith('.css')) return; // chỉ xử lý CSS
      let newCode = code.replace(/--un-/g, '--eco-');
      return {
        code: newCode,
        map: null,
      };
    },
  }];
}

export function CheckCSSPlugin(): Plugin {
  return {
    name: 'vite-plugin-check-css',
    apply: 'build',

    generateBundle(_, bundle) {
      for (const [fileName, chunk] of Object.entries(bundle)) {
        if (fileName.endsWith('.js')) {
            // console.log("chunk", chunk.code)
            (chunk as any).code = (chunk as any).code
                .replace(/react/g, "reco")
                .replace(/React/g, "Reco")
                .replace(/REACT/g, "RECO")
                .replace(/UNSAFE_/g, "_")
                .replace(/UNSAFE_/g, "_")
                .replace(/Remix/g, "Eco")
                .replace(/process.env.NODE_ENV/g, '"production"')
                .replace(/loaderData/g, '$ld')
                .replace(/hydrateFallbackElement/g, '$hfe')
                .replace(/shouldRevalidate/g, '$srv')
                .replace(/errorElement/g, '$ee')
                .replace(/hasErrorBoundary/g, '$hEB')
                .replace(/hasComponent/g, '$hC')
                .replace(/hasAction/g, '$hA')
                .replace(/hasLoader/g, '$hL')
                .replace(/children/g, '$_c')
                .replace(/actionData/g, '$acD')
                .replace(/pathnameBase/g, '$pB')
                .replace(/clientAction/g, '$cA')
                .replace(/clientLoader/g, '$rcL')
                .replace(/className/g, '$cL')
                .replace(/element/g, '$el')
                .replace(/matches/g, '$m')
                .replace(/formState/g, '$fS')
                .replace(/\$undefined/g, '$u_')
                // // .replace(/pathname/g, '$pn')
                .replace(/parentId/g, '$pId')
                .replace(/patches/g, '$pc')

            // let code = (chunk as any).source.toString();
            // if(re.test(code)) {
            //     console.log("Found JS file:", fileName)
            // }
        }
        if (fileName.endsWith('.css')) {
          let css = (chunk as any).source.toString();
          css = css.replace(/--un-/g, '--eco-');
          (chunk as any).source = css;
        }
      }
    },
  };
}