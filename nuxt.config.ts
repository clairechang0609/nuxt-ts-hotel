// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	ssr: true,
	experimental: {
		componentIslands: true
	},
	app: {
		baseURL: '/',
		head: {
			htmlAttrs: {
				lang: 'zh-TW'
			},
			meta: [
				{ charset: 'utf-8' },
				{ name: 'viewport', content: 'width=device-width, initial-scale=1, viewport-fit=cover' }
			],
			link: [
				{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
				{ rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=block' },
				{ rel: 'preconnect', href: 'https://fonts.googleapis.com' },
				{ rel: 'preconnect', href: 'https://fonts.gstatic.com' },
				{ rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Noto+Serif+TC:wght@200;300;400;500;600;700;900&display=swap' }
			]
		}
	},
	devServer: {
		port: 8003 // default: 3000
		// host: 'nuxt-sample' // default: localhost
	},
	devtools: {
		enabled: true
	},
	typescript: {
		typeCheck: true
	},
	modules: [
		'@nuxtjs/stylelint-module',
		'@pinia/nuxt',
		'@pinia-plugin-persistedstate/nuxt',
		'@vee-validate/nuxt'
	],
	veeValidate: {
		// 啟用 auto imports
		autoImports: true,
		// 更換 components 名稱
		componentNames: {
			Form: 'VeeForm',
			Field: 'VeeField',
			FieldArray: 'VeeFieldArray',
			ErrorMessage: 'VeeErrorMessage'
		}
	},
	stylelint: {
		lintOnStart: false, // 專案啟動時不自動檢查所有相關檔案
		chokidar: true, // 監聽文件異動進行檢核（文件未列出此選項）
		cache: false
	},
	css: [
		'@/assets/scss/app.scss'
	],
	vite: {
		css: {
			preprocessorOptions: {
				scss: {
					additionalData: `
						@import "@/assets/scss/components/_color.scss";
						@import "@/assets/scss/components/_grid.scss";
						@import "@/assets/scss/components/_mixin.scss";
					`
				}
			}
		}
	},
	postcss: { // css 屬性加上相容性前綴
		plugins: {
			autoprefixer: true
		}
	},
	runtimeConfig: {
		public: {
			apiBase: process.env.NUXT_PUBLIC_API_BASE
		}
	}
});
