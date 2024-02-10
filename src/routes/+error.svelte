<script>
    import { goto } from "$app/navigation"
    import { page } from "$app/stores"
</script>

<div class="lg:block hidden w-full h-full bg-img" />
<div class="flex lg:flex-row flex-col flex-grow lg:h-[88%] h-full w-full">
    <div class="p-4 flex lg:flex-col flex-row gap-8 justify-between items-center">
        <span class="flex flex-grow pr-0.5 pt-0.5 bg-accent-dark/20 rounded-full" />
        <div class="flex lg:flex-col flex-row lg:gap-5 gap-10">
            <a href="#facebook">
                <i class="fa-brands fa-facebook lg:text-2xl hover:text-secondary transition-all"></i>
            </a>
            <a href="#email">
                <i class="fa-solid fa-envelope lg:text-2xl hover:text-secondary transition-all"></i>
            </a>
            <a href="#phone">
                <i class="fa-solid fa-phone lg:text-2xl hover:text-secondary transition-all"></i>
            </a>
        </div>
        <span class="flex flex-grow pr-0.5 pt-0.5 bg-accent-dark/20 rounded-full" />
    </div>
    <div class="p-4 w-full flex flex-col justify-evenly lg:gap-0 gap-10 lg:m-20 mt-5">
        <div class="flex flex-col gap-5">
            <h1 class="lg:text-6xl text-5xl lg:text-left text-center lg:w-1/2 w-full font-black drop-shadow-lg">Uh-oh!</h1>
            <p class="lg:w-1/2 w-full lg:text-left text-center text-secondary font-medium">{$page.status} {$page?.error?.message}</p>
            <button on:click={() => goto("/")} class="w-fit lg:self-start self-center group font-medium flex items-center gap-2 pb-1 border-b-2 border-white/0 hover:border-sky-500 transition-all">
                <i class="fa-solid fa-arrow-left group-hover:text-sky-600 text-sky-500 transition-all"></i>
                <p class="group-hover:text-sky-600 text-sky-500 transition-all">Return home</p>
            </button>
        </div>
    </div>
</div>