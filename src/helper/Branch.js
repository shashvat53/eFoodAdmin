import instance from "../config/Axios";

export const getAllBranch = async () => {
  try {
    const response = await instance.get("/branch");
    return response?.data;
  } catch (error) {
    throw error.response.data; // Throw the error response data
  }
};
//hjhukhk
