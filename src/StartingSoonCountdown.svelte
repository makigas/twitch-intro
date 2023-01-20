<script>
  import hourglass from "./assets/hourglass-symbolic.svg";
  import youtube from "./assets/icons/youtube.svg";
  import discord from "./assets/icons/discord.svg";
  import twitter from "./assets/icons/twitter.svg";

  import Desktop from "./Desktop.svelte";
  import RandomMessages from "./windows/RandomMessages.svelte";
  import StreamStarting from "./windows/StreamStarting.svelte";
  import DesktopIcon from "./components/DesktopIcon.svelte";
  import FlyingArrow from "./components/FlyingArrow.svelte";

  let ready = false;
  let showArrow = false;

  const mouseAnimation = (name) => {
    if (name.detail === "animation3") {
      setTimeout(() => (ready = true), 1000);
    }
  };

  $: {
    setTimeout(() => (showArrow = true), 4000);
  }
</script>

<main>
  <svg width="100%" height="100%" viewBox="0 0 960 540">
    <Desktop width="100%" height="100%" background="#264073">
      {#if ready}
        <StreamStarting />
        <RandomMessages />
      {/if}
      {#if showArrow}
        <FlyingArrow
          from="translateX(200%) translateY(1000%)"
          to="translateX(-300%) translateY(-400%)"
          on:animationstep={mouseAnimation}
          x="530"
          y="180"
        />
      {/if}
    </Desktop>
  </svg>
</main>

<style>
  @keyframes show {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  main {
    opacity: 0;
    width: 100vw;
    height: 100vh;
    animation: show 0.25s ease-out;
    animation-delay: 1.5s;
    animation-fill-mode: forwards;
  }
</style>
