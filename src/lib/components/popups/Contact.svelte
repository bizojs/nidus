<script>
    import { clickOutside, stopScroll } from "$lib/actions"
    import { fade, scale, fly } from "svelte/transition"
    import { quintOut, backInOut } from "svelte/easing"
    import { createEventDispatcher } from "svelte"
    import { toast } from "$lib/notifications"

    const dispatch = createEventDispatcher()

    function close() {
        toast.success({
            message: "Thanks!",
            details: "That form doesn't actually do anything since this website is just a demo. If you would actually like to give some feedback, you can contact me <a href='mailto:contact@bizo.dev' class='font-semibold border-b'>here</a>",
            duration: false
        })
        dispatch("close")
    }
</script>

<div use:stopScroll transition:fade={{ duration: 100 }} class="flex fixed justify-center items-center w-full h-full left-0 top-0 backdrop-blur-sm bg-black/30 z-50">
    <button transition:fly={{ y: -20, duration: 600, easing: backInOut }} on:click={close} class="absolute top-5 right-5 z-[60] group">
        <i class="fa-solid fa-xmark text-light group-hover:text-white transition-all text-2xl px-2 drop-shadow-md"></i>
    </button>
    <div transition:scale={{ duration: 400, start: 0.9, easing: quintOut }} use:clickOutside on:outclick={close} on:escape={close} class="flex flex-col justify-between gap-10 p-6 lg:w-2/5 w-[90%] bg-primary rounded-2xl shadow-lg">
        <div class="flex flex-col gap-5">
            <div class="flex flex-col gap-2">
                <h1 class="text-4xl font-black">Your feedback matters.</h1>
                <p class="font-medium text-sm">Please leave your email address and message below!</p>
            </div>
            <div class="flex flex-col gap-1">
                <label for="email" class="text-xs font-bold uppercase">Email address</label>
                <input type="email" name="email" id="email" class="bg-secondary/80 py-2 px-3 rounded-lg placeholder:text-primary/30 text-sm font-medium" placeholder="your@email.com" required>
            </div>
            <div class="flex flex-col gap-1">
                <label for="message" class="text-xs font-bold uppercase">Message</label>
                <textarea name="message" id="message" class="resize-none bg-secondary/80 py-2 px-2.5 rounded-lg placeholder:text-primary/30 text-sm font-medium" rows="4" placeholder="Your message goes here" />
            </div>
        </div>
        <div class="flex gap-3 lg:justify-end justify-center">
            <button on:click={close} class="px-8 py-3 flex items-center gap-5 bg-secondary/70 hover:bg-secondary/85 transition-all w-fit drop-shadow rounded-lg">
                <p class="font-medium text-sm">Close</p>
            </button>
            <button on:click={close} class="px-8 py-3 flex items-center gap-5 bg-accent hover:bg-accent-alt transition-all w-fit drop-shadow rounded-lg">
                <p class="text-light font-medium text-sm">Submit</p>
            </button>
        </div>
    </div>
</div>