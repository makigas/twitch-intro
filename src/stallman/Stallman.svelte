<script>
    import face from "./stallman.png";
    import song from "./fsf-song.ogg";

    const audio = new Audio(song);
    audio.loop = false;
    audio.volume = 0.3;
    audio.play();
</script>

<div class="container">
<div class="rotate">
    <img src={face} alt="Stallman" id="stallman">
</div>
</div>