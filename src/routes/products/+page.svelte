<script>
    import { Popular } from "$lib/components/shop"
    import { products } from "$lib/products"
    import { goto } from "$app/navigation"
    import { page } from "$app/stores"
    import { onMount } from "svelte"

    $: category = $page.url.searchParams?.get("category")
    $: categories = products.categories
    $: chunk = 0
    $: filtered = structuredClone(products.chunked[0])
    $: loading = false

    function loadMore() {
        if (loading || !products.chunked[chunk + 1]) return
        loading = true
        setTimeout(() => {
            ++chunk
            filtered = [...filtered, ...products.chunked[chunk]]
            loading = false
        }, 1000)
    }
    
    onMount(() => {
        if (!category) setParam("category", "all", true)
    })

    function setParam(param, value, redirect) {
        $page.url.searchParams.set(param, value)
        if (redirect) goto($page.url.href, { noScroll: true })
    }

    function filter(cat) {
        categories = categories.filter(item => item !== cat)
        categories.unshift(cat)
        category = cat
        setParam("category", cat, true)
        filtered = structuredClone(products.chunked[0])
        if (category == "all") return
        filtered = products.all.filter(products => products.category === category)
    }

</script>

<!-- <div class="lg:block hidden w-full h-full bg-img" /> -->
<div class="p-4 w-full flex flex-col justify-evenly gap-20 lg:mt-20 mt-5">
    <div class="flex flex-col gap-10">
        <h1 class="lg:text-5xl text-4xl text-left w-full font-black drop-shadow-lg">Hot 🔥</h1>
        <div class="flex gap-5 w-full lg:flex-wrap flex-wrap-0 lg:items-start items-center lg:overflow-x-hidden overflow-x-auto lg:pb-0 pb-3">
            {#each products.popular as product}
                <Popular {product} />
            {/each}
        </div>
    </div>
    <div class="flex flex-col gap-2">
        <div class="flex w-full justify-between">
            <h1 class="lg:text-2xl text-xl text-left w-full font-bold drop-shadow-lg">All Products ({products.all.length})</h1>
            <button class="bg-accent-dark/5 hover:bg-accent-dark/10 transition-all py-2 px-3 rounded-xl">
                <i class="fa-solid fa-filter"></i>
            </button>
        </div>
        <div class="flex gap-1 mb-8">
            {#each categories as cat}
                <button on:click={() => filter(cat)} class="{category === cat ? "bg-accent-alt hover:bg-accent" : "border-2 border-accent-alt/50 hover:border-accent-alt"} transition-all px-6 rounded-full py-1 text-sm">{cat}</button>
            {/each}
        </div>
        {#key category}
            <div class="flex lg:flex-row flex-col gap-5 w-full flex-wrap lg:items-start items-center">
                {#each filtered as product}
                    <Popular {product} />
                {/each}
            </div>
        {/key}
        <div class="flex my-10 w-full justify-center">
            <button on:click={loadMore} class="flex items-center gap-2 bg-accent-dark/20 hover:bg-accent-dark/30 transition-all px-5 py-2 rounded-lg" disabled={loading || !products.chunked[chunk + 1]}>
                {#if loading}
                    <i class="fa-solid fa-circle-notch fa-spin"></i>
                {/if}
                <p class="font-medium">Load More</p>
            </button>
        </div>
    </div>
</div>