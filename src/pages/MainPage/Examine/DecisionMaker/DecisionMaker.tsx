import React from 'react';
import NavigateButton from '../../../../components/NavigateButton';
import styles from './DecisionMaker.module.scss';

interface IDecisionMakerProps {
    children?: React.ReactNode;
    artUrl: string;
    artsLength: number;
    currentArtIndex: number;
    handleNext: () => void;
    handlePrev: () => void;
    handleMoveTo: (index: number) => () => void;
}

const DecisionMaker: React.FC<IDecisionMakerProps> = ({
    artUrl,
    artsLength,
    currentArtIndex,
    handleNext,
    handlePrev,
    handleMoveTo,
}) => {
    return (
        <div className={styles.container}>
            <div className={styles.image_wrapper}>
                <img className={styles.image} src={artUrl} />
            </div>
            <div className={styles.control_buttons}>
                <NavigateButton onClick={handlePrev} type='prev' />
                <NavigateButton onClick={handleNext} type='next' />
            </div>
            <div className={styles.pagination_numbers}>
                {new Array(artsLength).fill(0).map((_, index) => (
                    <button
                        key={index}
                        className={currentArtIndex === index ? styles.active : ''}
                        onClick={handleMoveTo(index)}
                    >
                        {index + 1}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default DecisionMaker;
