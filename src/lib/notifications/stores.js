import { writable } from "svelte/store"
import { uuid } from "$lib/util"

function createToast() {
    
    const { subscribe, update } = writable([])

    function add({ message = "Notification", details = "", duration = 4000, type = "default", dismissible = true }) {
        update((notifications) => {
            let notification = {
                id: uuid(), message, details, duration, type, dismissible
            }
            return [notification, ...notifications].slice(0, 3)
        })
    }

    function dismiss(id) {
        update((notifications) => {
            return notifications.filter((notification) => notification.id !== id)
        })
    }

    function success({ message = "Success", details = "", duration = 4000, type = "success", dismissible = true }) {
        return add({ message, details, duration, type, dismissible })
    }

    function error({ message = "Error", details = "", duration = 4000, type = "error", dismissible = true }) {
        return add({ message, details, duration, type, dismissible })
    }

    function warning({ message = "Warning", details = "", duration = 4000, type = "warning", dismissible = true }) {
        return add({ message, details, duration, type, dismissible })
    }

    function info({ message = "Info", details = "", duration = 4000, type = "info", dismissible = true }) {
        return add({ message, details, duration, type, dismissible })
    }

    return {
        subscribe,
        add,
        dismiss,
        success,
        error,
        warning,
        info
    }

}

export const toast = createToast()