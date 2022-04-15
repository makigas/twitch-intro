<script>
    import { createEventDispatcher } from "svelte";
    export let x, y;

    let className = "animate2";

    const NEXT_KEYFRAME = {
        "animation1": "animate2",
        "animation2": "animate3",
        "animation3": "animate4",
        "animation4": "animate5",
        "animation5": "animate6",
    }

    const dispatch = createEventDispatcher();

    const animate = (e) => {
        const animationTokens = e.animationName.split("-");
        const animationname = animationTokens[animationTokens.length - 1];
        const next = NEXT_KEYFRAME[animationname];
        className = next;
        dispatch("animationstep", animationname);
    }
</script>

<image on:animationend={animate} class={className} href="adwaita/left_ptr.png" {x} {y} width="48" height="48" />

<style>
    @keyframes animation1 {
        from { opacity: 0; }
        to { opacity: 0; }
    }
    @keyframes animation2 {
        from { transform: translateX(100%) translateY(100%); opacity: 0; }
        to { transform: translateX(0) translateY(0); opacity: 1; }
    }
    @keyframes animation3 {
        from {
            transform: translateX(0) translateY(0);
        }
        50% {
            transform: scale(0.8) translateX(22%) translateY(12%);
        }
        to {
            transform: translateX(0) translateY(0);
        }
    }
    @keyframes animation4 {
        from { opacity: 1; }
        to { opacity: 1; }
    }
    @keyframes animation5 {
        from { transform: translateX(0) translateY(0); opacity: 1; }
        to { transform: translateX(100%) translateY(100%); opacity: 0; }
    }

    .animate1 {
        animation-name: animation1;
        animation-duration: 2s;
        animation-iteration-count: 1;
        opacity: 0;
    }
    .animate2 {
        animation-name: animation2;
        animation-duration: 2s;
        animation-iteration-count: 1;
    }
    .animate3 {
        animation-name: animation3;
        animation-duration: 0.25s;
        animation-iteration-count: 1;
    }
    .animate4 {
        animation-name: animation4;
        animation-duration: 1.5s;
        animation-iteration-count: 1;
        opacity: 1;
    }
    .animate5 {
        animation-name: animation5;
        animation-duration: 2s;
        animation-iteration-count: 1;
        animation-fill-mode: forwards;
        opacity: 0;
    }
    .animate6 {
        opacity: 0;
    }
</style>
