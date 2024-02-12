<script>
    import { toastFlip, toastFlyIn, toastFlyOut } from "$lib/animations"
    import { Notification, toast } from "$lib/notifications"
</script>

<div class="fixed top-0 left-0 w-full h-full flex items-center flex-col gap-2 lg:pt-2 pt-5 z-[999] pointer-events-none">

    {#each $toast as item (item.id)}
        <div animate:toastFlip in:toastFlyIn out:toastFlyOut class="flex lg:max-w-[40%] lg:w-fit w-[90%] pointer-events-auto">
            <Notification {item} />
        </div>
    {/each}

</div>