<script>
  import FlyingText from "./FlyingText.svelte";

  let messages = [
    "Montando el disco duro de los memes...",
    "Sacando brillo a los teclados...",
    "Desfragmentando un kiwi...",
    "Actualizando el entorno gráfico...",
    "Acariciando patos...",

    // @ckmu32
    "Preparando el nuevo año de Java en YouTube... -- @ckmu32",

    // @messer199
    "Preparando el curso de Scala... es coña, antes sale HL3 -- @messer199",
  ];

  const NEXTS = {
    enter: "normal",
    normal: "gone",
    gone: "enter",
  };

  let currentMessage = "";
  let state = "gone";

  const pickSentence = () => {
    const random = Math.floor(Math.random() * messages.length);
    currentMessage = messages[random];
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
