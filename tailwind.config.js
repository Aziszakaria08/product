/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        fontFamily: {
            serif: ["NewsReader", "serif"],
            body: ["Inter", "sans-serif"],
        },
        extend: {
            colors: {
                button: "#426B1F",
                primary: "#ffffff",
            },
            fontSize: {
                "3xl": "2rem",
                "6xl": "4rem",
            },
            borderRadius: {
                "2xl": "20px",
            },
        },
    },
    plugins: [],
};
