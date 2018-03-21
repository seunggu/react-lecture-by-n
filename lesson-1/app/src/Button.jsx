import React from 'react';

const Button = (props) => {
  const { children, color, onClick } = props;
  return (
    <button style={{ color }} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
