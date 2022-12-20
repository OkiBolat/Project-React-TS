import * as React from 'react';
import styles from './Input.module.scss';

interface Props {
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
}

const Input: React.FunctionComponent<Props> = ({ value, onChange, placeholder }) => {
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        onChange(event);
    };

    return <input type='text' value={value} onChange={handleChange} placeholder={placeholder} />;
};

export default Input;
