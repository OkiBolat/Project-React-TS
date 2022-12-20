import * as React from 'react';
import styles from './Input.module.scss';

interface Props {
  value: string;
  onChange: any;
  placeholder?: string;
}

const Input: React.FunctionComponent<Props> = ({ value, onChange, placeholder }) => {
  const handleChange = (e: any) => {
    onChange(e)
  };

  return (
    <input
      className={styles.input}
      type="text"
      value={value}
      onChange={handleChange}
      placeholder={placeholder}
    />
  );
};

export default Input;
