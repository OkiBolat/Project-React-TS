import * as React from 'react';
import styles from './Button.module.scss';

interface Props {
    onClick: (e?:any) => void;
    primary?: boolean;
    className?: string;
    disabled?: boolean;
    children: React.ReactNode;
    type?: any;
}

const Button: React.FunctionComponent<Props> = ({ onClick, children, primary, className = '', disabled, type="button" }) => (
    <button
        onClick={onClick}
        className={[primary ? styles.button : styles.button_dark, className].join(' ')}
        type={type}
    >
        {children}
    </button>
);

export default Button;
