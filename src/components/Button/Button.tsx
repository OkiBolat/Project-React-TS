import * as React from 'react';
import styles from './Button.module.css';


interface Props {
  onClick: () => void;
  children: React.ReactNode;
}

const Button: React.FunctionComponent<Props> = ({ onClick, children }) => (
  <button onClick={onClick} type="button">
    {children}
  </button>
);


export default Button;
