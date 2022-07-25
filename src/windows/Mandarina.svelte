<script>
  import CloseableWindow from "../components/CloseableWindow.svelte";
  import mandarina from "../assets/images/commons_mandarina.jpg";
</script>

<CloseableWindow
  on:done
  x="50"
  y="250"
  width="800"
  height="160"
  title="MANDARINA"
>
  <rect x="0" y="0" width="100%" height="100%" fill="#903030" />
  <g class="mandarina">
    <image
      x="0%"
      width="100%"
      class="pan"
      href={mandarina}
    />
  </g>
  <g class="text">
    <text
      x="50%"
      y="70%"
      fill="white"
      font-size="2.5rem"
      font-weight="900"
      font-family="Bad Script"
      text-anchor="middle">MANDARINA</text
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
  @keyframes dancingtext {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.25);
    }
    100% {
      transform: scale(1);
    }
  }
  @keyframes pan {
    from {
      transform: translate(0, 0) scale(1);
    }
    to {
      transform: translate(0, -75%) scale(1);
    }
  }
  .pan {
    animation: pan 10s linear;
  }
  .text {
    animation: dancingtext 0.5s infinite;
    transform-origin: center;
    text-shadow: 0 0 2px black;
  }
</style>
