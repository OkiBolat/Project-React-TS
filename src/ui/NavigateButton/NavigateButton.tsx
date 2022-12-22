import * as React from 'react';
import classNames from 'classnames';
import { ReactComponent as Arrow } from '../../assets/icons/arrow.svg';
import styles from './NavigateButton.module.scss';

type NavigateButtonProps = {
    onClick: () => void;
    type: 'next' | 'prev';
};

const NavigateButton: React.FC<NavigateButtonProps> = ({ onClick, type }) => (
    <button onClick={onClick} type='button' className={styles.navigate_button}>
        <Arrow className={classNames(styles.arrow, { [styles.next]: type === 'next' })} />
    </button>
);

export default NavigateButton;
