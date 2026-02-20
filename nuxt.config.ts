//  تنظیمات اصلی پروژه

// export default defineNuxtConfig({
//     compatibilityDate: '2025-07-15',
//    devtools: { enabled: false },
//     build: {
//      transpile: ['pilotui']
//   },
//    css: ['pilotui/style.css']
// })


export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',

  devtools: { enabled: false },

  ssr: false, // خیلی مهم برای GitHub Pages

  app: {
    baseURL: '/pilotui-dashbourd/' // اسم ریپازیتوری دقیق
  },

  build: {

    transpile: ['pilotui']
  },

  css: ['pilotui/style.css']
})