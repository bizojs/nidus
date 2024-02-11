import { writable } from "svelte/store"

function navHandler() {
    const { subscribe, update } = writable(false)

    function open() {
        update(value => value = true)
    }

    function close() {
        update(value => value = false)
    }

    function toggle() {
        update(value => !value)
    }

    return { subscribe, open, close, toggle }
}

export const nav = navHandler()