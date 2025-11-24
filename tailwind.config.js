module.exports = {
    content: [
        "./src/**/*.{html,ts}"
    ],
    theme: {
        extend: {
            keyframes: {
                fadeUp: {
                    "0%": { opacity: "0", transform: "translateY(20px)" },
                    "100%": { opacity: "1", transform: "translateY(0)" }
                },
                scaleIn: {
                    "0%": { opacity: "0", transform: "scale(0.95)" },
                    "100%": { opacity: "1", transform: "scale(1)" }
                },
            },
            animation: {
                fadeUp: "fadeUp 0.6s ease-out",
                scaleIn: "scaleIn 0.4s ease-out",
            },
        },
    },
    plugins: [],
}
