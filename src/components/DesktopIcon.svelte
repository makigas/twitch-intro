<script>
  export let icon, text;
  export let x, y;
</script>

<svg {x} {y} width="150" height="100">
  <image href={icon} x="56" y="6" width="48" height="48" />
  <text x="50%" y="80" text-anchor="middle" fill="white" font-size="0.9em"
    >{text}</text
  >
</svg>
