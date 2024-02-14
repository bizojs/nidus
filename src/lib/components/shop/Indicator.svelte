<script>
    import { basket } from "$lib/stores"

    const count = {
        1: "-left-1",
        2: "-left-2.5",
        3: "-left-4",
    }

    $: totalItems = $basket.reduce((value, product) => value + product.amount, 0)

    $: spacing = totalItems > 99
        ? count[3]
        : count[totalItems.toString().split("").length]
</script>

<span class="absolute top-[20%] -translate-y-1/2 {spacing} flex justify-center items-center gap-1 z-20">
    <p class="text-[12px] font-bold group-hover:text-secondary">{totalItems > 99 ? "99+" : totalItems}</p>
</span>