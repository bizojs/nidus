export function clickOutside(node) {
    const handleClick = (event) => {
        if (!node.contains(event.target)) {
            node.dispatchEvent(new CustomEvent("outclick"))
        }
    }
    const handleKeyUp = (event) => {
        if (event.key === "Escape") {
            node.dispatchEvent(new CustomEvent("escape"))
        }
    }
    document.addEventListener("click", handleClick, true)
    document.addEventListener("keyup", handleKeyUp, true)
    return {
        destroy() {
            document.removeEventListener("click", handleClick, true)
            document.removeEventListener("keyup", handleKeyUp, true)
        }
    }
}