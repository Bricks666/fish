/// <reference types="vite/client" />

interface ImportMetaEnv {
	readonly VITE_APP_NETWORK_HOST: string;
	readonly VITE_APP_NETWORK_PORT: number;
	readonly VITE_APP_CONTRACT_ADDRESS: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
