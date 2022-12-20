import React, { useState } from 'react';
import Input from '../Input/Input';
import styles from './InputValidate.module.scss';

interface IInputValidateProps {
    setValue: (value: string) => void;
    value: string;
    label: string;
    children?: React.ReactNode;
    validateValue: (value: string) => boolean;
    error: string;
    type?: string;
    icon?: any;
    onClickInputIcon?: () => void;
    inputName?: string;
}

const InputValidate: React.FC<IInputValidateProps> = ({
    value,
    setValue,
    label = '',
    validateValue,
    icon,
    onClickInputIcon,
    error,
    type,
    inputName,
}) => {
    const [isValid, setIsValid] = useState<boolean>(false);
    const [errorMessage, setErrorMessage] = useState<string>('');

    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setValue(value);
        const isValid = validateValue(value);
        setIsValid(() => validateValue(value));
        setErrorMessage(isValid ? '' : error);
    };

    return (
        <div className={styles.inputValidate}>
            <div className={styles.inputValidate_label}>
                <label htmlFor={inputName}>{label}:</label>
            </div>
            <Input
                name={inputName}
                icon={icon}
                onClickInputIcon={onClickInputIcon}
                type={type}
                value={value}
                onChange={handleEmailChange}
            />

            <div className={styles.inputValidate_error}>{!isValid && errorMessage}</div>
        </div>
    );
};

export default InputValidate;
