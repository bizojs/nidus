<script>
    export let title
    export let content = ""
</script>

<div class="lg:p-6 p-5 rounded-xl shadow bg-accent-dark/5 flex flex-col items-center gap-4 select-none text-center">
    <p class="text-xl font-black drop-shadow-md">{title}</p>
    <p class="font-medium text-secondary text-sm">{@html content}</p>
</div>