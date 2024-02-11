export const products = {
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
    price(id) {
        let item = this.all.filter(i => i.id === id)[0]
        if (!item) return null
        return item.price
    },
    category(cat) {
        if (cat === "all") return this.all
        return this.all.filter(product => product.category === cat)
    },
    all: [
        {
            id: 1,
            name: "Fauna",
            rating: 4.5,
            reviews: 34,
            price: 79.99,
            category: "table"
        },
        {
            id: 2,
            name: "Nomad",
            rating: 3,
            reviews: 12,
            price: 49.99,
            category: "desk"
        },
        {
            id: 3,
            name: "Ember",
            rating: 5,
            reviews: 54,
            price: 80.00,
            category: "desk"
        },
        {
            id: 4,
            name: "Cocoon",
            rating: 5,
            reviews: 127,
            price: 99.99,
            category: "desk"
        },
        {
            id: 5,
            name: "Sylvan",
            rating: 3,
            reviews: 24,
            price: 49.99,
            category: "desk"
        },
        {
            id: 6,
            name: "Muse",
            rating: 4,
            reviews: 64,
            price: 64.99,
            category: "desk"
        },
        {
            id: 7,
            name: "Serene",
            rating: 3,
            reviews: 18,
            price: 129.99,
            category: "table"
        },
        {
            id: 8,
            name: "Willow",
            rating: 4,
            reviews: 65,
            price: 72.99,
            category: "table"
        },
        {
            id: 9,
            name: "Meadow",
            rating: 5,
            reviews: 321,
            price: 229.99,
            category: "table"
        },
        {
            id: 10,
            name: "Sonata",
            rating: 4,
            reviews: 183,
            price: 299.99,
            category: "table"
        },
        {
            id: 11,
            name: "Alchemy",
            rating: 4,
            reviews: 210,
            price: 209.00,
            category: "table"
        },
        {
            id: 12,
            name: "Verdant",
            rating: 4,
            reviews: 78,
            price: 20.00,
            category: "planter"
        },
        {
            id: 13,
            name: "Firma",
            rating: 2,
            reviews: 9,
            price: 9.99,
            category: "planter"
        },
        {
            id: 14,
            name: "Terra",
            rating: 4,
            reviews: 65,
            price: 18.99,
            category: "planter"
        },
        {
            id: 15,
            name: "Flourish",
            rating: 4,
            reviews: 210,
            price: 30.50,
            category: "planter"
        },
        {
            id: 16,
            name: "Verdure",
            rating: 3,
            reviews: 43,
            price: 16.98,
            category: "planter"
        },
        {
            id: 17,
            name: "Havenwood",
            rating: 3,
            reviews: 26,
            price: 24.50,
            category: "planter"
        },
        {
            id: 18,
            name: "Perch",
            rating: 4,
            reviews: 59,
            price: 30.25,
            category: "chair"
        },
        {
            id: 19,
            name: "Sojourn",
            rating: 2,
            reviews: 38,
            price: 35.00,
            category: "chair"
        },
        {
            id: 20,
            name: "Reverie",
            rating: 4,
            reviews: 22,
            price: 85.99,
            category: "chair"
        },
        {
            id: 21,
            name: "Siesta",
            rating: 3,
            reviews: 78,
            price: 59.99,
            category: "chair"
        },
        {
            id: 22,
            name: "Wander",
            rating: 3,
            reviews: 34,
            price: 32.99,
            category: "chair"
        },
        {
            id: 23,
            name: "Nestle",
            rating: 5,
            reviews: 236,
            price: 74.99,
            category: "chair"
        },
        {
            id: 24,
            name: "Drift",
            rating: 4,
            reviews: 74,
            price: 32.99,
            category: "chair"
        },
        {
            id: 25,
            name: "Ebb & Flow",
            rating: 2,
            reviews: 39,
            price: 18.99,
            category: "chair"
        },
        {
            id: 26,
            name: "Nocturne",
            rating: 4,
            reviews: 68,
            price: 45.99,
            category: "painting"
        },
        {
            id: 27,
            name: "Bloom",
            rating: 4,
            reviews: 95,
            price: 45.99,
            category: "painting"
        },
        {
            id: 28,
            name: "Blank",
            rating: 4,
            reviews: 95,
            price: 15.99,
            category: "painting"
        },
        {
            id: 29,
            name: "Cerulean",
            rating: 4,
            reviews: 126,
            price: 44.99,
            category: "painting"
        },
    ].sort((a, b) => a.name.localeCompare(b.name))
}