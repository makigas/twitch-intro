<script>
  import AppBar from "./AppBar.svelte";
  import { POPUPS } from "./constants";
  import Desktop from "./Desktop.svelte";
  import MessagePicker from "./windows/MessagePicker.svelte";

  const registry = POPUPS.reduce((registry, popup) => {
    registry[popup.id] = popup;
    return registry;
  }, {});

  $: {
    console.log({ registry });
  }

  let trigger = false;
  let next = POPUPS[0].id;

  function start() {
    trigger = true;
  }

  function stop() {
    trigger = false;
  }
</script>

<div class="panel">
  <select bind:value={next}>
    {#each POPUPS as popup}
      <option value={popup.id}>{popup.id}</option>
    {/each}
  </select>
  <button on:click={start} disabled={trigger}>Launch</button>
</div>

<svg width="100%" height="100%" viewBox="0 0 960 540">
  <Desktop width="100%" height="100%" background="#732640">
    {#if trigger}
      <MessagePicker {...registry[next]} on:done={stop} />
    {/if}
  </Desktop>
</svg>

<style>
  .panel {
    position: absolute;
    left: 50%;
    top: 10px;
    width: 400px;
    min-height: 100px;
    background: silver;
    transform: translateX(-50%);
  }
</style>
