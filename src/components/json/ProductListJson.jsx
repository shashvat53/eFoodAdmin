import React from 'react'

const ProductListJson = () => {
    const foodAddons = [
        {
          productName: "Extra Cheese",
          sellingPrice: 1.50,
          totalSale: 150,
          stock: 100,
          status: true
        },
        {
          productName: "Bacon Strips",
          sellingPrice: 2.00,
          totalSale: 200,
          stock: 75,
          status: true
        },
        {
          productName: "Avocado",
          sellingPrice: 1.75,
          totalSale: 180,
          stock: 50,
          status: true
        },
        {
          productName: "Grilled Onions",
          sellingPrice: 1.25,
          totalSale: 120,
          stock: 90,
          status: true
        },
        {
          productName: "Fried Egg",
          sellingPrice: 1.80,
          totalSale: 160,
          stock: 60,
          status: false
        }
      ];
      
      
  return (
    foodAddons
  )
}

export default ProductListJson