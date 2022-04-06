/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_APP_BLOCKCHAIN_URL: string
    // more env variables...
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv
  }
  