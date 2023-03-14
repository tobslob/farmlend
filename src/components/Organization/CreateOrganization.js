import React, { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import Form from '../Form/Form';
import FormInput from '../Form/FormInput';
import { customStyles } from '../CustomStyle';
import FormModal from '../Modals/FormModal';
import { fields } from '../../constants';
import { ItemsContext } from '../ItemsContext/ItemsContext';
import { createItem } from '../../utils/helpers';

const CreateOrganization = ({ isOpen, close, initialValues }) => {
  const location = useLocation();
  const { loading, setLoading, setOrganizations, organizations } = useContext(ItemsContext);
  const text = fields[location.state];
  const options = [{ value: 'seller' }, { value: 'buyer' }];

  const handleSubmit = (values) => {
    const createReq = createItem(
      values,
      organizations,
      setLoading,
      setOrganizations,
      close,
      'organizations',
    );
    return createReq;
  };
  return (
    <FormModal isOpen={isOpen} style={customStyles} close={close}>
      <h2 className='create-heading'>{text}</h2>
      <Form initialValues={initialValues} submit={handleSubmit} loading={loading} buttonText={text}>
        <FormInput label='Name' type='text' name='name' />
        <FormInput label='Type' type='select' name='type' options={options} />
      </Form>
    </FormModal>
  );
};

export default CreateOrganization;
