<script>
  export let duration;
  export let x, y, width, height;
</script>

<svg
  class="progress"
  on:animationend
  style={`--transition-duration: ${duration}s`}
  {width}
  {height}
  {x}
  {y}
>
  <mask id="progressMask">
    <rect x="0" y="0" width="100%" height="100%" fill="black" />
    <rect x="0" y="0" width="100%" height="100%" fill="white" rx="5" ry="5" />
  </mask>
  <g mask="url(#progressMask)" width="100%" height="100%">
    <rect fill="#e0e0e0" x="0" y="0" width="100%" height="100%" />
    <rect
      fill="#3584e4"
      class="foreground"
      x="0"
      y="0"
      width="100%"
      height="100%"
    />
  </g>
</svg>

<style>
  @keyframes progress {
    0% {
      width: 0%;
    }
    100% {
      width: 100%;
    }
  }
  .foreground {
    animation-name: progress;
    animation-play-state: running;
    animation-duration: var(--transition-duration);
    animation-iteration-count: 1;
    animation-timing-function: linear;
  }
</style>
