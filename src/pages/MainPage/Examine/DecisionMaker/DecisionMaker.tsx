import React from 'react';
import styles from './DecisionMaker.module.scss';

interface IDecisionMakerProps {
    children?: React.ReactNode;
    artUrl: string;
}

const DecisionMaker: React.FC<IDecisionMakerProps> = ({ artUrl }) => {
    return (
        <div className={styles.container}>
            <div className={styles.image_wrapper}>
                <img className={styles.image} src={artUrl} />
            </div>
            <div className={styles.control_buttons}></div>
        </div>
    );
};

export default DecisionMaker;
