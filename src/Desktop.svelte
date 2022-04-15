<script>
    import AppBar from './AppBar.svelte';

    export let width, height;
    export let background;
</script>

<svg class="desktop" x="0" y="0" width={width} height={height}>
    <rect fill={background} x="0" y="0" height="100%" width="100%" />
    <slot></slot>
    <AppBar />
</svg>

<style>

</style>
