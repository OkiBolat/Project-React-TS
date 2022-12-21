import * as React from 'react';
import styles from './Button.module.scss';

interface Props {
    onClick: (e?: any) => void;
    primary?: boolean;
    className?: string;
    disabled?: boolean;
    children: React.ReactNode;
    type?: any;
    variant?: 'primary' | 'secondary' | 'tertiary';
}

const Button: React.FunctionComponent<Props> = ({
    onClick,
    children,
    className = '',
    disabled,
    type = 'button',
    variant,
}) => (
    <button
        disabled={false}
        onClick={onClick}
        className={[styles.button, styles[`button__${variant}`], className].join(' ')}
        type={type}
    >
        {children}
    </button>
);

export default Button;
