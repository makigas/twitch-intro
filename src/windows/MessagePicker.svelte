<script>
  export let kind;

  console.log($$props);

  import BreakingNews from "./BreakingNews.svelte";
  import ChatBubble from "./ChatBubble.svelte";
  import BoardPopup from "./BoardPopup.svelte";
  import Mandarina from "./Mandarina.svelte";
  import KiwiBsod from "./KiwiBsod.svelte";
  import Farm from "./Farm.svelte";
  import Bun from "./Bun.svelte";
  import Corporate from "./Corporate.svelte";
  import PatitaPopup from "./Patita.svelte";
  import DrinkReminder from "./DrinkReminder.svelte";

  const elements = {
    BreakingNews,
    ChatBubble,
    DrinkReminder,
    BoardPopup,
    Mandarina,
    KiwiBsod,
    Farm,
    Corporate,
    Bun,
    PatitaPopup,
  };
</script>

<svelte:component this={elements[kind]} {...$$props} on:done />
