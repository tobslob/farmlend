import React from 'react';
import { axiosInstance } from '../../constants';
import Form from '../Form/Form';
import FormInput from '../Form/FormInput';
import './login.scss';

const Login = () => {
  const initialValues = {
    emailAddress: '',
    password: '',
  };

  const handleSubmit = async (values) => {
    const login = await axiosInstance.post('/users/login', values);
    if (login.status === 200) {
      const token = login.data.data;
      localStorage.setItem('appUserToken', token);
      window.location.href = '/products';
    }
  };
  return (
    <div className='login-container'>
      <Form initialValues={initialValues} submit={handleSubmit} buttonText='Log In'>
        <FormInput label='Name' type='text' name='emailAddress' />
        <FormInput label='Type' type='password' name='password' />
      </Form>
    </div>
  );
};

export default Login;
