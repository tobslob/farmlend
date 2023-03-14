import axios from "axios";


const URL = "http://farmlendz-2009802627.eu-north-1.elb.amazonaws.com/api/v1"
const token = localStorage.getItem("appUserToken");

export const axiosInstance = axios.create({
  baseURL: URL,
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

export const fields = {
  createProduct: "Create Product",
  editProduct: "Update product",
  createOrganization: "Create Organization",
  editOrganization: "Update Organization",
  createOrder: "Create Order",
  editOrder: "Update Order",
};
