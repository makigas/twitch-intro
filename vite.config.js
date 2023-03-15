import { resolve } from "path";
import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import svelteSvg from "vite-plugin-svelte-svg";

export default defineConfig({
  plugins: [svelte(), svelteSvg()],
  build: {
    rollupOptions: {
      input: {
        index: resolve('index.html'),
        stallman: resolve('stallman.html'),
        countdown: resolve('countdown.html'),
      }
    }
  }
});
