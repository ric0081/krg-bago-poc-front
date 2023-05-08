import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import EnvironmentPlugin from "vite-plugin-environment";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    EnvironmentPlugin({
      EmployeeApiService: "http://localhost:8080/api/v1/employees",
      BirthdayApiService: "http://localhost:8080/api/v1/employees/birthdays",
    }),
  ],
});
