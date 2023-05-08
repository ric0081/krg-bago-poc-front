import axios from "axios";

// eslint-disable-next-line no-undef
const BirthdayApiService = import.meta.env.VITE_BIRTHDAYS_API;

const getEmployeesBirthdays = async () => {
  try {
    const response = await axios.get(BirthdayApiService);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export { getEmployeesBirthdays };
