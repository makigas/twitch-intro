<script>
  import BreakingNews from "./BreakingNews.svelte";
  import ChatBubble from "./ChatBubble.svelte";
  import { POPUPS, SECONDS_BETWEEN_POPUPS } from "../constants";

  const popups = [...POPUPS];

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
    {#if current.kind === "BreakingNews"}
      <BreakingNews on:done={next} author={current.author}
        >{current.text}</BreakingNews
      >
    {:else if current.kind === "ChatBubble"}
      <ChatBubble on:done={next} author={current.author}
        >{current.text}</ChatBubble
      >
    {/if}
  {/if}
</g>
