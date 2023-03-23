import axios from 'axios';

class PhoneService {
  constructor() {
    this.api = axios.create({
      baseURL: process.env.REACT_APP_SERVER_URL || "http://localhost:5005"
    });

    this.api.interceptors.request.use((config) => {
      const storedToken = localStorage.getItem("authToken");

      if (storedToken) {
        config.headers = { Authorization: `Bearer ${storedToken}` };
      }

      return config;
    });
  }

  getAllPhones() {
    return axios.get(`${this.BASE_URL}/phones`);
  }

  getPhoneById(id) {
    return axios.get(`${this.BASE_URL}/phones/${id}`);
  }


}

// Create one instance of the service
const exampleService = new PhoneService();

export default exampleService;