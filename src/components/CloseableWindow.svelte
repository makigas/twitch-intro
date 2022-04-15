<script>
  import { createEventDispatcher } from "svelte";
  import Window from "../components/Window.svelte";
  import FlyingArrow from "../components/FlyingArrow.svelte";
  const dispatch = createEventDispatcher();

  export let title, x, y, width, height;

  let showArrow = false;
  let hide = false;

  const hideWindow = (name) => {
    if (name.detail === "animation3") {
      hide = true;
    } else if (name.detail === "animation5") {
      dispatch("done");
    }
  };

  let interval;
  $: {
    clearInterval(interval);
    interval = setTimeout(() => (showArrow = true), 8000);
  }
</script>

<g>
  <Window {hide} {x} {y} {width} {height} {title}>
    <slot />
  </Window>
  {#if showArrow}
    <FlyingArrow
      from="translateX(500%) translateY(100%)"
      to="translateX(-100%) translateY(400%)"
      on:animationstep={hideWindow}
      x="820"
      y="260"
    />
  {/if}
</g>
