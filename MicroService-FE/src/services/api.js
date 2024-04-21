import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000/items", // Assuming your items.json is in the data folder
});

export const fetchItems = async () => {
  try {
    const response = await api.get("http://localhost:3000/items");
    return response.data;
  } catch (error) {
    console.error("Error fetching items:", error);
    return null;
  }
};

export const editItem = async (id, newItem) => {
  try {
    await api.put(`http://localhost:3000/items/${id}`, newItem);
    return newItem;
  } catch (error) {
    console.error(`Error editing item with id ${id}:`, error);
    throw error;
  }
};

export const deleteItem = async (id) => {
  try {
    await api.delete(`items/${id}.json`);
    return id;
  } catch (error) {
    console.error(`Error deleting item with id ${id}:`, error);
    return null;
  }
};

export const addItem = async (newItem) => {
  try {
    const response = await api.post("http://localhost:3000/items", newItem);
    return response.data;
  } catch (error) {
    console.error("Error adding item:", error);
    return null;
  }
};

export default api;
