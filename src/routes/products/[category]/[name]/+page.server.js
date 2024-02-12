import { products } from "$lib/products"
import { redirect } from "@sveltejs/kit"

export async function load({ params }) {
    const { category, name } = params

    let product = products.all.filter(p => p.name.replace(/\s/g, "").toLowerCase() === name.toLowerCase())[0]

    if (!products.categories.includes(category)) {
        throw redirect(302, "/products?category=all")
    }
    if (!product) {
        throw redirect(302, "/products?category=all")
    }

    return product
}