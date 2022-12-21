import * as React from 'react';
import styles from './Form.module.scss';

type FormProps = {
    onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
    children: React.ReactNode;
};

const Form: React.FC<FormProps> = ({ onSubmit, children }) => (
    <form className={styles.form} onSubmit={onSubmit}>
        {children}
    </form>
);

export default Form;
