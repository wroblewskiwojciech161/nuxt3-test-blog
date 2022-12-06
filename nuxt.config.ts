export default defineNuxtConfig({
    modules: ['@nuxtjs/tailwindcss'],
    app: {
        head: {
            title: "Blog | Kodefix",
            link: [
                {
                    rel: "stylesheet",
                    href: "https://kodefix.pl/wp-content/themes/kodefix/dist/styles/style.min.css?ver=1.2.3"
                },
                {
                    rel: "stylesheet",
                    href: "https://kodefix.pl/wp-includes/css/dist/block-library/style.min.css"
                }
            ]
        }
    },
    runtimeConfig: {
        api: {
          url: process.env.API_URL
        }
    }
})
