<script>
    import { InfoBox } from "$lib/components/shop"
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
        <div class="flex flex-col gap-10">
            <h1 class="lg:text-6xl text-5xl lg:text-left text-center lg:w-1/2 w-full font-black drop-shadow-lg">Your Haven for Home Decor Bliss.</h1>
            <p class="lg:w-1/2 w-full lg:text-left text-center text-secondary font-medium">Nidus is your one-stop shop for crafting a home that reflects your unique style and brings you joy. We offer a curated selection of planters, tables, chairs, lamps, and more, designed to inspire and elevate your living space.</p>
            <div class="flex lg:gap-6 gap-4 lg:justify-start justify-center">
                <InfoBox title="700+" content="Total Products" />
                <InfoBox title="53k+" content="Satisfied Customers" />
                <InfoBox title="17k+" content="Total Reviews" />
            </div>
        </div>
    </div>
</div>