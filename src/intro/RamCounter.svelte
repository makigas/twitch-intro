<script>
  import { createEventDispatcher } from "svelte";
  export let count = 4096;
  let value = 0;

  const dispatch = createEventDispatcher();

  let timer = setInterval(() => {
    value += 1024;
    if (value > count) {
      value = count;
      clearInterval(timer);
      dispatch("done");
    }
  }, 10);
</script>

<span>{value}</span>
