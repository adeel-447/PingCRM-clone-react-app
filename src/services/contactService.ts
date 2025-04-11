import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

export const getContacts = async (
  currentPage?: number,
  searchValue?: string,
  filter?: string
) => {
  try {
    const API_ENDPOINT = currentPage
      ? `?page=${currentPage}&search=${searchValue}&deleted=${filter}`
      : "/names";
    const response = await axios.get(`${API_URL}contacts${API_ENDPOINT}`);

    return response.data;
  } catch (error) {
    console.error("Error fetching contacts: ", error);
  }
};

export const getContact = async (id: number) => {
  try {
    const response = await axios.get(
      `${API_URL}organizations/${id}/contacts`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching contact: ", error);
  }
};

