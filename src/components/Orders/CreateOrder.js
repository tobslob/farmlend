import React, { useContext, useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import Form from '../Form/Form';
import FormInput from '../Form/FormInput';
import { customStyles } from '../CustomStyle';
import FormModal from '../Modals/FormModal';
import { fields } from '../../constants';
import { ItemsContext } from '../ItemsContext/ItemsContext';
import { createItem } from '../../utils/helpers';

const CreateOrder = ({ isOpen, close, initialValues }) => {
  const location = useLocation();
  const text = fields[location.state];
  const options = [{ value: 'sell' }, { value: 'buy' }];
  const { loading, setLoading, setOrders, orders, products } = useContext(ItemsContext);

  const handleSubmit = (values) => {
    const createReq = createItem(values, orders, setLoading, setOrders, close, 'orders');
    return createReq;
  };
  const productItems = useMemo(
    () =>
      products.map((product) => ({
        value: product.id,
        name: `${product.category}- ${product.variety}`,
      })),
    [products],
  );
  return (
    <FormModal isOpen={isOpen} style={customStyles} close={close}>
      <h2 className='create-heading'>{text}</h2>
      <Form initialValues={initialValues} submit={handleSubmit} loading={loading} buttonText={text}>
        <FormInput label='Select product' type='select' name='product' options={productItems} />
        <FormInput label='Volume' type='text' name='volume' />
        <FormInput label='Type' type='select' name='type' options={options} />
      </Form>
    </FormModal>
  );
};

export default CreateOrder;
