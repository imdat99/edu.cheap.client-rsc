import {
  defineConfig,
  presetWind4,
  presetAttributify,
  transformerVariantGroup,
  transformerCompileClass,
  presetTypography
} from "unocss";

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
          DEFAULT: "#f6b100",
          light: "#f6b100",
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
          --font-sans: 'Google Sans Text', 'Roboto Flex', 'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
          --color-primary: #14a74b; --color-danger: #f8285a; --color-info: #39a6ea; --color-success: #2dc76b; --color-warning: #f6b100; --color-primary-light: #76da83; --color-primary-active: #119c45; --color-primary-active-light: #aff6b8; --color-primary-box-shadow: 2px 2px 10px var(--color-primary-active-light); --color-success-light: #17c653; --color-info-light: #39c1ea; --color-danger-light: #f8285a; --color-danger-active: #d1214c; --color-warning-light: #f6b100; --color-dark-light: #1e2129; --color-secondary: #fd7906; --color-secondary-light: #fbb06f; --color-secondary-inverse: #4b5675; --color-primary-dark: #025c15; --color-dark: #161f2d; --color-card-box-shadow: 0px 3px 4px 0px #00000008;--color-black: #000;
    --color-white: #fff;
        }
    button,ui-radio {
        cursor: pointer
    }
      `;
      },
    },
  ]
});
