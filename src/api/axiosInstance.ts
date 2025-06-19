import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: 'https://portfolio-yhxa.onrender.com', // Replace with your backend base URL
  headers: {
    'Content-Type': 'application/json',
  },
})

export default axiosInstance
