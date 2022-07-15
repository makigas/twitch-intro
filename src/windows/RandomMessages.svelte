<script>
  import BreakingNews from "./BreakingNews.svelte";
  import ChatBubble from "./ChatBubble.svelte";
  import BoardPopup from "./BoardPopup.svelte";
  import Patita from "./Patita.svelte";
  import Mandarina from "./Mandarina.svelte";
  import KiwiBsod from "./KiwiBsod.svelte";
  import Farm from "./Farm.svelte";
  import Bun from "./Bun.svelte";
  import { POPUPS, SECONDS_BETWEEN_POPUPS } from "../constants";

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
    {#if current.kind === "Bun" }
      <Bun on:done={next} />
    {:else if current.kind === "Mandarina"}
      <Mandarina on:done={next} />
    {:else if current.kind === "BreakingNews"}
      <BreakingNews on:done={next} author={current.author}
        >{current.text}</BreakingNews
      >
    {:else if current.kind === "Farm"}
      <Farm on:done={next} {...current} />
    {:else if current.kind === "KiwiBsod"}
      <KiwiBsod on:done={next} />
    {:else if current.kind === "ChatBubble"}
      <ChatBubble on:done={next} author={current.author}
        >{current.text}</ChatBubble
      >
    {:else if current.kind === "BoardPopup"}
      <BoardPopup on:done={next} />
    {:else if current.kind === "PatitaPopup"}
      <Patita on:done={next} />
    {/if}
  {/if}
</g>
