<script>
  import cross from "../assets/cross-symbolic.svg";
  
  export let hide, x, y, width, height;
  export let title;
  let ready = false;

  let uniqueID = Date.now() + "" + Math.random();
</script>

<svg
  on:animationend={() => (ready = true)}
  class={`window ${hide ? " hide" : ""}`}
  {width}
  {height}
  {x}
  {y}
>
  <mask id={`${uniqueID}_mask`}>
    <rect x="0" y="0" width="100%" height="100%" fill="black" />
    <rect x="0" y="0" width="100%" height="100%" rx="8" ry="8" fill="white" />
  </mask>
  <g mask={`url(#${uniqueID}_mask)`}>
    <rect height="100%" width="100%" fill="white" />
    <svg class="mainHost" width="100%" height="100%" x="0" y="0">
      {#if ready}
        <slot />
      {/if}
    </svg>
    <g class="titleBar">
      <rect class="titleBarBackground" x="0" y="0" width="100%" height="40" />
      <text x="50%" y="20" class="titleText">{title}</text>
      <g class="closeButtonContainer">
        <image
          width="20"
          height="20"
          x="-30"
          y="10"
          href={cross}
        />
      </g>
      <line
        x1="0"
        y1="40"
        x2="100%"
        y2="40"
        stroke="#00000030"
        stroke-width="0.5"
      />
    </g>
  </g>
</svg>

<style>
  @keyframes enter {
    from {
      opacity: 0.2;
      transform: translateX(25%) translateY(25%) scale(0.5);
    }

    to {
      opacity: 1;
      transform: translateX(0) translateY(0) scale(1);
    }
  }

  @keyframes hide {
    from {
      opacity: 1;
      transform: translateX(0) translateY(0) scale(1);
    }
    to {
      opacity: 0;
      transform: translateX(25%) translateY(25%) scale(0.5);
    }
  }

  .titleText {
    dominant-baseline: central;
    text-anchor: middle;
    fill: var(--title-bar-foreground);
    font-weight: bold;
  }

  .window {
    width: var(--window-width);
    height: var(--window-height);
    filter: drop-shadow(0 0 2px rgba(0, 0, 0, 0.7));
    -moz-filter: drop-shadow(0 0 2px rgba(0, 0, 0, 0.7));
    -webkit-filter: drop-shadow(0 0 2px rgba(0, 0, 0, 0.7));

    animation: enter 0.25s ease-out;
  }

  .hide {
    animation: hide 0.25s ease-in;
    animation-fill-mode: forwards;
  }

  .closeButtonContainer {
    transform: translateX(100%);
  }

  .titleBarBackground {
    fill: var(--title-bar-background);
  }
</style>
