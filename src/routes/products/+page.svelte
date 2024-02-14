<script>
    import { Product } from "$lib/components/shop"
    import { scale } from "svelte/transition"
    import { products } from "$lib/products"
    import { goto } from "$app/navigation"
    import { page } from "$app/stores"
    import { chunk } from "$lib/util"
    import { onMount } from "svelte"

    const pageSize = 10
    
    $: category = $page.url.searchParams?.get("category")
    $: categories = structuredClone(products.categories)
    $: chunks = [].chunk
        ? products.category(category).chunk(pageSize)
        : chunk(products.category(category), pageSize)
    $: currentChunk = 0
    $: filtered = chunks[0]
    $: loading = false

    function loadMore() {
        if (disabled) return
        loading = true
        setTimeout(() => {
            ++currentChunk
            filtered = [...filtered, ...chunks[currentChunk]]
            loading = false
        }, 1000)
    }
    
    onMount(() => {
        if (!category) setParam("category", "all", true)
        if (!categories.includes(category)) setParam("category", "all", true)
    })

    function setParam(param, value, redirect) {
        $page.url.searchParams.set(param, value)
        if (redirect) goto($page.url.href, { noScroll: true })
    }

    function filter(cat) {
        currentChunk = 0
        categories = categories.filter(item => item !== cat)
        categories.unshift(cat)
        category = cat
        setParam("category", cat, true)
    }

    $: disabled = loading || !chunks[currentChunk+1] ? true : false

</script>

<div class="lg:block hidden w-full h-full bg-img opacity-20" />
<div class="w-full flex flex-col justify-evenly gap-20 lg:mt-20 mt-5">
    <div class="flex flex-col gap-10">
        <h1 class="lg:text-5xl text-4xl text-left w-full font-black drop-shadow-lg">Hot 🔥</h1>
        <div class="flex gap-5 w-full lg:flex-wrap flex-wrap-0 lg:items-start items-center lg:overflow-x-hidden overflow-x-auto lg:pb-0 pb-3">
            {#each products.popular as product}
                <Product {product} />
            {/each}
        </div>
    </div>
    <div class="flex flex-col gap-2">
        <h1 class="lg:text-2xl text-xl text-left w-full font-bold drop-shadow-lg">
            All Products
        </h1>
        <div class="flex gap-1 mb-8 lg:overflow-x-hidden overflow-x-scroll lg:pb-0 pb-2">
            {#each categories as cat}
                <button on:click={() => filter(cat)} class="{category === cat ? "bg-accent-alt hover:bg-accent" : "border-2 border-accent-alt/50 hover:border-accent-alt"} transition-all px-6 rounded-full py-1 text-sm flex gap-2 items-center select-none">
                    <p class={category === cat ? "text-light" : "text-secondary"}>{cat}</p>
                    <p class="{category === cat ? "text-light" : "text-secondary"} text-[11px]">({products.category(cat).length})</p>
                </button>
            {/each}
        </div>
        {#if filtered?.length > 0}
            {#key category}
                <div class="flex lg:flex-row flex-col gap-5 w-full flex-wrap lg:items-start items-center">
                    {#each filtered as product}
                        <Product {product} />
                    {/each}
                </div>
            {/key}
        {/if}
        <div class="flex my-10 w-full justify-center">
            {#key category}
                <button in:scale={{ start: 0.9, opacity: 0.7 }} on:click={loadMore} class="flex items-center gap-2 group" {disabled}>
                    {#if loading}
                        <i class="fa-solid fa-circle-notch fa-spin"></i>
                        <p class="font-medium opacity-50">
                            Loading
                        </p>
                    {:else}
                        {#if disabled}
                            <p class="font-medium opacity-50">
                                No more products to load
                            </p>
                        {:else}
                            <p class="font-medium text-accent group-hover:text-accent-alt transition-all">
                                Load More
                            </p>
                        {/if}
                    {/if}
                </button>
            {/key}
        </div>
    </div>
</div>