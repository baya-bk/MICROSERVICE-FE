import HttpClient from "../middleware/HttpClient.js";

const api = HttpClient();

const createApiService = () => {
  return {
    fetchAll: async (tenantId, resourceName, params = {}) => {
      try {
        const response = await api.get(`/${tenantId}/${resourceName}`, {
          params,
        });
        return response.data;
      } catch (error) {
        console.error(`Error fetching ${resourceName}:`, error);
        return null;
      }
    },
    fetchById: async (tenantId, resourceName, id) => {
      try {
        const response = await api.get(`/${tenantId}/${resourceName}/${id}`);
        return response.data;
      } catch (error) {
        console.error(`Error fetching ${resourceName} by ID:`, error);
        return null;
      }
    },
    create: async (tenantId, resourceName, data) => {
      try {
        const response = await api.post(`/${tenantId}/${resourceName}`, data);

        return response.data;
      } catch (error) {
        console.error(`Error creating ${resourceName}:`, error);
        return null;
      }
    },
    update: async (tenantId, resourceName, id, data) => {
      try {
        await api.put(`/${tenantId}/${resourceName}/${id}`, data);
        return data;
      } catch (error) {
        console.error(`Error updating ${resourceName} by ID:`, error);
        throw error;
      }
    },
    delete: async (tenantId, resourceName, id) => {
      try {
        await api.delete(`/${tenantId}/${resourceName}/${id}`);
        return id;
      } catch (error) {
        console.error(`Error deleting ${resourceName} by ID:`, error);
        return null;
      }
    },
  };
};

export default createApiService;
