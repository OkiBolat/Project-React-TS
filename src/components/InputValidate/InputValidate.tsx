import React, { useState } from 'react';
import Input from '../Input/Input';
import styles from './InputValidate.module.scss';

interface IInputValidateProps {
    setValue: (value: string) => void;
    value: string;
    label: string;
    children?: React.ReactNode;
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
    icon,
    onClickInputIcon,
    error,
    type,
    inputName,
}) => {
    return (
        <div className={styles.inputValidate}>
            <div className={styles.inputValidate_label}>
                <label htmlFor={inputName}>{label}:</label>
            </div>
            {/* <Input
                name={inputName}
                icon={icon}
                onClickInputIcon={onClickInputIcon}
                type={type}
                value={value}
                onChange={setValue}
            /> */}
            <span className={styles.inputValidate_error}>{error && error}</span>
        </div>
    );
};

export default InputValidate;
