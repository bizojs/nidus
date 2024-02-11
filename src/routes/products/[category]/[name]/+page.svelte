<script>
    import { ImageModal } from "$lib/components/popups"
    import { basket, nav } from "$lib/stores"

    export let data

    $: imageOpen = false
    $: thumbnail = ""

    const name = data.name.toLowerCase().replace(/\s/g, "")

    async function getThumbnail() {
        const req = await import(`../../../../lib/products/${name}.png?enhanced`)
        thumbnail = req.default
        return thumbnail
    }

    function addToBasket() {
        if (!$basket.filter(i => i.id === data.id)[0]) nav.open()
        basket.add({ ...data, amount: 1 })
    }

    function toggleImage() {
        imageOpen = !imageOpen
    }
</script>

<div class="flex flex-col gap-10 w-full justify-between h-full select-none">
    <button on:click={toggleImage} class="flex flex-grow w-full rounded-xl overflow-hidden relative lg:p-60 p-28 drop-shadow-lg popular">
        {#await getThumbnail(name) then thumbnail}
            <enhanced:img src={thumbnail} alt="" class="w-full h-auto absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 z-[1] saturate-50 brightness-95 transition-all" draggable="false" />
        {/await}
    </button>
    <div class="flex flex-col flex-grow w-full">
        <h1 class="text-2xl lg:self-left self-center w-full first-letter:uppercase drop-shadow">{data.category}</h1>
        <div class="flex w-full items-center justify-between lg:gap-5 gap-2 flex-wrap">
            <h1 class="text-7xl font-black lg:text-left text-center drop-shadow-md">
                {data.name}
            </h1>
            <h1 class="text-4xl font-black lg:text-left text-center drop-shadow-md text-accent">
                ${data.price}
            </h1>
        </div>
        <div class="flex lg:justify-start justify-center w-full my-5">
            <button on:click={addToBasket} class="px-12 py-2.5 flex items-center gap-5 bg-accent hover:bg-accent-alt transition-all w-fit drop-shadow mt-5">
                <i class="fa-solid fa-cart-plus text-lg text-light"></i>
                <p class="text-light font-medium">Add To Shopping Cart</p>
            </button>
        </div>
    </div>
</div>

{#if imageOpen}
    <ImageModal src={thumbnail} on:close={() => imageOpen = false} />
{/if}