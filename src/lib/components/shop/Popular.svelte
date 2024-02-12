<script>
    import { scale } from "svelte/transition"
    import { products } from "$lib/products"
    import { onMount } from "svelte"

    export let product

    $: thumbnail = ""
    $: loaded = false

    const name = product.name.toLowerCase().replace(/\s/g, "")

    onMount(async() => {
        loaded = true
        const req = await import(`../../products/${name}.png?enhanced`)
        thumbnail = req.default
    })
</script>

{#if loaded}
    <a in:scale={{ start: 0.9, opacity: 1 }} href="/products/{product.category}/{name}" class="px-4 py-2 bg-secondary rounded-3xl shadow-md flex flex-col justify-between items-center flex-grow lg:w-[20%] w-full lg:min-w-fit min-w-full h-40 relative overflow-hidden group select-none popular">
        {#if thumbnail}
            <enhanced:img src={thumbnail} alt="" class="w-full h-auto absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 z-[1] saturate-50 group-hover:saturate-100 transition-all" />
        {/if}
        <h1 class="text-4xl font-bold text-white drop-shadow my-5 z-[2]">{product.name}</h1>
        <div class="w-full flex justify-between z-[2]">
            <div class="flex flex-col justify-end">
                <div class="flex">
                    <div class="flex absolute bottom-7 left-4">
                        <i class="fa-solid fa-star text-xs text-white drop-shadow"></i>
                        <i class="fa-solid fa-star text-xs text-white drop-shadow"></i>
                        <i class="fa-solid fa-star text-xs text-white drop-shadow"></i>
                        <i class="fa-solid fa-star text-xs text-white drop-shadow"></i>
                        <i class="fa-solid fa-star text-xs text-white drop-shadow"></i>
                    </div>
                    <div class="flex absolute bottom-7 left-4">
                        {#each products.rating(product.id) as rating}
                            {#if rating === 1}
                                <i class="fa-solid fa-star text-xs text-accent drop-shadow"></i>
                            {:else if rating === 0.5}
                                <i class="fa-solid fa-star-half text-xs text-accent drop-shadow"></i>
                            {/if}
                        {/each}
                    </div>
                </div>
                <p class="text-sm text-gray-300">{products.reviews(product.id)} reviews</p>
            </div>
            <h1 class="self-end text-light font-bold text-lg drop-shadow">${product.price.toFixed(2)}</h1>
        </div>
    </a>
{/if}