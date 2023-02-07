import axios from "axios";

export const getAdmin = () => {
  return axios.get("/admin");
};

export const getAdminsById = (id) => {
  return axios.get(`/admin/${id}`);
};

export const createAdmin = (data) => {
  return axios.post("/admin/add", data);
};

export const updateAdminById = (id, data) => {
  return axios.put(`/admin/${id}`, data);
};

export const deleteAdminById = (id) => {
  return axios.delete(`/admin/${id}`);
};
