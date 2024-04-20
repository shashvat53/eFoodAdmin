import React from "react";
import instanceAxios from "../Axios/Axios";

const VerifyOfflinePayment = async () => {
  try {
    const { data } = await instanceAxios.get("/billing");
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export default VerifyOfflinePayment;
