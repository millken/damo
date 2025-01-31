import forms from "@tailwindcss/forms";
import colors from "tailwindcss/colors";
import defaultTheme from "tailwindcss/defaultTheme";
import typography from "@tailwindcss/typography";
import { shade, components, rounded, animations, palettes, palette, visualizations } from "@tailus/themer";

import type { Config } from "tailwindcss";

export default {
    content: ["./src/**/*.{html,js,svelte,ts}", "./node_modules/@tailus/themer/dist/**/*.{js,ts}"],
    theme: {
        extend: {
            // Set font family
            fontFamily: {
                sans: [...defaultTheme.fontFamily.sans],
            },
            // Set theme colors (Required config!)
            colors: palettes.trust,
        },
    },

    plugins: [typography, forms, rounded, components, animations, shade, palette,visualizations],
} satisfies Config;
