import React, { useContext, useCallback, useEffect, memo } from "react";
import { useNavigate } from "react-router-dom";
import { ItemsContext } from "../ItemsContext/ItemsContext";
import ConfirmationPopUp from "../ConfirmationPopUp";
import { axiosInstance } from "../../constants";
import Skeleton from "react-loading-skeleton";
import { deleteItem } from "../../utils/helpers";

const MainContent = memo(({ setInitialProductValues }) => {
  const navigate = useNavigate();
  const { products, setProducts, loading, setLoading } =
    useContext(ItemsContext);

  const fetchAllProducts = useCallback(async () => {
    setLoading(true);
    const { data } = await axiosInstance.get(`/products`);
    if (data.status === "success") {
      setProducts(data.data);
      setLoading(false);
    }
  }, [setProducts, setLoading]);

  const deleteProduct = (id) => {
    const deleteRequest = deleteItem(id, products, setProducts, "products");
    return deleteRequest;
  };

  useEffect(() => {
    fetchAllProducts();
  }, [fetchAllProducts]);

  return (
    <div className="main-content">
      {loading && !products?.length ? (
        <Skeleton
          count={20}
          duration={2}
          containerClassName="skeleton-container"
          className="skeleton-element"
        />
      ) : (
        products.map((product, index) => (
          <div key={index} className="card-container">
            <span>
              <strong>Category:</strong> {product.category}
            </span>
            <span>
              <strong>Variety:</strong> {product.variety}
            </span>
            <span>
              <strong>Volume: </strong>
              {product.volume}
            </span>
            <div className="action-buttons">
              <button
                onClick={() => {
                  setInitialProductValues(product);
                  navigate("/products", { state: "editProduct" });
                }}
              >
                Edit
              </button>
              <ConfirmationPopUp
                placement="center"
                title="Are you sure to delete this product"
                onConfirm={() => deleteProduct(product.id)}
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
});

export default MainContent;
