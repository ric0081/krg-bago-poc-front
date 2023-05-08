import axios from "axios";

// eslint-disable-next-line no-undef
const BirthdayApiService = process.env.BirthdayApiService;

const getEmployeesBirthdays = async () => {
  try {
    const response = await axios.get(BirthdayApiService);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export { getEmployeesBirthdays };
