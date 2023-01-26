import React from 'react';
import Input from './Input/Input';

const Form = ({
  object,
  setObject,
  handleSubmit,
  header,
  footer,
  submitText,
  children,
}) => {
  const handleChange = ({ target: { value, name } }) => {
    setObject((curr) => {
      return { ...curr, [name]: value };
    });
  };

  const inputElements = Object.entries(object).map(([key, value]) => {
    let type;
    if (key === 'password') {
      type = 'password';
    } else if (key === 'email') {
      type = 'email';
    } else {
      type = 'text';
    }
    return (
      <Input
        key={key}
        value={value}
        handleChange={handleChange}
        name={key}
        type={type}
      />
    );
  });

  return (
    <form className="form" onSubmit={handleSubmit}>
      {header}
      {inputElements}
      {children}
      <button type="submit" className="btn-submit">
        {submitText}
      </button>
      {footer}
    </form>
  );
};

Form.defaultProps = {
  header: null,
  footer: null,
};

export default Form;
