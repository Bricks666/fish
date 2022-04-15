export const toValidShop = (shop) => {
    console.log(shop, "SHOP")
    return {
        id: +shop.id,
        address: shop.Address,
        name: shop.Name,
        city: shop.city,
        shopers: shop.shopers ?? []
    }
}