import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 5175,
    host: "0.0.0.0",
  },
  plugins: [react()],
});