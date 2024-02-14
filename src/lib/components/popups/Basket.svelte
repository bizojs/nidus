<script>
    import { clickOutside, stopScroll } from "$lib/actions"
    import { fade, fly, slide } from "svelte/transition"
    import { backInOut, quintOut } from "svelte/easing"
    import { createEventDispatcher } from "svelte"
    import { toast } from "$lib/notifications"
    import { basket, nav } from "$lib/stores"
    import { products } from "$lib/products"
    import { goto } from "$app/navigation"

    const dispatch = createEventDispatcher()

    $: discountCodeOpen = false
    $: applied = false
    $: coupon = ""

    async function getThumbnail(name) {
        const req = await import(`../../products/${name}.png?enhanced`)
        return req.default
    }

    function continueShopping() {
        nav.toggle()
        goto("/products?category=all", { noScroll: true })
    }

    function toggleDiscountCodeBox() {
        discountCodeOpen = !discountCodeOpen
    }

    function submitCoupon() {
        if (!coupon) return
        toast.success({ message: "Coupon applied!", details: `Successfully applied coupon code "<span class="text-sm font-medium">${coupon}</span>"` })
        applied = coupon
        coupon = ""
    }

    function removeCoupon() {
        toast.info({ message: "Coupon removed.", details: `The coupon code "<span class="text-sm font-medium">${applied}</span>" has been removed` })
        applied = ""
        coupon = ""
    }

    function close() {
        dispatch("close")
    }

    $: total = $basket?.reduce((acc, product) => acc + (products.price(product.id) * product.amount), 0).toFixed(2)
    $: delivery = 100
</script>

<div use:stopScroll={{ force: false }} transition:fade={{ duration: 100 }} class="flex w-full h-full fixed top-0 left-0 backdrop-blur-[2px] bg-black/30 z-40">
    <div transition:fly={{ x: 200, duration: 600, easing: quintOut }} use:clickOutside on:outclick={close} on:escape={close} class="flex flex-col absolute top-0 right-0 lg:w-1/3 w-full h-full bg-secondary z-50 py-4 px-5 shadow-lg drop-shadow">
        <button transition:fly={{ y: -20, duration: 600, easing: backInOut }} on:click={close} class="absolute top-4 right-5 group">
            <i class="fa-solid fa-xmark text-xl group-hover:text-secondary transition-all"></i>
        </button>
        <h1 class="font-black text-lg uppercase mb-5">Basket</h1>
        <div class="flex flex-col gap-3 overflow-y-auto flex-grow select-none">
            {#if $basket.length > 0}
                {#each $basket as product (product.id)}
                    {@const name = product.name.toLowerCase().replace(/\s/g, "")}
                    <div class="flex w-full bg-primary/60 rounded-xl overflow-hidden relative popular p-5 select-none drop-shadow min-h-32">
                        {#await getThumbnail(name) then thumbnail}
                            <enhanced:img src={thumbnail} alt="" class="w-full h-auto absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 z-[1] saturate-50 brightness-95 transition-all" />
                        {/await}
                        <div class="flex gap-2 w-full z-20 drop-shadow">
                            <div class="flex flex-col gap-5 w-full justify-between">
                                <h1 class="text-xl font-semibold text-white drop-shadow-lg">
                                    {product.name}
                                </h1>
                                <p class="font-bold text-white drop-shadow-lg">
                                    £{(products.price(product.id) * product.amount).toLocaleString()}
                                </p>
                            </div>
                            <button on:click={() => basket.clear(product.id)} class="mx-2 group h-fit self-center">
                                <i class="fa-solid fa-trash text-accent-alt/90 group-hover:text-accent transition-all"></i>
                            </button>
                            <div class="flex flex-col border-2 border-accent-alt/50 rounded-lg relative">
                                <button on:click={() => basket.add(product)} class="px-2.5 group">
                                    <i class="fa-solid fa-plus group-hover:text-accent transition-all text-xs text-accent-alt"></i>
                                </button>
                                <span class="flex flex-grow"></span>
                                {#key product.amount}
                                    <p transition:slide class="px-2.5 text-accent-alt cursor-default text-sm font-bold absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2">
                                        {product.amount}
                                    </p>
                                {/key}
                                <button on:click={() => basket.remove(product.id)} class="px-2.5 group">
                                    <i class="fa-solid fa-minus group-hover:text-accent transition-all text-xs text-accent-alt"></i>
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
                    <p class="text-sm">Total</p>
                    <p class="text-sm font-semibold">£{Number(total).toLocaleString()}</p>
                </div>
                <div class="flex w-full justify-between items-center">
                    <p class="text-sm">Delivery</p>
                    <p class="text-sm font-semibold">£{delivery.toLocaleString()}</p>
                </div>
                <div class="flex w-full justify-between {applied ? "items-start" : "items-center"} mt-2">
                    <p class="text-sm text-accent">Subtotal Inc VAT</p>
                    {#if applied}
                        <div class="flex flex-col">
                            <p class="text-sm font-semibold text-accent/60 line-through w-fit self-end">£{(Number(total) + Number(delivery)).toFixed(2).toLocaleString()}</p>
                            <div class="flex gap-2 uppercase">
                                <p class="text-sm font-medium text-secondary/80">
                                    Code <span class="text-sm font-semibold">{applied}</span> -
                                </p>
                                <p class="text-sm font-semibold text-accent">£{((Number(total) + Number(delivery)) * 0.90).toFixed(2).toLocaleString()}</p>
                            </div>
                        </div>
                    {:else}
                        <p class="text-sm font-semibold text-accent">£{(Number(total) + Number(delivery)).toFixed(2).toLocaleString()}</p>
                    {/if}
                </div>
                <div class="flex flex-col w-full mt-3">
                    <button on:click={toggleDiscountCodeBox} class="flex w-full items-center justify-between group">
                        <p class="font-medium text-sm group-hover:text-accent-alt transition-all">Got a discount code?</p>
                        <i class="fa-solid fa-chevron-up group-hover:text-accent-alt {discountCodeOpen ? "" : "-scale-100"} transition-all"></i>
                    </button>
                    {#if discountCodeOpen}
                        <div transition:slide={{ duration: 500 }} class="flex flex-col gap-2">
                            <p class="text-sm text-secondary/80">You can only use one coupon/voucher code per order.</p>
                            <div class="flex gap-3">
                                <input type="text" name="coupon" id="coupon" bind:value={coupon} class="bg-primary/80 px-3 rounded-md text-sm font-semibold lg:w-96 w-1/2 flex-grow">
                                <button on:click={submitCoupon} class="lg:px-6 px-4 lg:py-2 py-0.5 flex items-center gap-5 bg-accent hover:bg-accent-alt transition-all w-fit drop-shadow rounded-md">
                                    <p class="text-light font-medium text-sm">Apply</p>
                                </button>
                            </div>
                            {#if applied}
                                <div in:slide={{ duration: 500 }} class="flex justify-between items-center">
                                    <p class="text-sm">Coupon <span class="text-sm font-semibold">{applied}</span> applied</p>
                                    <button on:click={removeCoupon} class="text-sm text-accent hover:text-accent-alt border-b">Remove</button>
                                </div>
                            {/if}
                        </div>
                    {/if}
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