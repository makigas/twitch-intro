<script>
  import AppBar from "../AppBar.svelte";
  import { POPUPS, SECONDS_BETWEEN_POPUPS } from "../constants";
  import MessagePicker from "./MessagePicker.svelte";

  let popups = [...POPUPS];

  let current = null;

  const trigger = () => {
    if (POPUPS.length === 0) {
      return;
    }
    const pick = popups[Math.floor(Math.random() * popups.length)];
    current = pick;
    popups = popups.filter((n) => n.id !== pick.id);
  };

  const next = () => {
    current = null;
    setTimeout(trigger, SECONDS_BETWEEN_POPUPS * 1000); // reduce this as more messages are added
  };

  next();
</script>

<g>
  {#if current != null}
    <MessagePicker {...current} on:done={next} />
  {/if}
</g>
