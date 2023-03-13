import axios from "axios";

const URL = "https://farmlend-api.onrender.com/api/v1";
const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjbGFpbSI6eyJpZCI6ImJmMzMwMDA0LTg3NzktNDJlMS1iYWFhLThiNTQ5ZTUwZmIwZCIsImNyZWF0ZWRBdCI6IjIwMjMtMDMtMTJUMTc6NTM6MzMuMTY4WiIsInVwZGF0ZWRBdCI6IjIwMjMtMDMtMTJUMTc6NTM6MzMuMTY4WiIsImZpcnN0TmFtZSI6IkthemVlbSIsImxhc3ROYW1lIjoiT2R1dG9sYSIsImVtYWlsQWRkcmVzcyI6Im9kdXRvbGFfa0B5YWhvby5jYSIsIm9yZ2FuaXphdGlvbklkIjoiNDkwNzMzZTktYzEyOC00Yjk1LWFjZjQtNzc4ZWJjOTU4MDVlIiwicGFzc3dvcmQiOiIkMmIkMTAkdlZ2NzFVNW94eGNBWnZlYXNtRFdZdTZLR3FiZkxra0pWQkJ0UU9MY2pOR2Fkcm5DbXVUa1MifSwiaWF0IjoxNjc4NjQzNjIyLCJleHAiOjE2Nzg3MzAwMjJ9.bP3wgHvpZZOLrka_avBA8DK2IbVO4fFfKd0IrhY1ag8";

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
