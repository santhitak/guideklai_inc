module.exports = {
    prefix: "fb-",
    content: [
        "./index.html",
        "./client/**/*.{html,vue}",
        "./pages/**/*.{html,vue}",
        "./components/**/*.{html,vue}",
        "./node_modules/flowbite/**/*.js",
    ],
    safelist: [
        "w-64",
        "w-1/2",
        "rounded-l-lg",
        "rounded-r-lg",
        "bg-gray-200",
        "grid-cols-4",
        "grid-cols-7",
        "h-6",
        "leading-6",
        "h-9",
        "leading-9",
        "shadow-lg",
    ],

    darkMode: "class",

    theme: {
        colors: {
            gray: colors.coolGray,
            blue: colors.lightBlue,
            red: colors.rose,
            pink: colors.fuchsia,
        },
        fontFamily: {
            sans: ["Graphik", "sans-serif"],
            serif: ["Merriweather", "serif"],
        },
        extend: {
            spacing: {
                128: "32rem",
                144: "36rem",
            },
            borderRadius: {
                "4xl": "2rem",
            },
        },
    },
    variants: {
        fill: [],
        extend: {
            borderColor: ["focus-visible"],
            opacity: ["disabled"],
        },
    },
    plugins: [require("flowbite/plugin")],
}
