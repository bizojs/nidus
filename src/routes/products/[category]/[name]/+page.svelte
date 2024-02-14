<script>
    import { ImageModal } from "$lib/components/popups"
    import { toast } from "$lib/notifications"
    import { basket, nav } from "$lib/stores"
    import { products } from "$lib/products"

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
        let item = $basket.filter(i => i.id === data.id)[0]
        if (!item) nav.open()
        if (item?.amount > 19) {
            toast.error({ message: "Out of Stock!", details: `Unable to add any more <span class='font-semibold text-inherit'>${data.name}</span> to your basket.` })
        } else {
            toast.success({ message: "Success", details: `1x <span class='font-semibold text-inherit'>${data.name}</span> has been added to your basket.` })
        }
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
        <h1 class="text-xl lg:self-left self-center w-full first-letter:uppercase drop-shadow">{data.category}</h1>
        <div class="flex w-full items-center justify-between lg:gap-5 gap-2 flex-wrap">
            <h1 class="text-7xl font-black lg:text-left text-center drop-shadow-md">
                {data.name}
            </h1>
            <h1 class="text-4xl font-black lg:text-left text-center drop-shadow-md text-accent">
                {products.formatPrice(data.price)}
            </h1>
        </div>
        <div class="flex flex-col mt-4">
            <div class="flex relative p-3">
                <div class="flex absolute top-1/2 -translate-y-1/2 left-0">
                    <i class="fa-solid fa-star text-white drop-shadow"></i>
                    <i class="fa-solid fa-star text-white drop-shadow"></i>
                    <i class="fa-solid fa-star text-white drop-shadow"></i>
                    <i class="fa-solid fa-star text-white drop-shadow"></i>
                    <i class="fa-solid fa-star text-white drop-shadow"></i>
                </div>
                <div class="flex absolute top-1/2 -translate-y-1/2 left-0">
                    {#each products.rating(data.id) as rating}
                        {#if rating === 1}
                            <i class="fa-solid fa-star text-accent drop-shadow"></i>
                        {:else if rating === 0.5}
                            <i class="fa-solid fa-star-half text-accent drop-shadow"></i>
                        {/if}
                    {/each}
                </div>
            </div>
            <p class="text-sm">{products.reviews(data.id)} reviews</p>
        </div>
        <div class="flex lg:justify-start justify-center w-full lg:my-0 my-10">
            <button on:click={addToBasket} class="px-12 py-2.5 flex items-center gap-5 bg-accent hover:bg-accent-alt transition-all lg:w-fit w-full drop-shadow mt-5">
                <i class="fa-solid fa-cart-plus text-lg text-light"></i>
                <p class="text-light font-medium">Add To Shopping Cart</p>
            </button>
        </div>
    </div>
</div>

{#if imageOpen}
    <ImageModal src={thumbnail} on:close={() => imageOpen = false} />
{/if}