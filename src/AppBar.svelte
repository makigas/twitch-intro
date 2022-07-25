<script>
  import volume from "./assets/audio-volume-high-symbolic.svg";
  import network from "./assets/network-wireless-symbolic.svg";
  import shutdown from "./assets/system-shutdown-symbolic.svg";

  function computeTime() {
    let date = new Date();
    return date.toLocaleString("es-ES");
  }

  let timer = computeTime();
  let interval;

  $: {
    clearInterval(interval);
    interval = setInterval(() => {
      timer = computeTime();
    }, 1000);
  }
</script>

<svg width="100%" height="30" x="0" y="0">
  <rect width="100%" height="100%" fill="black" />
  <text
    font-weight="bold"
    x="10"
    y="15"
    fill="white"
    dominant-baseline="central"
    text-anchor="left"
  >
    twitch.tv/danirod_
  </text>
  <text
    class="clock"
    font-weight="bold"
    x="50%"
    y="15"
    fill="white"
    dominant-baseline="central"
    text-anchor="middle"
  >
    {timer}
  </text>
  <g class="symbolics">
    <g class="symbolicsInner" transform="translate(-75,0)">
      <image
        href={network}
        fill="white"
        x="0"
        width="15"
        height="15"
      />
      <image
        href={volume}
        fill="white"
        x="25"
        width="15"
        height="15"
      />
      <image
        href={shutdown}
        fill="white"
        x="50"
        width="15"
        height="15"
      />
    </g>
  </g>
</svg>

<style>
  .symbolics {
    transform: translate(100%, 7.5px);
    filter: brightness(100);
  }
  .clock {
    font-variant-numeric: tabular-nums;
  }
</style>
