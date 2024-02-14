import { writable, get } from "svelte/store"
import { toast } from "$lib/notifications"

function toastAdded(item) {
    toast.success({
        message: "Success",
        details: `1x <span class='font-semibold text-inherit'>${item.name}</span> has been added to your basket.`
    })
}

function toastOutOfStock(item) {
    toast.error({
        message: "Out of Stock!",
        details: `Unable to add any more <span class='font-semibold text-inherit'>${item.name}</span> to your basket.`
    })
}

function createBasket() {
    const items = writable([])

    function add(product) {
        let item = get(items).filter(item => item.id === product.id)[0]
        if (!item) {
            toastAdded(product)
            return items.update((basket) => {
                return [product, ...basket]
            })
        }
        if (item.amount + 1 > 19) return toastOutOfStock(item)
        toastAdded(item)
        return items.update((basket) => {
            ++item.amount
            return basket
        })
    }
    function remove(id) {
        let item = get(items).filter(item => item.id === id)[0]
        if (!item) return
        if (item.amount - 1 < 1) {
            return items.update((basket) => basket.filter(item => item.id !== id))
        }
        return items.update((basket) => {
            --item.amount
            return basket
        })
    }

    function clear(id) {
        if (id) {
            let item = get(items).filter(item => item.id === id)[0]
            if (!item) return
            items.update((basket) => basket.filter(item => item.id !== id))
        } else {
            items.set([])
        }
    }

    return { 
        subscribe: items.subscribe,
        add,
        remove,
        clear
    }
}

export const basket = createBasket()