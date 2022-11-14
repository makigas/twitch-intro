<script>
  import charts from "../assets/images/charts.jpg";
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
  <image x="0%" width="100%" class="bg" href={charts} />
  <foreignObject fill="black" x="20" y="50" width="350" height="300">
    <div
      style="padding: 10px; color: white; font-weight: bold; text-shadow: 0 0 4px black; background: rgba(0, 0, 0, 0.5); font-size: 1.1em;"
      xmlns="http://www.w3.org/1999/xhtml"
    >
      <p style="margin: 0; line-height: 1;">&lt;anuncio&gt;</p>
        <p style="margin: 0 0 0 1em; line-height: 1.25;">¿Harto de sentirte desestructurado?</p>
        <p style="margin: 0 0 0 1em; line-height: 1.25;">Pásate a XML.</p>
      <p style="margin: 0; line-height: 1;">&lt;/anuncio&gt;</p>

      <p style="font-size: 0.8rem; text-align: center;">Un mensaje ofrecido por @likendero</p>
    </div>
  </foreignObject>
</CloseableWindow>
