<script>
  import CloseableWindow from "../components/CloseableWindow.svelte";

  export let title, line1, line2;
</script>

<CloseableWindow
  on:done
  x="400"
  y="250"
  width="450"
  height="250"
  duration={15000}
  {title}
>
  <image x="0%" width="100%" class="bg" href="images/farmer.jpg" />
  <foreignObject fill="black" x="20" y="50" width="250" height="300">
    <div
      style="color: white; font-weight: bold; text-shadow: 0 0 4px black; background: rgba(0, 0, 0, 0.5); font-size: 1.1em;"
      xmlns="http://www.w3.org/1999/xhtml"
    >
      <p>{line1}</p>
      <p>{line2}</p>
    </div>
  </foreignObject>
</CloseableWindow>
