import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetUno,
  presetWebFonts,
  transformerAttributifyJsx,
} from "unocss";

const theme = presetUno().theme;
const colors = theme?.colors;

export default defineConfig({
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      // Optional
      extraProperties: {
        display: "inline-block",
        "vertical-align": "middle",
      },
    }),
    presetWebFonts({
      provider: "google",
      fonts: {
        sans: {
          name: "Inter",
          weights: [400, 500, 600, 700],
          italic: true,
        },
        serif: {
          name: "Source Serif 4",
          weights: [400, 500, 600, 700],
          italic: true,
        },
        mono: {
          name: "Fira Mono",
          weights: [400, 700],
        },
      },
    }),
  ],
  transformers: [transformerAttributifyJsx()],
  shortcuts: {
    "text-p": "text-primary-700",
    "text-s": "text-primary-800 dark:text-primary-700",
    "text-n": "text-neutral-700 dark:text-neutral-300",
    "bg-p": "bg-primary-600",
    "bg-s": "bg-primary-900",
    "bg-n": "bg-neutral-200 dark:bg-neutral-800",
    "a-primary": "text-s hover:text-primary-600 dark:hover:text-primary-400",
    "a-secondary": "text-n a-primary",
  },
  theme: {
    colors: {
      primary: colors?.teal,
    },
  },
});
