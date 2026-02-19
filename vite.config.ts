import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { inspectAttr } from "kimi-plugin-inspect-react";

export default defineConfig(({ mode }) => {
  const isDev = mode === "development";

  return {
    base: "/", // gunakan root untuk production hosting modern

    plugins: [
      react(),
      isDev && inspectAttr(), // hanya aktif di development
    ].filter(Boolean),

    envPrefix: ["VITE_", "NEXT_PUBLIC_"],

    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },

    build: {
      target: "esnext", // modern browsers
      minify: "esbuild", // fastest & efficient
      sourcemap: isDev, // sourcemap hanya dev
      chunkSizeWarningLimit: 700,

      rollupOptions: {
        output: {
          manualChunks(id) {
            if (id.includes("node_modules")) {
              return id
                .toString()
                .split("node_modules/")[1]
                .split("/")[0];
            }
          },
        },
      },
    },

    optimizeDeps: {
      include: ["gsap", "lucide-react"],
    },
  };
});
