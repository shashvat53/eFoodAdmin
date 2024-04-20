import React from 'react'
import instance from '../config/Axios'

 const login = async (emailAddress, password) => {
    try {
      const response = await instance.post('/employee/login', { emailAddress, password });
      return response.data; // Assuming your API returns data upon successful login
    } catch (error) {
      throw error.response.data; // Throw the error response data
    }
  };

  export default login