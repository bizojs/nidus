<script>
    export let product

    const rating = {
        get count() {
            if (product.rating <= 0) return []
            return "-".repeat(Math.floor(product.rating) - 1).split("-")
        },
        get remainder() {
            if (this.count?.length < 1) return "-".repeat(4).split("-")
            if (this.count?.length === 5) return []
            return "-".repeat(4 - this.count.length).split("-")
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

<a href="/products/{product.category}/{product.name.toLowerCase()}" class="px-4 py-2 bg-secondary rounded-3xl shadow-md flex flex-col justify-between items-center flex-grow lg:w-[20%] w-full lg:min-w-fit min-w-full h-40 popular relative overflow-hidden">
    <img src={product.pictures[0]} alt="" class="w-full h-auto absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 z-[1]">
    <h1 class="text-4xl font-bold text-white drop-shadow my-5 z-[2]">{product.name}</h1>
    <div class="w-full flex justify-between z-[2]">
        <div class="flex flex-col">
            <div class="flex">
                {#each rating.count as star}
                    <i class="fa-solid fa-star text-xs text-white drop-shadow"></i>
                {/each}
                {#each rating.remainder as star}
                    <i class="fa-solid fa-star text-xs text-gray-400 drop-shadow"></i>
                {/each}
            </div>
            <p class="text-sm text-gray-300">{reviews.format} reviews</p>
        </div>
        <h1 class="self-end text-light font-black text-lg drop-shadow">$ {product.price}</h1>
    </div>
</a>
<!-- <a href="/products/{product.category}/{product.name.toLowerCase()}" class="px-4 py-2 bg-secondary rounded-3xl shadow-lg flex flex-col justify-between items-center flex-grow lg:w-1/5 lg:max-w-[20%] w-full h-40 hover:scale-[1.01] transition-all duration-300 popular" style="background-image: url({product.pictures[0]})">
    <h1 class="text-4xl font-bold text-white drop-shadow my-5">{product.name}</h1>
    <div class="w-full flex justify-between">
        <div class="flex flex-col">
            <div class="flex">
                {#each rating.count as star}
                    <i class="fa-solid fa-star text-xs text-white drop-shadow"></i>
                {/each}
                {#each rating.remainder as star}
                    <i class="fa-solid fa-star text-xs text-gray-400 drop-shadow"></i>
                {/each}
            </div>
            <p class="text-sm text-gray-300">{reviews.format} reviews</p>
        </div>
        <h1 class="self-end text-light font-black text-lg drop-shadow">$ {product.price}</h1>
    </div>
</a> -->