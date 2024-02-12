<script>
    import { Transition, Nav, Footer, Newsletter } from "$lib/components"
    import { Notifications } from "$lib/notifications"
    import { page } from "$app/stores"
    import "../app.css"

    const pagesForNewsletter = ["/", "/about"]
</script>

<Notifications />
<div class="flex flex-col">
    <div class="lg:mx-20 mx-0 p-5 h-full flex-grow">
        <Nav />
        <Transition>
            <slot />
        </Transition>
    </div>
    <div class="flex flex-col items-center gap-10 w-full mt-52">
        {#if pagesForNewsletter.includes($page.url.pathname)}
            <Newsletter />
        {/if}
        <Footer />
    </div>
</div>