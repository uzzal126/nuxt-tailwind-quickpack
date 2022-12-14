export default {
    target: "static",

    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        title: "EduMall",
        titleTemplate: "EduMall - %s",
        htmlAttrs: {
            lang: "en",
        },
        meta: [
            { charset: "utf-8" },
            {
                name: "viewport",
                content: "width=device-width, initial-scale=1",
            },
            {
                hid: "description",
                name: "description",
                content: "EduMall blog template",
            },
        ],
        link: [
            { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
            { rel: "apple-touch-icon", type: "image/x-icon", href: "/favicon.ico" },
        ],
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: ["~/assets/scss/style.scss", "~/assets/css/tailwind.css", "~/assets/css/fontawesome.min.css", "~/assets/css/swiper.css"],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: ["~/plugins/vue-awesome-swiper.js"],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [
        // https://go.nuxtjs.dev/eslint
        "@nuxtjs/eslint-module",
        // https://go.nuxtjs.dev/tailwindcss
        "@nuxtjs/tailwindcss",
    ],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: ["@nuxtjs/style-resources"],

    styleResources: {
        scss: ["~/assets/scss/style.scss"],
    },

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {
        loaders: {
            vue: {
                compiler: require("vue-template-babel-compiler"),
            },
        },
    },
};
