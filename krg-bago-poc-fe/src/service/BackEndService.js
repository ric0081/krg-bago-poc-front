import axios from "axios";

// eslint-disable-next-line no-undef
const EmployeeApiService = import.meta.env.VITE_EMPLOYEES_API;

const getEmployees = async () => {
  try {
    const response = await axios.get(EmployeeApiService);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export { getEmployees };
