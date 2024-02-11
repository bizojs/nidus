import { chunk } from "$lib/util"

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
    get chunked() {
        return chunk(this.all, 10)
    },
    all: [
        {
            id: 1,
            name: "Fauna",
            rating: 4,
            reviews: 34,
            price: 79.99,
            picture: "fauna/1.png",
            category: "table"
        },
        {
            id: 2,
            name: "Nomad",
            rating: 3,
            reviews: 12,
            price: 49.99,
            picture: "nomad/1.png",
            category: "desk"
        },
        {
            id: 3,
            name: "Ember",
            rating: 5,
            reviews: 54,
            price: 80.00,
            picture: "ember/1.png",
            category: "desk"
        },
        {
            id: 4,
            name: "Cocoon",
            rating: 5,
            reviews: 127,
            price: 99.99,
            picture: "cocoon/1.png",
            category: "desk"
        },
        {
            id: 5,
            name: "Sylvan",
            rating: 3,
            reviews: 24,
            price: 49.99,
            picture: "sylvan/1.png",
            category: "desk"
        },
        {
            id: 6,
            name: "Muse",
            rating: 4,
            reviews: 64,
            price: 64.99,
            picture: "muse/1.png",
            category: "desk"
        },
        {
            id: 7,
            name: "Serene",
            rating: 3,
            reviews: 18,
            price: 129.99,
            picture: "serene/1.png",
            category: "table"
        },
        {
            id: 8,
            name: "Willow",
            rating: 4,
            reviews: 65,
            price: 72.99,
            picture: "willow/1.png",
            category: "table"
        },
        {
            id: 9,
            name: "Meadow",
            rating: 5,
            reviews: 321,
            price: 229.99,
            picture: "meadow/1.png",
            category: "table"
        },
        {
            id: 10,
            name: "Sonata",
            rating: 4,
            reviews: 183,
            price: 299.99,
            picture: "sontana/1.png",
            category: "table"
        },
        {
            id: 11,
            name: "Alchemy",
            rating: 4,
            reviews: 210,
            price: 209.00,
            picture: "alchemy/1.png",
            category: "table"
        },
        {
            id: 12,
            name: "Verdant",
            rating: 4,
            reviews: 78,
            price: 20.00,
            picture: "verdant/1.png",
            category: "planter"
        },
        {
            id: 13,
            name: "Firma",
            rating: 2,
            reviews: 9,
            price: 9.99,
            picture: "firma/1.png",
            category: "planter"
        },
        {
            id: 14,
            name: "Terra",
            rating: 4,
            reviews: 65,
            price: 18.99,
            picture: "terra/1.png",
            category: "planter"
        },
        {
            id: 15,
            name: "Flourish",
            rating: 4,
            reviews: 210,
            price: 30.50,
            picture: "flourish/1.png",
            category: "planter"
        },
        {
            id: 16,
            name: "Verdure",
            rating: 3,
            reviews: 43,
            price: 16.98,
            picture: "verdure/1.png",
            category: "planter"
        },
        {
            id: 17,
            name: "Havenwood",
            rating: 3,
            reviews: 26,
            price: 24.50,
            picture: "havenwood/1.png",
            category: "planter"
        },
        {
            id: 18,
            name: "Perch",
            rating: 4,
            reviews: 59,
            price: 30.25,
            picture: "perch/1.png",
            category: "chair"
        },
        {
            id: 19,
            name: "Sojourn",
            rating: 2,
            reviews: 38,
            price: 35.00,
            picture: "sojourn/1.png",
            category: "chair"
        },
        {
            id: 20,
            name: "Reverie",
            rating: 4,
            reviews: 22,
            price: 85.99,
            picture: "raverie/1.png",
            category: "chair"
        },
        {
            id: 21,
            name: "Siesta",
            rating: 3,
            reviews: 78,
            price: 59.99,
            picture: "siesta/1.png",
            category: "chair"
        },
        {
            id: 22,
            name: "Wander",
            rating: 3,
            reviews: 34,
            price: 32.99,
            picture: "wander/1.png",
            category: "chair"
        },
        {
            id: 23,
            name: "Nestle",
            rating: 5,
            reviews: 236,
            price: 74.99,
            picture: "nestle/1.png",
            category: "chair"
        },
        {
            id: 24,
            name: "Drift",
            rating: 4,
            reviews: 74,
            price: 32.99,
            picture: "drift/1.png",
            category: "chair"
        },
        {
            id: 25,
            name: "Ebb & Flow",
            rating: 2,
            reviews: 39,
            price: 18.99,
            picture: "&flow/1.png",
            category: "chair"
        },
        {
            id: 26,
            name: "Nocturne",
            rating: 4,
            reviews: 68,
            price: 45.99,
            picture: "nocturne/1.png",
            category: "painting"
        },
        {
            id: 27,
            name: "Bloom",
            rating: 4,
            reviews: 95,
            price: 45.99,
            picture: "bloom/1.png",
            category: "painting"
        },
        {
            id: 28,
            name: "Blank",
            rating: 4,
            reviews: 95,
            price: 15.99,
            picture: "blank/1.png",
            category: "painting"
        },
        {
            id: 29,
            name: "Cerulean",
            rating: 4,
            reviews: 126,
            price: 44.99,
            picture: "cerulean/1.png",
            category: "painting"
        },
    ]
}