import "./assets/global.css";
import DebugApplication from "./DebugApplication.svelte";

const app = new DebugApplication({
  target: document.body,
});

export default app;
