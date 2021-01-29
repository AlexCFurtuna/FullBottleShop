require("dotenv").config();
export default {
    // Global page headers (https://go.nuxtjs.dev/config-head)
    head: {
        title: "frontend",
        meta: [
            { charset: "utf-8" },
            {
                name: "viewport",
                content: "width=device-width, initial-scale=1"
            },
            { hid: "description", name: "description", content: "" }
        ],
        link: [
            { rel: "preconnect", href: "https://app.snipcart.com" },
            { rel: "preconnect", href: "https://cdn.snipcart.com" },
            {
                rel: "stylesheet",
                href:
                    "https://cdn.snipcart.com/themes/v3.0.16/default/snipcart.css"
            },
            { rel: "icon", type: "image/x-icon", href: "/favicon.ico" }
        ],
        script: [
            {
                src:
                    "https://cdn.snipcart.com/themes/v3.0.16/default/snipcart.js"
            },
            { src: "https://js.stripe.com/v3" }
        ]
    },

    // Global CSS (https://go.nuxtjs.dev/config-css)
    css: ["uikit/dist/css/uikit.min.css", "uikit/dist/css/uikit.css"],

    // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
    plugins: [
        { src: "~/plugins/uikit.js", ssr: false },
        { src: "~plugins/axios" },
        { src: "~/plugins/joi-validation" }
    ],

    // Auto import components (https://go.nuxtjs.dev/config-components)
    components: true,

    // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
    buildModules: [],

    // Modules (https://go.nuxtjs.dev/config-modules)
    modules: [
        "@nuxtjs/apollo",
        "@nuxtjs/axios",
        "@nuxtjs/auth",
        "@nuxtjs/dotenv",
        "@nuxtjs/strapi"
    ],
    strapi: {
        entities: ["beers"]
    },
    apollo: {
        clientConfigs: {
            default: {
                httpEndpoint: "http://localhost:1337/graphql"
            }
        }
    },
    axios: {
        baseURL: process.env.API_AUTH_URL
    },
    auth: {
        strategies: {
            local: {
                endpoints: {
                    login: {
                        url: "auth/local",
                        method: "post",
                        propertyName: "jwt"
                    },
                    user: {
                        url: "users/me",
                        method: "get",
                        propertyName: false
                    },
                    logout: false
                }
            }
        }
    },
    env: {
        strapiUrl: process.env.STRAPI_URL || "http://localhost:1337",
        storeUrl: process.env.STORE_URL || "http://localhost:3000",
        snipcartApiKey:
            process.env.SNIPCART_API_KEY ||
            "NGNiZTQ0MDMtMjJkYi00MWZhLWI0ZjQtMjY2ZjhjNGQxODIxNjM3NDIzMzM5MzM0NDExMTg0"
    },

    // Build Configuration (https://go.nuxtjs.dev/config-build)
    build: {}
};
