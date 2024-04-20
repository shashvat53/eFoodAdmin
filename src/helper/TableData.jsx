import instanceAxios from "../Axios/Axios";

const TableData = async () => {
  try {
    const { data } = await instanceAxios.get("/order");
    console.log(data);
    return data;
    // const res = await fetch("https://server1.capriglobals.com/order")
    // const result = await res.json();
    // console.log(result),"12345";
  } catch (error) {
    console.log(error);
  }
};

export default TableData;
