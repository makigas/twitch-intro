<script>
  import CloseableWindow from "../components/CloseableWindow.svelte";
</script>

<CloseableWindow on:done x="50" y="250" width="800" height="160" title="BUN">
  <rect x="0" y="0" width="100%" height="100%" fill="#202020" />
  <g class="text">
    <text
      x="50%"
      y="70%"
      fill="white"
      font-size="5rem"
      font-weight="300"
      text-anchor="middle">BUN</text
    >
  </g>
  <g class="subtext">
    <text
      x="50%"
      y="84%"
      fill="white"
      font-size="1.5rem"
      font-weight="500"
      text-anchor="middle">próximamente en un node_modules próximo a ti</text
    >
  </g>
  <text
    x="300"
    y="95%"
    fill="white"
    font-size="0.8rem"
    font-weight="normal"
    text-anchor="left"
    alignment-baseline="bottom">Un mensaje del sponsor @dannywolfmx2</text
  >
</CloseableWindow>

<style>
  .text {
    transform-origin: center;
    text-shadow: 0 0 2px black;
  }
</style>
