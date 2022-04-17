<script>
  import Countdown from "../components/Countdown.svelte";
  import Window from "../components/Window.svelte";
  import Progress from "../components/Progress.svelte";
  import FlyingTexts from "../components/FlyingTexts.svelte";

  let duration = 480;

  let countdownDone = false;
</script>

<Window
  x="20%"
  y="60"
  width="60%"
  height="240"
  title="El stream está iniciando"
>
  {#if countdownDone}
    <text
      x="50%"
      y="45%"
      class="countdown"
      dominant-baseline="central"
      text-anchor="middle"
      font-weight="300"
      fill="black"
      font-size="2em">Empezamos ya</text
    >
  {:else}
    <Countdown {duration} x="50%" y="35%" />
    <text
      x="50%"
      y="55%"
      dominant-baseline="central"
      text-anchor="middle"
      font-weight="bold"
      font-size="1.2em"
    >
      Desplegando stream...
    </text>
  {/if}
  <Progress
    x="25%"
    y="65%"
    width="50%"
    height="10"
    r="10"
    {duration}
    on:animationend={() => (countdownDone = true)}
  />

  <svg width="100%" height="1em" x="0" y="85%">
    <FlyingTexts />
  </svg>
</Window>

<style>
</style>
