import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import svelteSvg from "vite-plugin-svelte-svg";

export default defineConfig({
  plugins: [svelte(), svelteSvg()],
});
