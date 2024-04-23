import React from "react";
import instance from "../config/Axios";

const VerifyOfflinePayment = async () => {
  try {
    const { data } = await instance.get("/billing");
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export default VerifyOfflinePayment;
