import React from 'react'

const BranchListJson = () => {
    const dummyData = [
        {
          BranchName: "Branch A",
          Image: "https://efood-admin.6amtech.com/storage/app/public/category/2021-02-26-603892f899576.png",
          BranchType: "Sub",
          ContactInfo: "branchA@example.com",
          PromotionCampaign: true,
          Status: true
        },
        {
          BranchName: "Branch B",
          Image: "https://efood-admin.6amtech.com/storage/app/public/category/2021-02-13-6027c139c348f.png",
          BranchType: "Sub",
          ContactInfo: "branchB@example.com",
          PromotionCampaign: false,
          Status: true
        },
        {
          BranchName: "Branch D",
          Image: "https://efood-admin.6amtech.com/storage/app/public/category/2021-02-13-6027c11aa03b3.png",
          BranchType: "Sub",
          ContactInfo: "branchD@example.com",
          PromotionCampaign: false,
          Status: false
        },
        {
          BranchName: "Main Branch",
          Image: "https://efood-admin.6amtech.com/storage/app/public/category/2021-02-26-60388e6d7306b.png",
          BranchType: "Main",
          ContactInfo: "branchC@example.com",
          PromotionCampaign: true,
          Status: true
        },
      ];
      
  return (
    dummyData
  )
}

export default BranchListJson