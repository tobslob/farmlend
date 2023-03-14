import React, { useMemo, useState } from "react";
import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";
import "./form.scss";

export const FormContext = React.createContext({
  form: {},
});
const antIcon = (
  <LoadingOutlined style={{ fontSize: 24, color: "white" }} spin />
);

function Form({ initialValues, submit, buttonText, loading, children }) {
  const [form, setForm] = useState(initialValues);
  const disableBtn = useMemo(
    () => Object.keys(form).map((key) => form[key]),
    [form]
  ).every((field) => !!field);
  const handleFormChange = (event) => {
    const { name, value } = event.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  return (
    <form className="form-container">
      <FormContext.Provider
        value={{
          form,
          handleFormChange,
        }}
      >
        {children}
      </FormContext.Provider>

      <div className="button">
        <button
          type="button"
          disabled={loading || !disableBtn}
          onClick={() => submit(form)}
        >
          {buttonText} {loading && disableBtn && <Spin indicator={antIcon} />}
        </button>
      </div>
    </form>
  );
}

export default Form;
