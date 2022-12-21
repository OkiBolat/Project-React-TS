import React from 'react';
import Button from '../../../../components/Button';
import NavigateButton from '../../../../components/NavigateButton';
import PagintationUtils from '../../../../utils/paginationUtils';
import { ReactComponent as ApproveIcon } from '../../../../assets/icons/approve.svg';
import { ReactComponent as RefuseIcon } from '../../../../assets/icons/refuse.svg';
import styles from './DecisionMaker.module.scss';
import { Decision } from '../../../../types/artWork';

interface IDecisionMakerProps {
    children?: React.ReactNode;
    artId: number;
    artUrl: string;
    artDecision: Decision | null;
    artsLength: number;
    currentArtIndex: number;
    handleNext: () => void;
    handlePrev: () => void;
    handleMoveTo: (index: number) => () => void;
    handleApprove: (artId: number) => () => void;
    handleRefuse: (artId: number) => () => void;
}

const DecisionMaker: React.FC<IDecisionMakerProps> = ({
    artId,
    artUrl,
    artDecision,
    artsLength,
    currentArtIndex,
    handleNext,
    handlePrev,
    handleMoveTo,
    handleApprove,
    handleRefuse,
}) => {
    const refuseIsTrueStyle = artDecision?.value === false;
    const approveIsTrueStyle = artDecision?.value === true;

    return (
        <div className={styles.container}>
            <div className={styles.image_wrapper}>
                <img className={styles.image} src={artUrl} />
            </div>
            <div className={styles.control_buttons}>
                <NavigateButton onClick={handlePrev} type='prev' />
                <Button
                    className={[
                        styles.decision_button,
                        refuseIsTrueStyle ? styles.decision_button_selected : null,
                    ].join(' ')}
                    onClick={handleRefuse(artId)}
                >
                    <RefuseIcon className={styles.decision_button_icon} />
                    Отказать
                </Button>
                <Button
                    className={[
                        styles.decision_button,
                        approveIsTrueStyle ? styles.decision_button_selected : null,
                    ].join(' ')}
                    onClick={handleApprove(artId)}
                >
                    <ApproveIcon className={styles.decision_button_icon} />
                    Одобрить
                </Button>
                <NavigateButton onClick={handleNext} type='next' />
            </div>
            <div className={styles.pagination_numbers}>
                {PagintationUtils.getPaginationNumbers(currentArtIndex, 5, artsLength).map(
                    (paginationNumber, index) => (
                        <button
                            key={index}
                            className={[
                                currentArtIndex === paginationNumber ? styles.active : '',
                                typeof paginationNumber === 'string' ? styles.dots : '',
                            ].join(' ')}
                            onClick={handleMoveTo(
                                typeof paginationNumber === 'string'
                                    ? currentArtIndex
                                    : paginationNumber
                            )}
                        >
                            {typeof paginationNumber === 'string'
                                ? paginationNumber
                                : paginationNumber + 1}
                        </button>
                    )
                )}
            </div>
        </div>
    );
};

export default DecisionMaker;
