/* eslint-disable react/prop-types */
import React from 'react';
import styles from '../styles/modules/button.module.scss';
import { getClasses } from '../utils/getClasses';

const buttonTypes = {
  primary: 'primary',
  secondary: 'secondary'
};

function Button({ variant, type, children, ...rest }) {
  return (
    <button
      className={getClasses([styles.button, styles[`button--${buttonTypes[variant]}`]])}
      type={type === 'submit' ? 'submit' : 'button'}
      {...rest}>
      {children}
    </button>
  );
}

function SelectButton({ id, children, ...rest }) {
  return (
    <select id={id} className={getClasses([styles.button, styles.button__select])} {...rest}>
      {children}
    </select>
  );
}

export { SelectButton };
export default Button;
