<script>
  import CloseableWindow from "../components/CloseableWindow.svelte";

  export let title, person, emoji;
</script>


<CloseableWindow
  on:done
  x="50"
  y="250"
  width="800"
  height="220"
  {title}
>
  <rect x="0" y="0" width="100%" height="100%" fill="#b0b0b0" />
  <text x="50%" y="70" fill="black" font-weight="normal" font-size="1.2rem" alignment-baseline="top" text-anchor="middle">{person} les quiere recordar la importancia de tomar</text>
  <text x="50%" y="130" fill="black" font-weight="900" font-size="3rem" alignment-baseline="top" text-anchor="middle">{emoji} {title.toUpperCase()},</text>
  <text x="50%" y="170" fill="black" font-weight="normal" font-size="1.2rem" alignment-baseline="top" text-anchor="middle">y por ello les invita a prepararse uno si aún no lo han hecho.</text>
  <text x="50%" y="205" fill="black" font-weight="normal" font-style="italic" font-size="1rem" alignment-baseline="top" text-anchor="middle">¿Y usted, se ha hecho ya su {title.toLowerCase()}?</text>
</CloseableWindow>