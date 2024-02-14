import data from "$lib/data/products.json"

export const products = {
    get all() {
        return data.sort((a, b) => a.name.localeCompare(b.name))
    },
    get popular() {
        return this.all
            .filter(product => product.rating >= 4)
            .sort((a, b) => b.rating - a.rating)
            .slice(0, 5)
    },
    get categories() {
        let categories = new Set(["all"])
        for (const product of this.all) {
            categories.add(product.category)
        }
        return Array.from(categories)
    },
    get allCategories() {
        const categorised = {}
        for (const product of this.all) {
            const category = product.category
            categorised[category] = categorised[category] || []
            categorised[category].push(product)
        }
        return Object.values(categorised)
    },
    rating(id) {
        let item = this.all.filter(i => i.id === id)[0]
        const items = {
            5  : [1, 1, 1, 1, 1],
            4.5: [1, 1, 1, 1, 0.5],
            4  : [1, 1, 1, 1],
            3.5: [1, 1, 1, 0.5],
            3  : [1, 1, 1],
            2.5: [1, 1, 0.5],
            2  : [1, 1],
            1.5: [1, 0.5],
            1  : [1],
            0  : [],
        }
        const rounded = Math.floor(item.rating)
        const decimalPart = item.rating - rounded
        return items[rounded + decimalPart] || items[0]
    },
    reviews(id) {
        let item = this.all.filter(i => i.id === id)[0]
        const SI_SYMBOL = ["", "k", "M"]
        const tier = Math.log10(Math.abs(item.reviews)) / 3 | 0
        if(tier == 0) return item.reviews
        const suffix = SI_SYMBOL[tier]
        const scale = Math.pow(10, tier * 3)
        const scaled = item.reviews / scale
        if (!suffix) return item.reviews.toLocaleString()
        return scaled.toFixed(1) + suffix
    },
    price(id) {
        let item = this.all.filter(i => i.id === id)[0]
        if (!item) return null
        return item.price
    },
    category(cat) {
        if (cat === "all") return this.all
        return this.all.filter(product => product.category === cat)
    },
    formatPrice(price) {
        return Number(price).toLocaleString("en-UK", { style: "currency", currency: "GBP" })
    }
}