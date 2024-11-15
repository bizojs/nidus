export function uuid() {
    return (Date.now().toString(16) + Number(Math.random().toString().slice(12)).toString(16))
}

export function chunk(array, chunkSize) {
    const output = []
    for (let i = 0; i < array.length; i += chunkSize) {
        output.push(array.slice(i, i + chunkSize))
    }
    return output
}

Array.prototype.chunk = (function(chunkSize = 5) {
    const output = []
    for (let i = 0; i < this.length; i += chunkSize) {
        output.push(this.slice(i, i + chunkSize))
    }
    return output
})