import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig(({ command }) => ({
  plugins: [react(), tailwindcss()],
  base: command === "serve" ? "/" : "/Palana-Portfolio/",
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (!id.includes("node_modules")) return undefined;
          if (id.includes("react-dom") || id.includes("react-router-dom") || id.includes("react")) {
            return "vendor-react";
          }
          if (id.includes("framer-motion")) return "vendor-motion";
          if (id.includes("@plasmicapp")) return "vendor-plasmic";
          return "vendor";
        },
      },
    },
  },
}));
