const opts = Object.defineProperty({}, "passive", {
    get() {
        supportsPassive = true
    }
})

let supportsPassive = false

function preventDefault(e) {
    e.preventDefault()
}

export function stopScroll({ force = false } = { force: false }) {
    if (force) {        
        try {
            window.addEventListener("test", null, opts)
        } catch {
            window.removeEventListener("test", null, opts)
        }
        const wheelOptions = supportsPassive ? { passive : false } : false
        const wheelEvent   = "onwheel" in document.createElement("div") ? "wheel" : "mousewheel"

        window.addEventListener("DOMMouseScroll", preventDefault, false       )
        window.addEventListener(wheelEvent      , preventDefault, wheelOptions)
        window.addEventListener("touchmove"     , preventDefault, wheelOptions)
        document.documentElement.classList.add("no-scroll")

        return {
            destroy() {
                window.removeEventListener("DOMMouseScroll", preventDefault, false       )
                window.removeEventListener(wheelEvent      , preventDefault, wheelOptions)
                window.removeEventListener("touchmove"     , preventDefault, wheelOptions)
                window.removeEventListener("test"          , null          , opts)
                document.documentElement.classList.remove("no-scroll")
            }
        }
    } else {
        document.documentElement.classList.add("no-scroll")
        return {
            destroy() {
                document.documentElement.classList.remove("no-scroll")
            }
        }
    }
}