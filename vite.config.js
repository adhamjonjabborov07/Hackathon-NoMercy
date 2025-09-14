import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/telegram": {
        target: "https://api.telegram.org",
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/telegram/, ""),
      },
    },
  },
});
