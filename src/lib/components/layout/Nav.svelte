<script>
    import { page } from "$app/stores"
</script>

<nav class="py-3 mb-10 flex justify-between items-center select-none">
    <a href="/">
        <h1 class="uppercase text-3xl font-black hover:text-secondary transition-all">nidus.</h1>
    </a>
    <div class="lg:flex hidden gap-6">
        <a href="/products" class="hover:text-secondary py-0.5 border-b-2 border-white/0 hover:border-sky-500 transition-all">Shop</a>
        <a href="#about" class="hover:text-secondary py-0.5 border-b-2 border-white/0 hover:border-sky-500 transition-all">About</a>
        <a href="#contact" class="hover:text-secondary py-0.5 border-b-2 border-white/0 hover:border-sky-500 transition-all">Contact Us</a>
    </div>
    <div class="flex items-center gap-3">
        {#if $page.url.pathname === "/"}
            <a href="/products" class="lg:px-10 px-6 lg:py-3 py-2 lg:rounded-2xl rounded-xl text-light bg-accent-dark hover:bg-accent-dark-hover transition-all text-sm">Explore</a>
        {/if}
        <button class="lg:hidden flex bg-accent-dark/10 hover:bg-accent-dark/20 transition-all lg:px-4 px-3 lg:py-2 py-1 lg:rounded-xl rounded-lg group">
            <i class="fa-solid fa-bars lg:text-xl text-lg group-hover:text-secondary transition-all"></i>
        </button>
    </div>
</nav>