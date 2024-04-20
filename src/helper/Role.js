import instance from "../config/Axios";

export const createRole = async (roleName) => {
  try {
    const response = await instance.post("/rolePermission", roleName);
    return response.data;
  } catch (error) {
    return error.response.data; // Throw the error response data
  }
};

export const getAllRoles = async () => {
  try {
    const response = await instance.get("/rolePermission");
    return response.data;
  } catch (error) {
    return error.response.data; // Throw the error response data
  }
};

export const getRoleById = async (id) => {
  try {
    const response = await instance.get(`/rolePermission/${id}`);
    return response.data;
  } catch (error) {
    return error.response.data; // Throw the error response data
  }
};

export const updateRoleById = async (id, updatedData) => {
  try {
    const response = await instance.put(`/rolePermission/${id}`, updatedData);
    return response.data;
  } catch (error) {
    return error.response.data; // Throw the error response data
  }
};

export const roleDeleteById = async (id) => {
  try {
    const response = await instance.delete(`/rolePermission/${id}`);
    return response.data;
  } catch (error) {
    return error.response.data; // Throw the error response data
  }
};
