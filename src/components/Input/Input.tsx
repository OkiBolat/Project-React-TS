import * as React from 'react';
import styles from './Input.module.scss';

interface Props {
    value: string;
    onChange: any;
    placeholder?: string;
    type?: string;
    icon?: any;
    onClickInputIcon?: () => void;
    name?: string;
    label?: string;
    children?: React.ReactNode;
    error?: string;
    inputName?: string;
}

const Input: React.FunctionComponent<Props> = ({
    value,
    onChange,
    placeholder,
    type = 'text',
    icon,
    onClickInputIcon,
    name='name',
    label,
    error,
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
                {icon && value && (
                    <img className={styles.input_icon} onClick={onClickInputIcon} src={icon} alt='' />
                )}
            </div>
            <span className={styles.inputValidate_error}>{error}</span>
        </div>
    );
};

export default Input;