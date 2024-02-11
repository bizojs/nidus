<script>
    import { fade } from "svelte/transition"
    import { page } from "$app/stores"
</script>

{#key $page.url.pathname}
    <div in:fade>
        <slot />
    </div>
{/key}