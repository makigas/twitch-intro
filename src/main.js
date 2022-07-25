import "./assets/global.css";
import App from "./StartingSoonCountdown.svelte";

const app = new App({
  target: document.body,
  props: {
    name: "world",
  },
});

export default app;
