import React, { useState } from 'react';
import styles from './Input.module.scss';

interface Props {
    value: string;
    onChange: any;
    placeholder?: string;
    name?: string;
    label?: string;
    error?: string;
    icon?: any;
    type?: string;
    onIconChange?: () => void;
}

const Input: React.FunctionComponent<Props> = ({
    onIconChange,
    icon = null,
    value,
    onChange,
    placeholder,
    name = 'name',
    error,
    label,
    type,
}) => {
    return (
        <div className={styles.inputValidate}>
            <div className={styles.inputValidate_label}>
                <label htmlFor={name}>{label}:</label>
            </div>
            <div className={styles.input_wrp}>
                <input
                    id={name}
                    name={name}
                    className={styles.input}
                    type={type}
                    value={value}
                    onChange={onChange}
                    placeholder={placeholder}
                />
                {value && (
                    <img className={styles.input_icon} onClick={onIconChange} src={icon} alt='' />
                )}
            </div>
            <span className={styles.inputValidate_error}>{error && error}</span>
        </div>
    );
};

export default Input;
