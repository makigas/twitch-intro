import "@fontsource/bad-script";
import "@fontsource/cantarell";
import "./assets/global.css";
import StartingSoonCountdown from "./StartingSoonCountdown.svelte";

const app = new StartingSoonCountdown({
  target: document.body,
});

export default app;
