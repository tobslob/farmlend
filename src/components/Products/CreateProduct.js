import React, { useContext } from "react";
import { useLocation } from "react-router-dom";
import Form from "../Form/Form";
import FormInput from "../Form/FormInput";
import { customStyles } from "../CustomStyle";
import FormModal from "../Modals/FormModal";
import { fields } from "../../constants";
import { ItemsContext } from "../ItemsContext/ItemsContext";
import { createItem } from "../../utils/helpers";

const Create = ({ isOpen, close, initialValues }) => {
  const location = useLocation();

  const { loading, setLoading, setProducts, products } =
    useContext(ItemsContext);

  const text = fields[location.state];

  const submit = (values) => {
    const createReq = createItem(
      values,
      products,
      setLoading,
      setProducts,
      close,
      "products"
    );
    return createReq;
  };

  return (
    <FormModal isOpen={isOpen} style={customStyles} close={close}>
      <h2 className="create-heading">{text}</h2>
      <Form
        initialValues={initialValues}
        submit={submit}
        buttonText={text}
        loading={loading}
      >
        <FormInput label="Category" type="text" name="category" />
        <FormInput label="Variety" type="text" name="variety" />
        <FormInput label="Packaging" type="text" name="packaging" />
        <FormInput label="Volume" type="text" name="volume" />
        <FormInput label="Price per unit" type="text" name="pricePerUnit" />
      </Form>
    </FormModal>
  );
};

export default Create;
