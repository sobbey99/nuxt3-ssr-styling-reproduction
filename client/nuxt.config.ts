import {defineNuxtConfig} from "nuxt/config";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: {enabled: true},
    modules: ["@nuxtjs/tailwindcss"],
    //@ts-expect-error
    tailwindcss: {
        configPath: "./tailwind.config.js",
    },
    runtimeConfig: {
        ssr: true,
    },
});
