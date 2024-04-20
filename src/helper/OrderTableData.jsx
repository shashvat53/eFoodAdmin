import React from "react";
import instanceAxios from "../Axios/Axios";

const OrderTableData = async () => {
  try {
    const { data } = await instanceAxios.get("/table");
    console.log(data, "axios page");
    return data;
  } catch (error) {
    console.log(error, "order Table Error");
  }
};

export default OrderTableData;
