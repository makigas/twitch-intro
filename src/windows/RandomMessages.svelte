<script>
    	import BreakingNews from './BreakingNews.svelte';
        import ChatBubble from './ChatBubble.svelte';

    let news = [
        {
            text: "Expertos en ciberseguridad recomiendan usar Emacs y Nano hasta nuevo aviso por vulnerabilidad encontrada en Vim",
            author: "@messer199",
            kind: "BreakingNews",
            id: "use-emacs",
        },
        {
            text: "Escribe eeeeeeeeeeeeeeeee en el chat cuando leas este mensaje",
            author: "@frostqui",
            kind: "ChatBubble",
            id: "eeeeeeeeeee",
        }
    ];
    let current = null

    const trigger = () => {
        if (news.length === 0) {
            return
        }
        const pick = news[Math.floor(Math.random() * news.length)];
        current = pick;
        news = news.filter((n) => n.id !== pick.id);
    }

    const next = () => {
        current = null
        setTimeout(trigger, 90000) // reduce this as more messages are added
    }

    next()
</script>

<g>
{#if current != null}
{#if current.kind === "BreakingNews"}
<BreakingNews on:done={next} author={current.author}>{current.text}</BreakingNews>
{:else if current.kind === "ChatBubble"}
<ChatBubble on:done={next} author={current.author}>{current.text}</ChatBubble>
{/if}
{/if}
</g>
