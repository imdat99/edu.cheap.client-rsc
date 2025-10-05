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
  presets: [
    presetTypography(),
    presetAttributify(),
    presetWind4({
      preflights: {
        reset: true,
      },
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
      border: "hsl(214.3 31.8% 91.4%)",
      input: "hsl(214.3 31.8% 91.4%)",
      ring: "oklch(0.6276 0.2076 264.51)",
      background: "oklch(0.98 0 0)",
      foreground: "oklch(0.18 0 0)",
      primary: {
        50: "oklch(0.97 0.02 264.51)",  // rất nhạt
        100: "oklch(0.90 0.05 264.51)",
        200: "oklch(0.82 0.10 264.51)",
        300: "oklch(0.74 0.14 264.51)",
        400: "oklch(0.68 0.18 264.51)",
        500: "oklch(0.63 0.21 264.51)",  // gốc bạn đưa
        600: "oklch(0.56 0.19 264.51)",
        700: "oklch(0.48 0.16 264.51)",
        800: "oklch(0.40 0.12 264.51)",
        900: "oklch(0.30 0.08 264.51)",  // rất đậm
        DEFAULT: "oklch(0.63 0.21 264.51)",
        foreground: "hsl(210 40% 98%)",
      },
      secondary: {
        DEFAULT: "hsl(210 40% 96%)",
        foreground: "hsl(222.2 84% 4.9%)",
      },
      muted: {
        DEFAULT: "hsl(210 40% 96%)",
        foreground: "hsl(215.4 16.3% 46.9%)",
      },
      accent: {
        DEFAULT: "hsl(210 40% 96%)",
        foreground: "hsl(222.2 84% 4.9%)",
      },

      destructive: {
        DEFAULT: "hsl(0 84.2% 60.2%)",
        foreground: "hsl(210 40% 98%)",
      },
      card: {
        DEFAULT: "hsl(0 0% 100%)",
        foreground: "hsl(222.2 84% 4.9%)",
      },
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
        }
      `;
      },
    },
  ]
});
