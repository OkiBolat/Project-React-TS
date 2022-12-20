import * as React from 'react';
import styles from './Button.module.scss';


interface Props {
  onClick: () => void;
  primary: boolean;
  className?: string;
  children: React.ReactNode;
}

const Button: React.FunctionComponent<Props> = ({ onClick, children, primary, className = '' }) => (
  <button style={{
    background: primary ? '#FFFFFF' : "#46939A",
    color: primary ? "#000" : "#FFFFFF"
  }}
    onClick={onClick}
    className={[styles.button, className].join(' ')}
    type="button">
    {children}
  </button>
);


export default Button;
