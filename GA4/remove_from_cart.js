// Measure the removal of a product from a shopping cart.
dataLayer.push({ ecommerce: null });  // Clear the previous ecommerce object.
dataLayer.push({
  event: "remove_from_cart",
  ecommerce: {
    items: [{
      item_name: "Donut Friday Scented T-Shirt", // Name or ID is required.
      item_id: "67890",
      price: 33.75,
      item_brand: "Google",
      item_category: "Apparel",
      item_variant: "Black",
      item_list_name: "Search Results",  // If associated with a list selection.
      item_list_id: "SR123",  // If associated with a list selection.
      index: 1,  // If associated with a list selection.
      quantity: 1
    }]
  }
});