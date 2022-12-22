import React from 'react';
import Button from '../../../../ui/Button';
import NavigateButton from '../../../../ui/NavigateButton';
import { ReactComponent as ApproveIcon } from '../../../../assets/icons/approve.svg';
import { ReactComponent as RefuseIcon } from '../../../../assets/icons/refuse.svg';
import styles from './DecisionMaker.module.scss';
import { ArtWork } from '../../../../libs/types/artWork';
import useModal from '../../../../hooks/useModal';
import RefuseModal from './RefuseModal';
import { addDecision } from '../model';
import Pagination from '../../../../ui/Pagination';
import classNames from 'classnames';

type DecisionMakerProps = {
    children?: React.ReactNode;
    art: ArtWork;
    artsLength: number;
    currentArtIndex: number;
    onNext: () => void;
    onPrev: () => void;
    onPressPaginationNumber: (index: number) => void;
};

const DecisionMaker: React.FC<DecisionMakerProps> = ({
    art,
    artsLength,
    currentArtIndex,
    onNext,
    onPrev,
    onPressPaginationNumber,
}) => {
    const modal = useModal();

    const handleApprove = () => {
        addDecision({ id: art.id, decision: { value: true } });
    };

    const isRefuse = art.decision?.value === false;
    const isApprove = art.decision?.value === true;

    return (
        <div className={styles.container}>
            <RefuseModal modal={modal} artId={art.id} />
            <div className={styles.image_wrapper}>
                <img className={styles.image} src={art.url} />
            </div>

            <div className={styles.control_buttons}>
                <NavigateButton onClick={onPrev} type='prev' />
                <Button
                    className={classNames(styles.decision_button, {
                        [styles.decision_button_selected]: isRefuse,
                    })}
                    onClick={modal.show}
                >
                    <RefuseIcon className={styles.decision_button_icon} />
                    Отказать
                </Button>
                <Button
                    className={classNames(styles.decision_button, {
                        [styles.decision_button_selected]: isApprove,
                    })}
                    onClick={handleApprove}
                >
                    <ApproveIcon className={styles.decision_button_icon} />
                    Одобрить
                </Button>
                <NavigateButton onClick={onNext} type='next' />
            </div>
            <Pagination
                arrayLength={artsLength}
                currentIndex={currentArtIndex}
                visibleNumbers={5}
                onPressNumber={onPressPaginationNumber}
            />
        </div>
    );
};

export default DecisionMaker;
