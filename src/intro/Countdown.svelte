<script>
  import MessagePrinter from "./MessagePrinter.svelte";

  export let minutes = 0;

  /** @type number */
  export let limit = Date.now() + 60000 * minutes;

  let remaining = 0;
  let expired = false;

  function clamp(val) {
    if (val >= 10) {
      return val;
    } else {
      return `0${val}`;
    }
  }

  function sexagesimal(number) {
    const minutes = parseInt(number / 60);
    const seconds = parseInt(number % 60);
    return `${clamp(minutes)}:${clamp(seconds)}`;
  }

  const check = setInterval(() => {
    const now = Date.now();
    if (now > limit) {
      expired = true;
      clearInterval(check);
    } else {
      remaining = parseInt((limit - now) / 1000);
    }
  }, 100);
</script>

<div class="block">
  <p>PREPARANDO STREAM...</p>
  {#if expired}
    <p class="counter">VAMOS A EMPEZAR</p>
  {:else}
    <p class="counter">{sexagesimal(remaining)}</p>
  {/if}
</div>
<MessagePrinter />

<style scoped>
  .block {
    margin-top: 4vh;
    border: 10px solid #aaa;
    text-align: center;
    line-height: 1.5;
  }

  .block p {
    margin: 0 auto;
  }
  .counter {
    font-size: 2em;
    line-height: 1;
  }
</style>
