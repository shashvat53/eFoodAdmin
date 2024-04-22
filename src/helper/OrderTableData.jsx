import instance from "../config/Axios";

const OrderTableData = async () => {
  try {
    const { data } = await instance.get("/table");
    console.log(data, "axios page");
    return data;
  } catch (error) {
    console.log(error, "order Table Error");
  }
};

export default OrderTableData;
