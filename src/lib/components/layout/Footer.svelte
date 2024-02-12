<script>
    import { contact } from "$lib/stores"
</script>

<div class="flex flex-col gap-10 w-full lg:p-16 p-6 bg-accent-footer select-none">
    <div class="flex lg:flex-row flex-col gap-5 justify-between">
        <div class="flex flex-grow">
            <h1 class="text-5xl font-black uppercase text-light">nidus.</h1>
        </div>
        <div class="flex lg:flex-row-reverse flex-row gap-20">
            <div class="flex flex-col gap-2">
                <p class="text-sm text-light font-semibold">Resources</p>
                <a href="/#blog" class="text-sm text-light/70 hover:text-light/80 transition-all font-medium">Blog</a>
                <a href="/#newsletter" class="text-sm text-light/70 hover:text-light/80 transition-all font-medium">Newsletter</a>
                <a href="/#help-center" class="text-sm text-light/70 hover:text-light/80 transition-all font-medium">Help Centre</a>
                <a href="/#support" class="text-sm text-light/70 hover:text-light/80 transition-all font-medium">Support</a>
            </div>
            <div class="flex flex-col gap-2">
                <p class="text-sm text-light font-semibold">Company</p>
                <a href="/about" class="text-sm text-light/70 hover:text-light/80 transition-all font-medium">About Us</a>
                <a href="/#careers" class="text-sm text-light/70 hover:text-light/80 transition-all font-medium">Careers</a>
                <button on:click={contact.open} class="text-sm text-light/70 hover:text-light/80 transition-all font-medium text-start w-full">Contact</button>
            </div>
        </div>
    </div>
    <span class="bg-primary/30 h-0.5 w-full rounded-full"></span>
    <div class="flex flex-col">
        <h2 class="text-light font-semibold">Make Your House a Home.</h2>
        <div class="flex lg:flex-row flex-col gap-5 justify-between">
            <p class="text-light/70 text-sm">
                Invest in creating a space that reflects your true self and cultivate your haven, one piece at a time.
            </p>
            <p class="text-light text-sm">&copy; 2024 Nidus — All rights reserved.</p>
        </div>
    </div>
</div>