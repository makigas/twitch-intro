<script>
  import { STATUSES } from "../constants.js";
  import tmi from "tmi.js";

  let messages = [];

  function getMessage(who) {
    const rand = (Math.random() * STATUSES.length).toFixed();
    const status = STATUSES[rand];
    const cleanStatus = status.toLowerCase().split(" -- ")[0];
    const message = `${who} está ${cleanStatus}`;
    messages = [...messages, message];
    if (messages.length > 8) {
      let last8 = messages.slice(-8);
      messages = [...last8];
    }
  }

  let client = new tmi.Client({
    channels: ["danirod_"],
  });

  client.on("message", (channel, tags, message, self) => {
    const who = tags["display-name"];
    getMessage(who);
  });

  client.connect();
</script>

<div class="messages">
  {#each messages as message}
  <p>{message}</p>
  {/each}
</div>

<style scoped>
  .messages {
    margin-top: 5vh;
    border: 10px solid #aaa;
    line-height: 1;
    height: 12em;
    overflow: hidden;
  }
  .messages p {
    line-height: 1.5;
    margin-top: 0em;
    margin-bottom: 0em;
    white-space: nowrap;
  }
</style>
