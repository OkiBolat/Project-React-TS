import React, { useState } from 'react';
import Button from '../../../../components/Button';
import NavigateButton from '../../../../components/NavigateButton';
import PagintationUtils from '../../../../utils/paginationUtils';
import { ReactComponent as ApproveIcon } from '../../../../assets/icons/approve.svg';
import { ReactComponent as RefuseIcon } from '../../../../assets/icons/refuse.svg';
import styles from './DecisionMaker.module.scss';
import { Decision } from '../../../../assets/types/artWork';
import Modal from '../../../../components/Modal';
import useModal from '../../../../hooks/useModal';

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
    handleRefuse: (artId: number, reason: string) => void;
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
    const [refuseReason, setRefuseReason] = useState('');
    const { show, handleShowModal, handleCloseModal } = useModal();

    const handleTextarea = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setRefuseReason(e.target.value);
    };

    const sendRefuseReason = () => {
        handleRefuse(artId, refuseReason);
        handleCloseModal();
    };

    const isRefuse = artDecision?.value === false;
    const isApprove = artDecision?.value === true;

    return (
        <div className={styles.container}>
            {show && (
                <Modal
                    title='Причина отказа'
                    buttonLabel='Отправить'
                    handleClickButton={sendRefuseReason}
                    handleCloseModal={handleCloseModal}
                >
                    <textarea
                        onChange={handleTextarea}
                        value={refuseReason}
                        className={styles.modal_textarea}
                    ></textarea>
                </Modal>
            )}

            <div className={styles.image_wrapper}>
                <img className={styles.image} src={artUrl} />
            </div>

            <div className={styles.control_buttons}>
                <NavigateButton onClick={handlePrev} type='prev' />
                <Button
                    className={[
                        styles.decision_button,
                        isRefuse ? styles.decision_button_selected : '',
                    ].join(' ')}
                    onClick={handleShowModal}
                >
                    <RefuseIcon className={styles.decision_button_icon} />
                    Отказать
                </Button>
                <Button
                    className={[
                        styles.decision_button,
                        isApprove ? styles.decision_button_selected : '',
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
                    (paginationNumber, index) => {
                        const isDots = typeof paginationNumber === 'string';
                        const isActive = currentArtIndex === paginationNumber;
                        return (
                            <button
                                key={index}
                                className={[
                                    isActive ? styles.active : '',
                                    isDots ? styles.dots : '',
                                ].join(' ')}
                                onClick={handleMoveTo(isDots ? currentArtIndex : paginationNumber)}
                            >
                                {isDots ? paginationNumber : paginationNumber + 1}
                            </button>
                        );
                    }
                )}
            </div>
        </div>
    );
};

export default DecisionMaker;
