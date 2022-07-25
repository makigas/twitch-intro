<script>
  import CloseableWindow from "../components/CloseableWindow.svelte";
</script>

<CloseableWindow
  on:done
  x="50"
  y="250"
  width="800"
  height="160"
  title="Merceria Patita"
>
  <rect x="0" y="0" width="100%" height="100%" fill="#c080c0" />
  <g class="button">
    <g class="rotate">
      <circle x="50%" y="50%" r="30" class="bg" />
      <circle x="50%" y="50%" r="4" transform="translate(-8, -8)" class="dot" />
      <circle x="50%" y="50%" r="4" transform="translate(-8, +8)" class="dot" />
      <circle x="50%" y="50%" r="4" transform="translate(+8, -8)" class="dot" />
      <circle x="50%" y="50%" r="4" transform="translate(+8, +8)" class="dot" />
    </g>
  </g>
  <text
    x="50%"
    y="50%"
    class="merceria"
    fill="white"
    font-weight="800"
    text-anchor="middle"
    dominant-baseline="central"
    font-size="40">MERCERIA PATITA</text
  >
  <text
    x="50%"
    fill="white"
    font-weight="800"
    text-anchor="middle"
    dominant-baseline="central"
    y="80%"
    font-size="25"
    class="botones">Botones al 50% de descuento</text
  >

  <g class="move">
    <text
      fill="white"
      font-weight="800"
      class="pato"
      font-size="50"
      dominant-baseline="bottom"
      y="100%"
      x="100%"
      text-anchor="left">🦆</text
    >
  </g>
  <text
    x="10"
    y="95%"
    fill="white"
    font-size="0.8rem"
    font-weight="normal"
    text-anchor="left"
    alignment-baseline="bottom">Un mensaje del sponsor @ikanian</text
  >
</CloseableWindow>

<style>
  @keyframes boton_da_vueltas {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(180deg);
    }
  }

  @keyframes boton_se_mueve {
    from {
      transform: translate(110%, 60%);
    }
    to {
      transform: translate(-10%, 60%);
    }
  }

  @keyframes merceria_flotante {
    from {
      transform: translateX(100%);
    }
    to {
      transform: translateX(0%);
    }
  }

  @keyframes patito {
    from {
      transform: translateX(0%);
    }
    to {
      transform: translateX(-100%);
    }
  }

  @keyframes patito_walk {
    from {
      transform: translateY(0);
    }
    80% {
      transform: translateY(-5px);
    }
    to {
      transform: translateY(0);
    }
  }

  @keyframes botones_text {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  .pato {
    animation: patito 15s linear;
    animation-delay: 4s;
  }

  .move {
    animation: patito_walk 0.5s linear infinite;
  }

  .merceria {
    animation: merceria_flotante 1.5s ease-out;
    animation-delay: 1s;
    animation-fill-mode: backwards;
  }

  .botones {
    animation: botones_text 0.5s ease-out;
    animation-delay: 4s;
    animation-fill-mode: backwards;
  }

  .button {
    animation: boton_se_mueve 3s linear;
  }

  .rotate {
    animation: boton_da_vueltas 1s linear infinite;
  }

  .button .bg {
    fill: #a9f4a9;
    stroke: #5bad64;
    stroke-width: 5;
  }
  .button .dog {
    fill: black;
  }
</style>
