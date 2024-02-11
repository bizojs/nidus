<script>
    import { basket } from "$lib/stores"

    const count = {
        1: "-left-1",
        2: "-left-3",
        3: "-left-4",
    }
    $: spacing = $basket?.length > 99
        ? count[3]
        : count[$basket?.length.toString().split("").length]

</script>

<span class="absolute top-[20%] -translate-y-1/2 {spacing} flex justify-center items-center gap-1 z-20">
    <p class="text-[12px] font-bold group-hover:text-secondary">{$basket?.length > 99 ? "99+" : $basket?.length}</p>
</span>