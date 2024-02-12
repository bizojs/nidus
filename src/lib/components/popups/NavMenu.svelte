<script>
    import { clickOutside, stopScroll } from "$lib/actions"
    import { backInOut, quintOut } from "svelte/easing"
    import { createEventDispatcher } from "svelte"
    import { fade, fly } from "svelte/transition"
    import { contact } from "$lib/stores"
    import { goto } from "$app/navigation"

    const dispatch = createEventDispatcher()

    async function getThumbnail(name) {
        const req = await import(`../../products/${name}.png?enhanced`)
        return req.default
    }

    function continueShopping() {
        close()
        goto("/products?category=all", { noScroll: true })
    }

    function toggleContact() {
        close()
        contact.open()
    }

    function close() {
        dispatch("close")
    }

</script>

<div use:stopScroll transition:fade={{ duration: 100 }} class="lg:hidden flex w-full h-full fixed top-0 left-0 backdrop-blur-[2px] bg-black/30 z-40">
    <div transition:fly={{ x: -200, duration: 600, easing: quintOut }} use:clickOutside on:outclick={close} on:escape={close} class="flex flex-col absolute top-0 left-0 w-[80%] h-full bg-secondary z-50 px-5 shadow-2xl drop-shadow-2xl pt-20 pb-10">
        <button transition:fly={{ y: -20, duration: 600, easing: backInOut }} on:click={close} class="absolute top-4 right-5 group">
            <i class="fa-solid fa-xmark text-xl group-hover:text-secondary transition-all"></i>
        </button>
        <div class="flex flex-col gap-2 overflow-y-auto flex-grow select-none">
            <div class="flex justify-between w-full items-center mb-10">
                <div class="flex gap-3 items-center">
                    <img src="https://placehold.co/256?text=G&font=opensans" alt="" draggable="false" class="h-10 rounded-full select-none">
                    <p class="font-semibold text-sm">Guest</p>
                </div>
                <button class="text-xs font-medium px-3 py-1 rounded bg-primary/80 hover:bg-primary transition-all">Login</button>
            </div>
            <a on:click={close} href="/" class="flex gap-6 w-full items-center justify-between px-3 rounded-lg hover:bg-accent-alt/5 py-2">
                <p class="text-sm font-medium">Home</p>
                <i class="fa-solid fa-house"></i>
            </a>
            <a on:click={close} href="/products?category=all" class="flex gap-6 w-full items-center justify-between px-3 rounded-lg hover:bg-accent-alt/5 py-2">
                <p class="text-sm font-medium">Shop</p>
                <i class="fa-solid fa-shop"></i>
            </a>
            <a on:click={close} href="/about" class="flex gap-6 w-full items-center justify-between px-3 rounded-lg hover:bg-accent-alt/5 py-2">
                <p class="text-sm font-medium">About Us</p>
                <i class="fa-solid fa-id-card-clip"></i>
            </a>
            <button on:click={toggleContact} class="flex gap-6 w-full items-center justify-between px-3 rounded-lg hover:bg-accent-alt/5 py-2">
                <p class="text-sm font-medium">Contact</p>
                <i class="fa-solid fa-envelope"></i>
            </button>
        </div>
        <button on:click={continueShopping} class="w-full border border-black px-4 py-2 rounded text-sm font-medium text-center">Browse Products</button>
    </div>
</div>