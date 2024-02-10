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
    all: [
        {
            id: 1,
            name: "Fauna",
            rating: 4,
            reviews: 34,
            price: 79.99,
            pictures: [
                "https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc"
            ],
            category: "table"
        },
        {
            id: 2,
            name: "Nomad",
            rating: 3,
            reviews: 12,
            price: 49.99,
            pictures: [
                "https://images.unsplash.com/photo-1519974719765-e6559eac2575"
            ],
            category: "desk"
        },
        {
            id: 3,
            name: "Ember",
            rating: 5,
            reviews: 54,
            price: 80.00,
            pictures: [
                "https://images.unsplash.com/photo-1629078692914-1160b6bace81"
            ],
            category: "desk"
        },
        {
            id: 4,
            name: "Cocoon",
            rating: 5,
            reviews: 127,
            price: 99.99,
            pictures: [
                "https://images.unsplash.com/photo-1590212151175-e58edd96185b"
            ],
            category: "desk"
        },
        {
            id: 5,
            name: "Sylvan",
            rating: 3,
            reviews: 24,
            price: 49.99,
            pictures: [
                "https://images.unsplash.com/photo-1587823172572-a16bad9a2c6a"
            ],
            category: "desk"
        },
        {
            id: 6,
            name: "Muse",
            rating: 4,
            reviews: 64,
            price: 64.99,
            pictures: [
                "https://images.unsplash.com/photo-1543349442-dc83dd4421f2"
            ],
            category: "desk"
        },
        {
            id: 7,
            name: "Serene",
            rating: 3,
            reviews: 18,
            price: 129.99,
            pictures: [
                "https://images.unsplash.com/photo-1537182534312-f945134cce34"
            ],
            category: "table"
        },
        {
            id: 8,
            name: "Willow",
            rating: 4,
            reviews: 65,
            price: 72.99,
            pictures: [
                "https://images.unsplash.com/photo-1573104049264-5324ea0027d5"
            ],
            category: "table"
        },
        {
            id: 9,
            name: "Meadow",
            rating: 5,
            reviews: 321,
            price: 229.99,
            pictures: [
                "https://images.unsplash.com/photo-1617638924751-cc232f82ecf9"
            ],
            category: "table"
        },
        {
            id: 10,
            name: "Sonata",
            rating: 4,
            reviews: 183,
            price: 299.99,
            pictures: [
                "https://images.unsplash.com/photo-1531576856932-f93f21defbc1"
            ],
            category: "table"
        },
        {
            id: 11,
            name: "Alchemy",
            rating: 4,
            reviews: 210,
            price: 209.00,
            pictures: [
                "https://images.unsplash.com/photo-1497366672149-e5e4b4d34eb3"
            ],
            category: "table"
        },
        {
            id: 12,
            name: "Verdant",
            rating: 4,
            reviews: 78,
            price: 20.00,
            pictures: [
                "https://images.unsplash.com/photo-1597334130951-61d5243db5cd"
            ],
            category: "planter"
        },
        {
            id: 13,
            name: "Firma",
            rating: 2,
            reviews: 9,
            price: 9.99,
            pictures: [
                "https://images.unsplash.com/photo-1504648492881-a5150829085c"
            ],
            category: "planter"
        },
        {
            id: 14,
            name: "Terra",
            rating: 4,
            reviews: 65,
            price: 18.99,
            pictures: [
                "https://images.unsplash.com/photo-1536651895-8480558b3bbf"
            ],
            category: "planter"
        },
        {
            id: 15,
            name: "Flourish",
            rating: 4,
            reviews: 210,
            price: 30.50,
            pictures: [
                "https://images.unsplash.com/photo-1515757026668-f01a7685f66e"
            ],
            category: "planter"
        },
        {
            id: 16,
            name: "Verdure",
            rating: 3,
            reviews: 43,
            price: 16.98,
            pictures: [
                "https://images.unsplash.com/photo-1485955900006-10f4d324d411"
            ],
            category: "planter"
        },
        {
            id: 17,
            name: "Havenwood",
            rating: 3,
            reviews: 26,
            price: 24.50,
            pictures: [
                "https://images.unsplash.com/photo-1516007565919-2d304b29fd14"
            ],
            category: "planter"
        },
        {
            id: 18,
            name: "Perch",
            rating: 4,
            reviews: 59,
            price: 30.25,
            pictures: [
                "https://images.unsplash.com/photo-1517705008128-361805f42e86"
            ],
            category: "chair"
        },
        {
            id: 19,
            name: "Sojourn",
            rating: 2,
            reviews: 38,
            price: 35.00,
            pictures: [
                "https://images.unsplash.com/photo-1561677978-583a8c7a4b43"
            ],
            category: "chair"
        },
        {
            id: 20,
            name: "Reverie",
            rating: 4,
            reviews: 22,
            price: 85.99,
            pictures: [
                "https://images.unsplash.com/photo-1550226891-ef816aed4a98"
            ],
            category: "chair"
        },
        {
            id: 21,
            name: "Siesta",
            rating: 3,
            reviews: 78,
            price: 59.99,
            pictures: [
                "https://images.unsplash.com/photo-1492371451031-f0830e91b3d9"
            ],
            category: "chair"
        },
        {
            id: 22,
            name: "Wander",
            rating: 3,
            reviews: 34,
            price: 32.99,
            pictures: [
                "https://images.unsplash.com/photo-1588432273887-7968301a3d2e"
            ],
            category: "chair"
        },
        {
            id: 23,
            name: "Nestle",
            rating: 5,
            reviews: 236,
            price: 74.99,
            pictures: [
                "https://images.unsplash.com/photo-1541558949596-1d9103f64840"
            ],
            category: "chair"
        },
        {
            id: 24,
            name: "Drift",
            rating: 4,
            reviews: 74,
            price: 32.99,
            pictures: [
                "https://images.unsplash.com/photo-1594914500898-4b3aeedc04cb"
            ],
            category: "chair"
        },
        {
            id: 25,
            name: "Ebb & Flow",
            rating: 2,
            reviews: 39,
            price: 18.99,
            pictures: [
                "https://images.unsplash.com/photo-1581285518458-d7e43c7f71eb"
            ],
            category: "chair"
        },
        {
            id: 26,
            name: "Nocturne",
            rating: 4,
            reviews: 68,
            price: 45.99,
            pictures: [
                "https://images.unsplash.com/photo-1505691938895-1758d7feb511"
            ],
            category: "painting"
        },
        {
            id: 27,
            name: "Bloom",
            rating: 4,
            reviews: 95,
            price: 45.99,
            pictures: [
                "https://images.unsplash.com/photo-1581539687231-fef259c4fa7a"
            ],
            category: "painting"
        },
        {
            id: 28,
            name: "Blank",
            rating: 4,
            reviews: 95,
            price: 15.99,
            pictures: [
                "https://images.unsplash.com/photo-1551373884-8a0750074df7"
            ],
            category: "painting"
        },
        {
            id: 29,
            name: "Cerulean",
            rating: 4,
            reviews: 126,
            price: 44.99,
            pictures: [
                "https://images.unsplash.com/photo-1605845872108-b733db1f2663"
            ],
            category: "painting"
        },
    ]
}