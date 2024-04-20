import React from "react";
import instance from "../config/Axios";

export const getAllChef = async () => {
  try {
    const response = await instance.get("/chef");
    return response.data;
  } catch (error) {
    throw error.response.data; // Throw the error response data
  }
};

export const getChefById = async (id) => {
  try {
    const response = await instance.get(`/chef/${id}`);
    return response;
  } catch (error) {
    throw error.response.data; // Throw the error response data
  }
};

export const createChef = async (formData) => {
  try {
    const response = await instance.post("/chef", formData);
    return response.data;
  } catch (error) {
    throw error.response.data; // Throw the error response data
  }
};

export const deleteChef = async (id) => {
  try {
    const response = await instance.delete(`/chef/${id}`);
    return response.data;
  } catch (error) {
    throw error.response.data; // Throw the error response data
  }
};

export const editChef = async (chefId, formData) => {
  try {
    const response = await instance.put(`/chef/${chefId}`, formData);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};
export const chefStatus = async (chefId) => {
  try {
    const response = await instance.put(`/chef/is_active/${chefId}`);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};
