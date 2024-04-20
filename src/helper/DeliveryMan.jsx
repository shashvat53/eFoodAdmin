import React, { useEffect } from 'react'
import instance from '../config/Axios'

const DeliveryMan =async () => {
  try {
    const data=await instance.get('/deliveryPartner')
    console.log(data,"1234")
    return data
  } catch (error) {
    console.log(error)
  }
}

export default DeliveryMan;


