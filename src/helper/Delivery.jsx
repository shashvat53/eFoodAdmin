import instance from '../config/Axios'

export const AddNewDelivery = async(DeliveryData) => {
    try {
        const response=await instance.post('/deliveryPartner',DeliveryData)
        console.log(response,'apis')
        return response
    } catch (error) {
        console.log(error,'apis Error')
        return error
    }
}
