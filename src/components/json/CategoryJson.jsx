import React from 'react'

const CategoryJson = () => {

    const categoryData = [
        {
          SL: 1,
          Image: "https://efood-admin.6amtech.com/storage/app/public/category/2021-02-26-603892f899576.png",
          Name: "Category 1",
          Status: true,
          Priority: 1,
          Action: "Edit/Delete"
        },
        {
          SL: 2,
          Image: "https://efood-admin.6amtech.com/storage/app/public/category/2021-02-13-6027c139c348f.png",
          Name: "Category 2",
          Status: true,
          Priority: 2,
          Action: "Edit/Delete"
        },
        {
          SL: 3,
          Image: "https://efood-admin.6amtech.com/storage/app/public/category/2021-02-26-60388e6d7306b.png",
          Name: "Category 3",
          Status: false,
          Priority: 3,
          Action: "Edit/Delete"
        },
        {
          SL: 4,
          Image: "https://efood-admin.6amtech.com/storage/app/public/category/2021-02-13-6027c11aa03b3.png",
          Name: "Category 4",
          Status: true,
          Priority: 4,
          Action: "Edit/Delete"
        },
        {
          SL: 5,
          Image: "https://efood-admin.6amtech.com/storage/app/public/category/2021-02-13-6027c1289249c.png",
          Name: "Category 5",
          Status: true,
          Priority: 5,
          Action: "Edit/Delete"
        }
      ]
      
  return (
    categoryData
  )
}

export default CategoryJson