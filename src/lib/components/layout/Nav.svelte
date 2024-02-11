<script>
    import { backInOut, quintOut } from "svelte/easing"
    import { basket, nav, contact } from "$lib/stores"
    import { Contact } from "$lib/components/popups"
    import { Indicator } from "$lib/components/shop"
    import { fade, fly } from "svelte/transition"
    import { clickOutside } from "$lib/actions"
    import { products } from "$lib/products"
    import { goto } from "$app/navigation"
    import { page } from "$app/stores"
    
    $: basketOpen = $nav
    $: contactOpen = $contact

    async function getThumbnail(name) {
        const req = await import(`../../products/${name}.png?enhanced`)
        return req.default
    }

    function continueShopping() {
        nav.toggle()
        goto("/products?category=all", { noScroll: true })
    }

    $: total = $basket?.reduce((acc, product) => acc + (products.price(product.id) * product.amount), 0).toFixed(2)
    $: tax = ((7.25 / 100) * total).toFixed(2)
    $: shipping = 100

    const pagesForExplore = ["/", "/about"]

</script>

<nav class="py-3 mb-10 flex justify-between items-center select-none">
    <a href="/">
        <h1 class="uppercase text-3xl font-black hover:text-secondary transition-all">nidus.</h1>
    </a>
    <div class="lg:flex hidden gap-6">
        <a href="/products" class="hover:text-secondary py-0.5 border-b-2 {$page.url.pathname === "/products" ? "border-accent hover:border-accent-alt" : "border-white/0 hover:border-accent"} transition-all">Shop</a>
        <a href="/about" class="hover:text-secondary py-0.5 border-b-2 {$page.url.pathname === "/about" ? "border-accent hover:border-accent-alt" : "border-white/0 hover:border-accent"} transition-all">About</a>
        <button on:click={contact.open} class="hover:text-secondary py-0.5 border-b-2 border-white/0 hover:border-accent transition-all">Contact Us</button>
    </div>
    <div class="flex items-center gap-5">
        {#if pagesForExplore.includes($page.url.pathname)}
            <a href="/products" class="lg:px-10 px-6 lg:py-3 py-2 lg:rounded-2xl rounded-xl text-light bg-accent-dark hover:bg-accent-dark-hover transition-all text-sm">Explore</a>
        {:else}
            <button on:click={nav.toggle} class="group relative">
                <Indicator />
                <i class="fa-solid fa-basket-shopping text-2xl group-hover:text-secondary transition-all"></i>
            </button>
        {/if}
        <button class="lg:hidden flex bg-accent-dark/10 hover:bg-accent-dark/20 transition-all lg:px-4 px-3 lg:py-2 py-1 lg:rounded-xl rounded-lg group">
            <i class="fa-solid fa-bars lg:text-xl text-lg group-hover:text-secondary transition-all"></i>
        </button>
    </div>
</nav>

{#if basketOpen}
    <div transition:fade={{ duration: 100 }} class="flex w-full h-full fixed top-0 left-0 backdrop-blur-[2px] bg-black/30 z-40">
        <div transition:fly={{ x: 200, duration: 600, easing: quintOut }} use:clickOutside on:outclick={nav.toggle} on:escape={nav.toggle} class="flex flex-col absolute top-0 right-0 lg:w-1/3 w-full h-full bg-secondary z-50 py-4 px-5 shadow-lg drop-shadow">
            <button transition:fly={{ y: -20, duration: 600, easing: backInOut }} on:click={nav.toggle} class="absolute top-4 right-5 group">
                <i class="fa-solid fa-xmark text-xl group-hover:text-secondary transition-all"></i>
            </button>
            <h1 class="font-black text-lg uppercase mb-5">Basket</h1>
            <div class="flex flex-col gap-3 overflow-y-auto flex-grow select-none">
                {#if $basket.length > 0}
                    {#each $basket as product (product.id)}
                        {@const name = product.name.toLowerCase().replace(/\s/g, "")}
                        <div class="flex w-full bg-primary/60 rounded-xl overflow-hidden relative popular p-5 select-none drop-shadow">
                            {#await getThumbnail(name) then thumbnail}
                                <enhanced:img src={thumbnail} alt="" class="w-full h-auto absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 z-[1] saturate-50 brightness-95 transition-all" />
                            {/await}
                            <div class="flex gap-2 w-full z-20 drop-shadow">
                                <div class="flex flex-col gap-5 w-full justify-between">
                                    <h1 class="text-xl font-semibold text-white drop-shadow-lg">
                                        {product.name}
                                    </h1>
                                    <p class="font-bold text-white drop-shadow-lg">
                                        $ {(products.price(product.id) * product.amount).toLocaleString()}
                                    </p>
                                </div>
                                <div class="flex flex-col border-2 border-accent-alt/50 rounded-lg">
                                    <button on:click={() => basket.add(product)} class="py-0.5 px-2.5 group">
                                        <i class="fa-solid fa-plus group-hover:text-accent transition-all text-sm text-accent-alt"></i>
                                    </button>
                                    <p class="py-0.5 px-2.5 text-accent-alt cursor-default">
                                        {product.amount}
                                    </p>
                                    <button on:click={() => basket.remove(product.id)} class="py-0.5 px-2.5 group">
                                        <i class="fa-solid fa-minus group-hover:text-accent transition-all text-sm text-accent-alt"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    {/each}
                {:else}
                    <p>Your basket is empty</p>
                {/if}
            </div>
            {#if $basket.length > 0}
                <div class="flex flex-col items-center justify-center my-5 gap-1 select-none w-full">
                    <div class="flex w-full justify-between items-center">
                        <p class="text-sm">Tax</p>
                        <p class="text-sm font-semibold">${tax.toLocaleString()}</p>
                    </div>
                    <div class="flex w-full justify-between items-center">
                        <p class="text-sm">Shipping</p>
                        <p class="text-sm font-semibold">${shipping.toLocaleString()}</p>
                    </div>
                    <div class="flex w-full justify-between items-center mt-2">
                        <p class="text-sm text-accent">Total</p>
                        <p class="text-sm font-semibold text-accent">${(Number(total) + Number(tax) + Number(shipping)).toFixed(2).toLocaleString()}</p>
                    </div>
                </div>
            {/if}
            <div class="flex items-center justify-center mb-5 gap-3 select-none">
                {#if $basket.length > 0}
                    <button on:click={continueShopping} class="w-full border border-black px-4 py-2 rounded text-sm font-medium text-center">Continue Shopping</button>
                    <button class="w-full border border-black px-4 py-2 rounded text-sm font-medium text-center">Checkout</button>
                {:else}
                    <button on:click={continueShopping} class="w-full border border-black px-4 py-2 rounded text-sm font-medium text-center">Browse Products</button>
                {/if}
            </div>
        </div>
    </div>
{/if}

{#if contactOpen}
    <Contact on:close={contact.close} />
{/if}