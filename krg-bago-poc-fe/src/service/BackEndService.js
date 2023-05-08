import axios from "axios";

// eslint-disable-next-line no-undef
const EmployeeApiService = process.env.EmployeeApiService;

const getEmployees = async () => {
  try {
    const response = await axios.get(EmployeeApiService);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export { getEmployees };
