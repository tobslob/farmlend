import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import DashboardLayout from "../DashBoardLayout/DashboardLayout";
import OrdersContent from "./OrdersContent";
import CreateOrder from "./CreateOrder";
import "../Products/index.scss";

const Orders = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const initialValues = {
    type: "",
    product: "",
    volume: "",
  };
  const [show, setShow] = useState(false);
  const [initialOrdersValues, setInitialOrdersValues] = useState(initialValues);

  const handleClose = () => {
    setInitialOrdersValues(initialValues);
    navigate({ state: "" });
    setShow(false);
  };

  useEffect(() => {
    if (
      location.state &&
      ["createOrder", "editOrder"].includes(location.state)
    ) {
      setShow(true);
    } else {
      setShow(false);
    }
  }, [location]);

  return (
    <DashboardLayout>
      <OrdersContent setInitialOrdersValues={setInitialOrdersValues} />
      <CreateOrder
        isOpen={show}
        close={handleClose}
        initialValues={initialOrdersValues}
      />
    </DashboardLayout>
  );
};

export default Orders;
