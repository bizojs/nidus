<script>
    import { toast } from "$lib/notifications"
    import { onMount } from "svelte"

    export let item

    const styles = {
        icon: {
            default: "fa-solid fa-bell text-toast",
            success: "fa-solid fa-circle-check text-toast-success",
            error: "fa-solid fa-circle-xmark text-toast-error",
            warning: "fa-solid fa-triangle-exclamation text-toast-warning",
            info: "fa-solid fa-circle-info text-toast-info", 
        },
        border: {
            default: "border-toast/40",
            success: "border-toast-success/40",
            error: "border-toast-error/40",
            warning: "border-toast-warning/60",
            info: "border-toast-info/60",
        }
    }
    
    onMount(() => {
        if (item.duration) {
            setTimeout(() => {
                if ($toast.includes(item)) toast.dismiss(item.id)
            }, item.duration)
        }
    })
</script>

<div class="flex gap-4 w-full p-4 pr-10 rounded-xl bg-white shadow-lg relative border-2 {styles.border[item.type]}" style="z-index: {1000 - item.id}">
    {#if item.dismissible || !item.duration}
        <button on:click={() => toast.dismiss(item.id)} class="absolute top-1.5 right-1.5 px-1.5 rounded-full hover:bg-secondary/60 transition-all">
            <i class="fa-solid fa-xmark text-sm"></i>
        </button>
    {/if}
    <i class="{styles.icon[item.type]} text-xl"></i>
    <div class="flex flex-col">
        <p class="text-sm font-medium">{item.message}</p>
        {#if item.details}
            <p class="text-[13px] text-secondary/80">{@html item.details}</p>
        {/if}
    </div>
</div>