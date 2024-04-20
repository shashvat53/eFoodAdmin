import instance from "../config/Axios";

export const createEmploye = async (employeData) => {
  try {
    const response = await instance.post("/employee", employeData);
    return response;
  } catch (error) {
    return error.response.data; // Throw the error response data
  }
};

export const getAllEmploye = async () => {
  try {
    const response = await instance.get("/employee");
    return response?.data;
  } catch (error) {
    return error.response.data; // Throw the error response data
  }
};

export const DeleteEmploye = async (id) => {
  try {
    const response = await instance.delete(`/employee/${id}`);
    return response?.data;
  } catch (error) {
    return error.response.data; // Throw the error response data
  }
};

export const updateEmploye = async (id, employeData) => {
  try {
    const response = await instance.put(`/employee/${id}`, employeData);
    return response?.data;
  } catch (error) {
    return error.response.data; // Throw the error response data
  }
};
