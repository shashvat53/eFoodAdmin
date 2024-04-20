import instance from "../config/Axios";

export const insertCategory = async (insertCategory) => {
  try {
    const response = await instance.post(`/foodCategory`, insertCategory);
    return response;
  } catch (error) {
    return error;
  }
};

export const insertSubCategory = async (subCategory) => {
  try {
    const response = await instance.post(`/subCategory`, subCategory);
    return response;
  } catch (error) {
    return error;
  }
};

export const getAllCategory = async () => {
  try {
    const response = await instance.get(`/foodCategory`);
    return response;
  } catch (error) {
    return error;
  }
};
