<script>
  import { onDestroy, onMount } from "svelte";
  import { fade } from "svelte/transition";

  import BiosBoot from "./BiosBoot.svelte";
  import Countdown from "./Countdown.svelte";
  import poweron from "./poweron.mp3";

  let step = 1;

  const audio = new Audio(poweron);
  audio.volume = 0.5;
  audio.loop = false;

  onMount(() => {
    audio.play();
  });

  onDestroy(() => {
    audio.pause();
  });

  function onBootDone() {
    step++;
    setTimeout(() => step++, 2000);
    const lowerVolume = () => {
      if (audio.volume > 0.01) {
        audio.volume -= 0.01;
        requestAnimationFrame(lowerVolume);
      } else {
        audio.volume = 0;
        audio.pause();
      }
    };
    requestAnimationFrame(lowerVolume);
  }
</script>

<div class="screen">
  {#if step == 1}
    <div transition:fade>
      <BiosBoot on:done={onBootDone} delay={5000} />
    </div>
  {:else if step == 3}
    <div transition:fade>
      <Countdown minutes={7} />
    </div>
  {/if}
</div>

<style scoped>
  @keyframes boot {
    0% {
      transform: scaleY(0.01);
      opacity: 0;
    }
    100% {
      transform: scaleY(1);
      opacity: 1;
    }
  }

  .screen {
    animation: boot 0.35s ease-out;
    animation-delay: 4s;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;
    opacity: 0;
  }
</style>
