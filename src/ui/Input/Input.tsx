import * as React from 'react';
import styles from './Input.module.scss';

type InputProps = {
    value: string;
    onChange: any;
    placeholder?: string;
    type?: string;
    icon?: any;
    onClickInputIcon?: () => void;
    name?: string;
};

const Input: React.FC<InputProps> = ({
    value,
    onChange,
    placeholder,
    type = 'text',
    icon,
    onClickInputIcon,
    name,
}) => {
    return (
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
    );
};

export default Input;
