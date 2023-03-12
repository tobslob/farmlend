import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "react-notifications/lib/notifications.css";
import "react-loading-skeleton/dist/skeleton.css";
import Dashboard from "./components/Products";
import Organization from "./components/Organization";
import "./App.css";
import Orders from "./components/Orders";
import { ItemsContext } from "./components/ItemsContext/ItemsContext";

function App() {
  const [products, setProducts] = useState([]);
  const [organizations, setOrganizations] = useState([]);
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(false);
  return (
    <ItemsContext.Provider
      value={{
        products,
        organizations,
        orders,
        loading,
        setLoading,
        setProducts,
        setOrganizations,
        setOrders,
      }}
    >
      <Routes>
        <Route path="/products" element={<Dashboard />} />
        <Route path="/organizations" element={<Organization />} />
        <Route path="/orders" element={<Orders />} />
      </Routes>
    </ItemsContext.Provider>
  );
}

export default App;
