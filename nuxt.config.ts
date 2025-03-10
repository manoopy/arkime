// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxt/ui", "@pinia/nuxt", "nuxt-echarts"],

  echarts: {
    renderer: ["svg"],
    charts: ["BarChart", "LineChart", "GraphChart"],
    components: ["DatasetComponent", "GridComponent", "TooltipComponent"],
  },

  app: {
    pageTransition: { name: "blur", mode: "out-in" },
    layoutTransition: { name: "blur", mode: "out-in" },

    head: {
      title: "پرتو سما",
    },
  },

  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  ssr: false,
});
