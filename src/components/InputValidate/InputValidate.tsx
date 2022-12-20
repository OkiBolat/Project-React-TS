import React, { useState } from 'react';
import Input from '../Input/Input';
import styles from './InputValidate.module.scss';

interface IInputValidateProps {
  setValue: (value: string) => void;
  value: string;
  label: string;
  children?: React.ReactNode;
}

const InputValidate: React.FC<IInputValidateProps> = ({ value, setValue, label='' }) => {
  const [isValid, setIsValid] = useState<boolean>(false)
  const [errorMessage, setErrorMessage] = useState<string>('')

  const validateEmail = (value: string) => {
    return value.length > 0;
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setValue(value);
    const isValid = validateEmail(value);
    setIsValid(() => validateEmail(value));
    setErrorMessage(isValid ? '' : 'Invalid email address');
  };

  return (
    <div className={styles.inputValidate}>
      <label htmlFor="email">{label}:</label>
      <Input
        value={value}
        onChange={handleEmailChange}
      />
      {!isValid && (
        <div className={styles.inputValidate_error}>{errorMessage}</div>
      )}
    </div>
  );
}

export default InputValidate;
