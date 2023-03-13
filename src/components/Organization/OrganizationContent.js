import React, { useCallback, useContext, useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import { useNavigate } from "react-router-dom";
import { axiosInstance } from "../../constants";
import { deleteItem } from "../../utils/helpers";
import ConfirmationPopUp from "../ConfirmationPopUp";
import { ItemsContext } from "../ItemsContext/ItemsContext";
import "../Products/index.scss";

const OrganizationContent = ({ setInitialOrganizationValues }) => {
  const { loading, setLoading, setOrganizations, organizations, products } =
    useContext(ItemsContext);
  const navigate = useNavigate();

  const fetchAllOrganizations = useCallback(async () => {
    setLoading(true);
    const { data } = await axiosInstance.get(`/organizations`);
    if (data.status === "success") {
      setOrganizations(data.data);
      setLoading(false);
    }
  }, [setLoading, setOrganizations]);

  const deleteOrganization = (id) => {
    const deleteRequest = deleteItem(
      id,
      organizations,
      setOrganizations,
      "organizations"
    );
    return deleteRequest;
  };

  useEffect(() => {
    fetchAllOrganizations();
  }, [fetchAllOrganizations]);

  return (
    <div className="main-content">
      {loading && !organizations?.length ? (
        <Skeleton
          count={20}
          duration={2}
          containerClassName="skeleton-container"
          className="skeleton-element"
        />
      ) : (
        organizations.map((organization, index) => (
          <div key={index} className="card-container">
            <span>
              <strong>Name:</strong> {organization.name}
            </span>
            <span>
              <strong>Type:</strong> {organization.type}
            </span>
            <div className="action-buttons">
              <button
                disabled={loading}
                onClick={() => {
                  console.log({ organization });
                  setInitialOrganizationValues(organization);
                  navigate("/organizations", { state: "editOrganization" });
                }}
              >
                Edit
              </button>
              <ConfirmationPopUp
                placement="center"
                title="Are you sure to delete this product"
                onConfirm={() => deleteOrganization(organization.id)}
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

export default OrganizationContent;
