import React, { useState } from 'react';
import view from '../../../assets/images/view.png';
import hide from '../../../assets/images/hide.png';
import styles from './PasswordInput.module.scss';

interface Props {
    value: string;
    onChange: any;
    placeholder?: string;
    name?: string;
    label?: string;
    error?: string;
}

const PasswordInput: React.FunctionComponent<Props> = ({
    value,
    onChange,
    placeholder,
    name,
    error,
    label,
}) => {

    const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(true);
    const togglePasswordVisibility = () => setIsPasswordVisible((prev) => !prev);
    
    return (
        <div className={styles.inputValidate}>
            <div className={styles.inputValidate_label}>
                <label htmlFor="password">{label}:</label>
            </div>
            <div className={styles.input_wrp}>
                <input
                    id="password"
                    name={name}
                    className={styles.input}
                    type={isPasswordVisible ? 'password' : 'text'}
                    value={value}
                    onChange={onChange}
                    placeholder={placeholder}
                />
                {value && (
                    <img className={styles.input_icon} onClick={togglePasswordVisibility} src={isPasswordVisible ? view : hide} alt='' />
                )}
            </div>
            <span className={styles.inputValidate_error}>{error && error}</span>
        </div>
    );
};

export default PasswordInput;
