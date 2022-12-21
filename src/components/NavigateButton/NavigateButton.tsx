import * as React from 'react';
import { ReactComponent as Arrow } from '../../assets/icons/arrow.svg';
import styles from './NavigateButton.module.scss';

interface Props {
    onClick: () => void;
    type: 'next' | 'prev';
}

const NavigateButton: React.FunctionComponent<Props> = ({ onClick, type }) => (
    <button onClick={onClick} type='button' className={styles.navigate_button}>
        {type === 'prev' ? (
            <Arrow className={styles.arrow} />
        ) : (
            <Arrow className={[styles.arrow, styles.next].join(' ')} />
        )}
    </button>
);

export default NavigateButton;
