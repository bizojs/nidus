import { products } from "$lib/products"
import { redirect } from "@sveltejs/kit"

export async function load({ params }) {
    const { category, name } = params

    let product = products.all.filter(p => p.name.toLowerCase() === name.toLowerCase())[0]

    if (!products.categories.includes(category)) {
        throw redirect(302, "/products")
    }
    if (!product) {
        throw redirect(302, "/products")
    }

    return product
}