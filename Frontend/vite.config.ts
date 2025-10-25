import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig(() => ({
  plugins: [react()],
  server: {
    host: "::",
    port: 8080,
    proxy: {
      "/api": {
        target: "http://localhost:8000",

        changeOrigin: true,

        secure: false,

        ws: true,

        configure: (proxy, options) => {
          proxy.on("error", (err, req, res) => {
            console.log(" Proxy Error:", err);
          });
        },
      },
    },
  },

  build: {
    outDir: "dist",

    emptyOutDir: true,
    sourcemap: false,
    chunkSizeWarningLimit: 1000,

    rollupOptions: {
      output: {
        manualChunks: (id) => {
          if (id.includes("node_modules")) {
            return "vendor";
          }
        },

        assetFileNames: "assets/[name]-[hash][extname]",
        chunkFileNames: "assets/[name]-[hash].js",
        entryFileNames: "assets/[name]-[hash].js",
      },
    },

    minify: "terser",
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
  },

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },

  preview: {
    host: "::",
    port: 4173,
  },

  optimizeDeps: {
    include: ["react", "react-dom", "react-router-dom"],
  },
}));
