// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        head: {
            title: "Blogs",
            htmlAttrs: {
                lang: "en",
            },
            meta: [
                {charset: "utf-8"},
                {name: "viewport", content: "width=device-width, initial-scale=1"},
                {hid: "description", name: "description", content: ""},
                {name: "format-detection", content: "telephone=no"},
            ],
            link: [
                {rel: "icon", type: "image/x-icon", href: "/favicon.ico"},
                {
                    href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css",
                    rel: "stylesheet",
                    type: "text/css",
                    integrity:
                        "sha512-xh6O/CkQoPOWDdYTDqeRdPCVd1SpvCA9XXcUnZS2FmJNp1coAFzvtCN9BmamE+4aHK8yyUHUSCcJHgXloTyT2A==",
                    crossorigin: "anonymous",
                },
                {
                    href: "https://fonts.googleapis.com/css?family=Lora:400,700,400italic,700italic",
                    rel: "stylesheet",
                    type: "text/css",
                },
                {
                    href: "https://fonts.googleapis.com/css?family=Open+Sans:300italic,400italic,600italic,700italic,800italic,400,300,600,700,800",
                    rel: "stylesheet",
                    type: "text/css",
                },
                {
                    href: "/css/styles.css",
                    rel: "stylesheet",
                },
            ],
            script : [
                {
                    src: "/js/scripts.js",
                }
            ],
        },
    },


    // css: ["bootstrap/dist/css/bootstrap.min.css"],



    vite: {
        server: {
            proxy: {
                options: {
                    target: process.env.API_URL,
                    changeOrigin: true
                }
            }
        }
    },

    runtimeConfig : {
        public : {
            apiUrl : process.env.API_URL
        }
    }

})
