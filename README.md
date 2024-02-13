![NIDUS.](/static/docs/banner.png)

> This project is just a Demo for my Portfolio. It is not a real company nor does it sell real products. The product images were provided by [Unsplash](https://unsplash.com)


# Snippets
Below you will find some code snippets on how to do various things should you want to try hosting this Demo yourself.

## Modals

![Contact_Form](/static/docs/contact_form.png)

You can toggle the Basket modal by importing the "nav" store from `$lib/stores`. To toggle the Contact modal, you can import "contact" from `$lib/stores`.

```svelte
<script>
    import { nav } from "$lib/stores"

    function openNav() {
        nav.open()
        // OR
        // nav.toggle()
    }
</script>

<button on:click={() => nav.open()}>
    View Basket
</button>
```

## Products

```js
import { products } from "$lib/products"

// Get ALL products in one array
console.log(products.all) // [{...}]

// Get ALL products grouped by category
console.log(products.allCategories) // [[...], [...]]

// Get top 5 rated products
console.log(products.popular) // [{...}]

// Get product rating
console.log(products.rating(1))
// 4.5 star item would return [1, 1, 1, 1, 0.5]
// 2 star item would return [1, 1]

// Get formatted review count for a product
console.log(products.reviews(1))
// 1500 reviews would return "1.5k"

// Get the price of a product
console.log(products.price(1))

// Get all items of a category
console.log(products.category("desk")) // [{...}]
```

## Basket

```js
import { basket } from "$lib/stores"

// Get ALL basket items
console.log($basket) // [{...}]

// Add an item to the basket
basket.add({...})

// Remove an item from the basket
basket.add(1) // Accepts product id

// Clear entire basket
basket.clear()
// To clear all of a specific product, provide a product id
basket.clear(1)
```

## Toast Notifications

![TOASTS](/static/docs/toasts.png)

```js
import { toast } from "$lib/notifications"

// Toast options
{
    message: String,
    details: String,
    type: String<default|success|error|warning|info>, // default: "default"
    dismissible: Boolean, // default: true,
    duration: Number,  // default: 4000
}

// Default toast
toast.add(options)

// Specific toast types
toast.success(options)
toast.error(options)
toast.warning(options)
toast.info(options)
```