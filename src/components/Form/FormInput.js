import React from 'react';
import { useContext } from 'react';
import { FormContext } from './Form';
import './form.scss';

function FormInput(props) {
  const { label, type = 'text', name, options = [] } = props;

  const formContext = useContext(FormContext);
  const { form, handleFormChange } = formContext;

  return (
    <div className='form-input'>
      <label>{label}</label>
      {type === 'select' ? (
        <select name={name} value={form[name]} onChange={handleFormChange}>
          <option value='' selected='selected'>
            --Select an option--
          </option>
          {options.map((option, index) => (
            <option value={option.value} key={index}>
              {option?.name || option.value}
            </option>
          ))}
        </select>
      ) : (
        <input type={type} name={name} value={form[name]} onChange={handleFormChange} />
      )}
    </div>
  );
}

export default FormInput;
