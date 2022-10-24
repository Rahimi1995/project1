import React from 'react'
import axios from "axios"
const axiosInstance = axios.create({
  baseURL: "http://localhost/testjoin/upload.php",
})
export default axiosInstance
