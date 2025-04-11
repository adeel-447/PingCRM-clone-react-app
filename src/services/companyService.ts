import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

export const getCompanies = async (
  currentPage?: number,
  searchValue?: string,
  filter?: string
) => {
  try {
    const API_ENDPOINT = currentPage
      ? `?page=${currentPage}&search=${searchValue}&deleted=${filter}`
      : "/names";
    const response = await axios.get(`${API_URL}organizations${API_ENDPOINT}`);

    return response.data;
  } catch (error) {
    console.error("Error fetching companies:", error);
  }
};

export const createCompany = async (formData: any) => {
  try {
    await axios.post(`${API_URL}contacts/`, formData);
    alert("Organization created successfully");
  } catch (error) {
    console.error("Error creating company: ", error);
  }
};
