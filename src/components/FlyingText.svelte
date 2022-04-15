<script>
    export let state = "normal";
</script>

<text on:animationend class={state} x="50%" y="50%" font-size="0.8em" dominant-baseline="central" text-anchor="middle">
    <slot></slot>
</text>

<style scoped>
    @keyframes enter {
        from {
            opacity: 0;
            transform: translateX(100%);
        }
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }
    @keyframes gone {
        from {
            opacity: 1;
            transform: translateX(0);
        }
        to {
            opacity: 0;
            transform: translateX(-100%);
        }
    }
    @keyframes flash {
        from {
            opacity: 1;
        }
        50% {
            opacity: 0.6;
        }
        to {
            opacity: 1;
        }
    }
    .enter {
        animation-name: enter;
        animation-duration: 0.75s;
        animation-timing-function: ease-out;
        animation-iteration-count: 1;
    }
    .normal {
        animation-name: flash;
        animation-duration: 2s;
        animation-timing-function: ease-in-out;
        animation-iteration-count: 5;
    }
    .gone {
        animation-name: gone;
        animation-duration: 0.75s;
        animation-timing-function: ease-in;
        animation-iteration-count: 1;
        animation-fill-mode: forwards;
    }
</style>
