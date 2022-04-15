<script>
  import CloseableWindow from "../components/CloseableWindow.svelte";
  export let author;
</script>

<CloseableWindow
  on:done
  x="50"
  y="250"
  width="800"
  height="240"
  title="Últimas noticias"
>
  <g class="icon">
    <rect x="30" y="80" width="100" height="100" fill="#ff7800" rx="5" ry="5" />
    <image
      href="adwaita/application-rss+xml-symbolic.svg"
      x="40"
      y="90"
      width="80"
      height="80"
    />
  </g>
  <text
    x="150"
    y="100"
    font-weight="bold"
    font-size="1.2em"
    dominant-baseline="middle"
    text-anchor="left">Las noticias del día:</text>
  <foreignObject fill="black" x="150" y="125" width="600" height="100">
    <div style="color: black; font-size: 1.1em;" xmlns="http://www.w3.org/1999/xhtml">
      <slot />
      <p style="font-weight: 300;">Informa: {author}</p>
    </div>
  </foreignObject>
</CloseableWindow>
