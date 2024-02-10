<script>
    import { onMount, onDestroy, createEventDispatcher } from "svelte"

    export let threshold = 0
    export let elementScroll
    export let hasMore = true

    const dispatch = createEventDispatcher()
    let isLoadMore = false
    let component

    $: {
        if (component || elementScroll) {
            const element = elementScroll ? elementScroll : component.parentNode
            element.addEventListener("scroll", onScroll)
            element.addEventListener("resize", onScroll)
        }
    }

    function onScroll(e) {
        const element = e.target
        const offset = e.target.scrollHeight - e.target.clientHeight - e.target.scrollTop
        if (offset <= threshold) {
            if (!isLoadMore && hasMore) {
                dispatch("loadMore")
            }
            isLoadMore = true
        } else {
            isLoadMore = false
        }
    }

    onDestroy(() => {
        if (component || elementScroll) {
            const element = elementScroll ? elementScroll : component.parentNode
            element.removeEventListener("scroll", onScroll)
            element.removeEventListener("resize", onScroll)
        }
    })
</script>

<div bind:this={component} class="w-0" />