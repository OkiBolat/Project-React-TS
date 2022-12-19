import * as React from 'react';
import styles from './Form.module.scss';

interface Props {
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  children: React.ReactNode;
}

const Form: React.FunctionComponent<Props> = ({ onSubmit, children }) => (
  <form onSubmit={onSubmit}>
    {children}
  </form>
);

export default Form;
