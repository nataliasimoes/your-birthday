// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  ssr: false,
  devtools: { enabled: true },
  modules: [
    "vuetify-nuxt-module",
    "@pinia/nuxt",
    "@nuxtjs/google-fonts",
    "@hypernym/nuxt-anime",
  ],
  imports: {
    dirs: ["store", "services"],
  },
  googleFonts: {
    families: {
      "DM Sans": true,
    },
  },
});
