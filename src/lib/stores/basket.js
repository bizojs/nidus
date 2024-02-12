import { writable, get } from "svelte/store"

function createBasket() {
    const items = writable([])

    function add(product) {
        let item = get(items).filter(item => item.id === product.id)[0]
        if (!item) {
            return items.update((basket) => {
                return [...basket, product]
            })
        }
        if (item.amount + 1 > 20) return
        return items.update((basket) => {
            ++item.amount
            return basket
        })
    }
    function remove(id) {
        let item = get(items).filter(item => item.id === id)[0]
        if (!item) return
        if (item.amount - 1 < 1) {
            return items.update((basket) => {
                return basket.filter(item => item.id !== id)
            })
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
            items.update((basket) => {
                return basket.filter(item => item.id !== id)
            })
        } else {
            items.update(() => {
                return []
            })
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