import {
  defineConfig,
  presetWind4,
  presetAttributify,
  transformerVariantGroup,
  transformerCompileClass,
  presetTypography
} from "unocss";
import {presetBootstrapBtn} from "./unocss/bootstrap_btn";

export default defineConfig({
  // ...UnoCSS options
  content: {
    pipeline: {
      include: [
        // the default
        /\.(vue|svelte|[jt]sx|vine.ts|mdx?|astro|elm|php|phtml|html)($|\?)/,
        // include js/ts files
        'src/**/*.{js,ts}',
      ],
    },
  },
  presets: [
    presetBootstrapBtn(),
    presetTypography({
      // cssVarPrefix: "eco",
    }),
    presetAttributify({
      // prefix: "eco-",
    }),
    presetWind4({
      preflights: {
        reset: true,
      },
      // variablePrefix: "eco-",
    }), // Using the Wind4 preset
  ],
  transformers: [
    transformerVariantGroup(),
    transformerCompileClass({
      classPrefix: "eco_",
    }),
  ],
  theme: {
    colors: {
        primary: {
          DEFAULT: "#14a74b",
          light: "#76da83",
          active: "#119c45",
          "active-light": "#aff6b8",
          dark: "#025c15",
        },
        success: {
          DEFAULT: "#2dc76b",
          light: "#17c653",
        },
        info: {
          DEFAULT: "#39a6ea",
          light: "#39c1ea",
        },
        danger: {
          DEFAULT: "#f8285a",
          light: "#f8285a",
          active: "#d1214c",
        },
        warning: {
          DEFAULT: "#f0f9ff",
          light: "#f0f9ff",
        },
        secondary: {
          DEFAULT: "#fd7906",
          light: "#fbb06f",
          inverse: "#4b5675",
        },
        dark: {
          DEFAULT: "#161f2d",
          light: "#1e2129",
        },
      },
      boxShadow: {
        "primary-box": "2px 2px 10px #aff6b8",
        "card-box": "0px 3px 4px 0px #00000008",
      },
    radius: {
      none: "0px",
      sm: "0.125rem", // 2px
      DEFAULT: "0rem", // 4px (áp dụng cho .rounded)
      md: "0.375rem", // 6px
      lg: "0.5rem", // 8px
      xl: "0.75rem", // 12px
      "2xl": "1rem", // 16px
      "3xl": "1.5rem", // 24px
      full: "9999px",
    },
  },
  safelist: [
    // Add any classes that need to be always included here
    "h-full",
    "min-h-svh",
    "min-h-screen",
    "font-sans",
    "bg-[#f9fafd]",
    "text-gray-800",
    "antialiased",
    "flex",
    "flex-col"
  ],
  preflights: [
    {
      getCSS: (context) => {
        return `
        :root {
  --font-sans: "Google Sans Text", "Roboto Flex", "Roboto", -apple-system,
    BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans",
    sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol",
    "Noto Color Emoji";
  --color-primary: #14a74b;
  --color-primary-light: #76da83;
  --color-primary-active: #119c45;
  --color-primary-active-light: #aff6b8;
  --color-primary-dark: #025c15;
  --color-primary-box-shadow: 2px 2px 10px var(--color-primary-active-light);
  --color-secondary: #fd7906;
  --color-secondary-light: #fbb06f;
  --color-secondary-inverse: #4b5675;
  --color-danger: #f8285a;
  --color-danger-light: #f8285a;
  --color-danger-active: #d1214c;
  --color-info: #39a6ea;
  --color-info-light: #39c1ea;
  --color-success: #2dc76b;
  --color-success-light: #17c653;
  --color-warning: #f0f9ff;
  --color-warning-light: #f0f9ff;
  --color-dark-light: #1e2129;
  --color-dark: #161f2d;
  --color-card-box-shadow: 0px 3px 4px 0px #00000008;
  --color-black: #000;
  --color-white: #fff;
  --color-light: #f9fafd;
}
  :focus {
        outline-color: var(--color-primary-active);
        outline-width: 1px
    }
button,
ui-radio {
  cursor: pointer;
}
@media (width>=96rem) {
  .container {
    padding-inline: calc(var(--spacing) * 8);
  }
}
@media (width < 26rem) {
  .container {
    padding-inline: calc(var(--spacing) * 2);
  }
}
.container {
  margin-inline: auto;
}
  @keyframes slideIn {
            from {
                opacity: 0;
                transform: translateX(30px);
            }
            to {
                opacity: 1;
                transform: translateX(0);
            }
        }
        
        .slide-in {
            animation: slideIn 0.5s ease-out;
        }
        
        /* Custom scrollbar */
        .carousel-container::-webkit-scrollbar {
            display: none;
        }
        
        .carousel-container {
            -ms-overflow-style: none;
            scrollbar-width: none;
        }

      `;
      },
    },
  ],
  shortcuts: [
    {
      "card": "shadow-[var(--color-card-box-shadow)] border border-gray-50 bg-white rounded-xl flex flex-col",
      "app_btn": "relative inline-flex items-center justify-center gap-2 font-medium text-sm h-10 px-4 rounded-lg whitespace-nowrap bg-[var(--color-secondary)] text-[var(--color-white)] hover:bg-[color-mix(in_oklab,_var(--color-secondary),_transparent_10%)] disabled:opacity-75 dark:disabled:opacity-75 disabled:cursor-default disabled:pointer-events-none [[data-flux-button-group]_&]:border-r-0 [:is([data-flux-button-group]>&:last-child,_[data-flux-button-group]_:last-child>&)]:border-r-[1px] dark:[:is([data-flux-button-group]>&:last-child,_[data-flux-button-group]_:last-child>&)]:border-r-0 dark:[:is([data-flux-button-group]>&:last-child,_[data-flux-button-group]_:last-child>&)]:border-l-[1px] [:is([data-flux-button-group]>&:not(:first-child),_[data-flux-button-group]_:not(:first-child)>&)]:border-l-[color-mix(in_srgb,var(--color-accent-foreground),transparent_85%)]",
      "img-fluid": "max-w-full h-auto",
      "glass-effect": "backdrop-blur-sm bg-gray/10 transition-shadow duration-300 will-change-transform border-1 border-white/20 shadow-2xl hover:shadow-xl",
      "animate-pulse-slow": "animate-[pulse_5s_cubic-bezier(0.4,0,0.6,1)_infinite]",
      // "btn": "cursor-pointer border border-transparent rounded-md outline-none inline-flex align-center gap-1 h-10 px-4 font-medium text-sm items-center",
    }
  ]
});
/*
.btn {
cursor: pointer;
    border: 1px solid #0000;
    border-radius: .375rem;
    outline: none;
    align-items: center;
    gap: .375rem;
    height: 2.5rem;
    padding-inline: 1rem;
    font-size: .8125rem;
    font-weight: 500;
    line-height: 1;
    display: inline-flex
}
*/
    // box-shadow: var(--color-card-box-shadow);
    // border-color: var(--color-gray-50);
    // background-color: var(--color-white);
    // border-radius: .75rem;
    // border-top-left-radius: 0.75rem;
    // border-top-right-radius: 0.75rem;
    // border-bottom-right-radius: 0.75rem;
    // border-bottom-left-radius: 0.75rem;
    // flex-direction: column;
    // display: flex