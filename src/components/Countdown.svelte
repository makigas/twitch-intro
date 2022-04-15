<script>
  export let duration, x, y;
  let endsAt = Date.now() + duration * 1000;

  function durationToTime(seconds) {
    if (seconds < 0) return "0:00";
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs < 10 ? `0${secs}` : secs}`;
  }

  let remaining = (endsAt - Date.now()) / 1000;
  let value = durationToTime(remaining);
  let interval;

  $: {
    clearInterval(interval);
    interval = setInterval(() => {
      remaining = Math.round((endsAt - Date.now()) / 1000);
      value = durationToTime(remaining);
    }, 1000);
  }
</script>

<text
  {x}
  {y}
  class="countdown"
  dominant-baseline="central"
  text-anchor="middle"
  font-weight="300"
  font-size="3em">{value}</text
>

<style>
  .countdown {
    font-variant-numeric: tabular-nums;
  }
</style>
