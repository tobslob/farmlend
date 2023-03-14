import React, { useCallback, useContext, useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import { useNavigate } from "react-router-dom";
import { axiosInstance } from "../../constants";
import { deleteItem } from "../../utils/helpers";
import ConfirmationPopUp from "../ConfirmationPopUp";
import { ItemsContext } from "../ItemsContext/ItemsContext";
import "../Products/index.scss";

const OrderContent = ({ setInitialOrdersValues }) => {
  const navigate = useNavigate();
  const { loading, setLoading, setOrders, orders } = useContext(ItemsContext);

  const fetchAllOrders = useCallback(async () => {
    setLoading(true);
    const { data } = await axiosInstance.get(`/orders`);
    if (data.status === "success") {
      setOrders(data.data);
      setLoading(false);
    }
  }, [setLoading, setOrders]);

  const deleteOrder = (id) => {
    const deleteRequest = deleteItem(id, orders, setOrders, "organizations");
    return deleteRequest;
  };

  useEffect(() => {
    fetchAllOrders();
  }, [fetchAllOrders]);
  return (
    <div className="main-content">
      {loading && !orders?.length ? (
        <Skeleton
          count={20}
          duration={2}
          containerClassName="skeleton-container"
          className="skeleton-element"
        />
      ) : (
        orders?.map((order, index) => (
          <div key={index} className="card-container">
            <span>
              <strong>Type:</strong> {order?.type}
            </span>
            {order?.product?.length ? (
              <span>
                <strong>Products:</strong>{" "}
                {order?.product
                  .map(({ category, variety }) => `${category}-${variety}`)
                  .join(",")}
              </span>
            ) : null}
            <div className="action-buttons">
              <button
                onClick={() => {
                  setInitialOrdersValues(order);
                  navigate("/orders", { state: "editOrder" });
                }}
                disabled={loading}
              >
                Edit
              </button>
              <ConfirmationPopUp
                placement="center"
                title="Are you sure to delete this product"
                onConfirm={() => deleteOrder(order.id)}
                okText="Yes"
                cancelText="No"
              >
                <button>Delete</button>
              </ConfirmationPopUp>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default OrderContent;
