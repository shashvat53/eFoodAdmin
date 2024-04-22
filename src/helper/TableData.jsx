import instance from "../config/Axios";

const TableData = async () => {
  try {
    const { data } = await instance.get("/order");
    console.log(data, "table data");
    return data;
    // const res = await fetch("https://server1.capriglobals.com/order")
    // const result = await res.json();
    // console.log(result),"12345";
  } catch (error) {
    console.log(error, "table data error");
  }
};

export default TableData;
