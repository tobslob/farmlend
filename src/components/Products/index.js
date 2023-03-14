import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import DashboardLayout from '../DashBoardLayout/DashboardLayout';
import CreateProduct from './CreateProduct';
import ProductsContent from './ProductsContent';
import './index.scss';

export const initialValues = {
  category: '',
  variety: '',
  packaging: '',
  volume: '',
  pricePerUnit: '',
};
const Products = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [show, setShow] = useState(false);
  const [initialProductValues, setInitialProductValues] = useState(initialValues);

  const handleClose = () => {
    setInitialProductValues(initialValues);
    navigate({ state: '' });
    setShow(false);
  };

  useEffect(() => {
    if (location.state && ['createProduct', 'editProduct'].includes(location.state)) {
      setShow(true);
    } else {
      setShow(false);
    }
  }, [location]);

  return (
    <DashboardLayout>
      <ProductsContent setInitialProductValues={setInitialProductValues} />

      <CreateProduct isOpen={show} initialValues={initialProductValues} close={handleClose} />
    </DashboardLayout>
  );
};

export default Products;
