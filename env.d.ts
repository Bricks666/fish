/// <reference types="vite/client" />

interface ImportMetaEnv {
	readonly VITE_APP_NETWORK_HOST: string;
	readonly VITE_APP_NETWORK_PORT: number;
	readonly VITE_APP_CONTRACT_ADDRESS: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}

declare module 'vue' {
  import { CompatVue } from '@vue/runtime-dom'
  const Vue: CompatVue
  export default Vue
  export * from '@vue/runtime-dom'
  const { configureCompat } = Vue
  export { configureCompat }
}
