<script>
  import CloseableWindow from "../components/CloseableWindow.svelte";
</script>

<CloseableWindow
  on:done
  x="50"
  y="250"
  width="800"
  height="160"
  title="¿Necesitas una tarjeta?"
>
  <rect x="0" y="0" width="100%" height="100%" fill="#903030" />
  <g class="flying">
    <image x="75%" y="50%" href="motherboards/sample1.jpg" />
    <image x="33%" y="15%" href="motherboards/sample2.jpg" />
    <image x="65%" y="22%" href="motherboards/sample3.jpg" />
    <image x="15%" y="76%" href="motherboards/sample4.jpg" />
    <image x="44%" y="50%" href="motherboards/sample5.jpg" />
    <image x="12%" y="23%" href="motherboards/sample6.jpg" />
    <image x="27%" y="93%" href="motherboards/sample7.jpg" />
    <image x="51%" y="15%" href="motherboards/sample8.jpg" />
  </g>
  <g class="text">
    <text
      x="50%"
      y="60%"
      fill="white"
      font-size="2.5rem"
      font-weight="900"
      text-anchor="middle">TARJETAS MADRE CERCA DE USTED</text
    >
    <text
      x="50%"
      y="80%"
      fill="white"
      font-size="1.5rem"
      font-weight="900"
      text-anchor="middle">Haga clic aquí para saber más</text
    >
  </g>
  <text
    x="10"
    y="95%"
    fill="white"
    font-size="0.8rem"
    font-weight="normal"
    text-anchor="left"
    alignment-baseline="bottom">Un mensaje del sponsor @ckmu32</text
  >
</CloseableWindow>

<style>
  @keyframes dancingtext {
    0% {
      transform: translate(0, 0);
    }
    25% {
      transform: translate(2px, 0);
    }
    50% {
      transform: translate(0, 2px);
    }
    75% {
      transform: translate(-2px, 0);
    }
    100% {
      transform: translate(0, 0);
    }
  }
  @keyframes image {
    0% {
      transform: translate(0, 0) scale(1);
    }
    33% {
      transform: translate(-20px, 0) scale(0.8);
    }
    66% {
      transform: translate(30px, 0) scale(1.5);
    }
    99% {
      transform: translate(0, 0) scale(1);
    }
  }
  .flying {
    overflow: hidden;
    opacity: 0.5;
  }
  .flying image {
    height: 50%;
    animation: image 1s infinite;
  }
  .flying image:nth-child(1) {
    animation-delay: 0.25s;
  }
  .flying image:nth-child(2) {
    animation-delay: 0.5s;
  }
  .flying image:nth-child(3) {
    animation-delay: 0.75s;
  }
  .flying image:nth-child(4) {
    animation-delay: 1s;
  }
  .flying image:nth-child(5) {
    animation-delay: 1.25s;
  }
  .flying image:nth-child(6) {
    animation-delay: 1.5s;
  }
  .flying image:nth-child(7) {
    animation-delay: 1.75s;
  }
  .flying image:nth-child(8) {
    animation-delay: 2s;
  }
  .text {
    animation: dancingtext 0.25s infinite;
    text-shadow: 0 0 2px black;
  }
</style>
