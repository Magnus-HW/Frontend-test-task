import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  test: {
    globals: true,
    setupFiles: "src/setupTests.ts",
    environment: "jsdom",
    includeSource: ["src/**/*.{js,ts,vue}"],
  },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  rules: [
    {
      test: /\.scss$/,
      use: ["vue-style-loader", "css-loader", "sass-loader"],
    },
  ],
});
