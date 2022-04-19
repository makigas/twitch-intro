<script>
  import { STATUSES } from "../constants";
  import FlyingText from "./FlyingText.svelte";

  const NEXTS = {
    enter: "normal",
    normal: "gone",
    gone: "enter",
  };

  let currentMessage = "";
  let state = "gone";

  const pickSentence = () => {
    const random = Math.floor(Math.random() * STATUSES.length);
    currentMessage = STATUSES[random];
    state = "enter";
  };

  const iterate = () => {
    const next = NEXTS[state];
    state = next;

    if (state == "gone") {
      setTimeout(pickSentence, 1000);
    }
  };

  $: {
    setTimeout(() => pickSentence(), 5000);
  }
</script>

<FlyingText {state} on:animationend={iterate}>{currentMessage}</FlyingText>
