/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./src/**/*.{html,svelte,js,ts}"
    ],
    theme: {
        extend: {
            colors: {
                primary: "#DAD9D7",
                secondary: "#E9E9E8",
                accent: {
                    DEFAULT: "#95EED7",
                    alt: "#8CD1BF",
                    dark: {
                        DEFAULT: "#272727",
                        hover: "#3D3D3D"
                    }
                }
            },
            textColor: {
                primary: "#2D2E32",
                secondary: "#4D4F54",
                light: "#F1F1EC"
            },
            fontFamily: {
                "inter": ["Inter", "sans-serif"],
            }
        },
    },
    plugins: [],
}