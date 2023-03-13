import React from "react";
import { Popconfirm } from "antd";

const ConfirmationPopUp = ({ title, children, onConfirm }) => {
  return (
    <Popconfirm
      placement="top"
      title={title}
      onConfirm={onConfirm}
      okText="Yes"
      cancelText="No"
    >
      {children}
    </Popconfirm>
  );
};

export default ConfirmationPopUp;
