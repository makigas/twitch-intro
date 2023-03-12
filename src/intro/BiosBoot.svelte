<script>
  import { createEventDispatcher } from "svelte";

  import bios from "./bios.png";
  import energy from "./energy.png";

  import RamCounter from "./RamCounter.svelte";

  const dispatch = createEventDispatcher();

  export let delay;

  let showCounter = false;
  let showDevices = false;
  let showStarting = false;

  setTimeout(() => showCounter = true, delay);

  function onMemoryCounted() {
    setTimeout(() => (showDevices = true), 1000);
    setTimeout(() => (showStarting = true), 2000);
    setTimeout(() => dispatch("done"), 6000);
  }
</script>

<img src={energy} alt="Energy Star" class="energy" />
<div class="content">
  <p>
    <img src={bios} class="bios" alt="BIOS" />
    BIOS sensual y modulable
  </p>

  {#if showCounter}
  <p class="specs">
    CPU:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ARM Cortex-A9 QuadCore<br
    />
    RAM Memory: <RamCounter on:done={onMemoryCounted} count={131072} /> MB OK
  </p>
  {/if}

  {#if showDevices}
    <p class="devices">
      Primary Device Boot: OK, HDD<br />
      Secondary Device Boot: OK, SSD
    </p>
  {/if}

  {#if showStarting}
    <p class="starting">Starting...</p>
  {/if}

  <p class="bottom">
    Pulsa DEL para entrar en BIOS<br />
    Pulsa F1 para detectar teclado
  </p>
</div>

<style>
  .content {
    position: relative;
    height: 90vh;
  }
  .energy {
    float: right;
  }
  .bios {
    height: 1em;
    vertical-align: bottom;
  }
  .specs {
    padding-top: 1ch;
  }
  .devices,
  .starting {
    padding-top: 2ch;
  }

  .bottom {
    position: absolute;
    bottom: 0;
    left: 0;
  }
</style>
