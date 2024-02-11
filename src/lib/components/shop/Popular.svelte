<script>
    import { scale } from "svelte/transition"
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

    const rating = {
        items: {
            5  : [1, 1, 1, 1, 1],
            4.5: [1, 1, 1, 1, 0.5],
            4  : [1, 1, 1, 1],
            3.5: [1, 1, 1, 0.5],
            3  : [1, 1, 1],
            2.5: [1, 1, 0.5],
            2  : [1, 1],
            1.5: [1, 0.5],
            1  : [1],
            0  : [],
        },
        get count() {
            const rounded = Math.floor(product.rating)
            const decimalPart = product.rating - rounded
            return this.items[rounded + decimalPart] || this.items[0]
        }
    }

    const reviews = {
        get format() {
            const SI_SYMBOL = ["", "k", "M"]
            const tier = Math.log10(Math.abs(product.reviews)) / 3 | 0
            if(tier == 0) return product.reviews
            const suffix = SI_SYMBOL[tier]
            const scale = Math.pow(10, tier * 3)
            const scaled = product.reviews / scale
            if (!suffix) return product.reviews.toLocaleString()
            return scaled.toFixed(1) + suffix
        }
    }
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
                        {#each rating.count as rating}
                            {#if rating === 1}
                                <i class="fa-solid fa-star text-xs text-accent drop-shadow"></i>
                            {:else if rating === 0.5}
                                <i class="fa-solid fa-star-half text-xs text-accent drop-shadow"></i>
                            {/if}
                        {/each}
                    </div>
                </div>
                <p class="text-sm text-gray-300">{reviews.format} reviews</p>
            </div>
            <h1 class="self-end text-light font-bold text-lg drop-shadow">${product.price.toFixed(2)}</h1>
        </div>
    </a>
{/if}