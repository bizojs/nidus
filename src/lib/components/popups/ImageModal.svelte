<script>
    import { createEventDispatcher, onMount } from "svelte"
    import { fade, scale } from "svelte/transition"
    import { clickOutside } from "$lib/actions"

    export let src

    $: loaded = false

    onMount(() => loaded = true)

    const dispatch = createEventDispatcher()

    function close() {
        dispatch("close")
    }
</script>

{#if loaded}
    <div transition:fade class="flex fixed justify-center items-center w-full h-full left-0 top-0 backdrop-blur-sm bg-black/30 z-50">
        <button on:click={close} class="absolute top-5 right-5 z-[60] group">
            <i class="fa-solid fa-xmark text-light group-hover:text-white transition-all text-2xl px-2 drop-shadow-md"></i>
        </button>
        <div class="flex justify-center items-center w-full h-full p-5">
            <img transition:scale={{ start: 0.95, opacity: 0.6 }} use:clickOutside on:outclick={close} on:escape={close} src={src.img.src} alt="" class="lg:h-full h-auto lg:w-auto w-full">
        </div>
    </div>
{/if}