export function chunk(array, chunkSize) {
    const output = []
    for (let i = 0; i < array.length; i += chunkSize) {
        output.push(array.slice(i, i + chunkSize))
    }
    return output
}