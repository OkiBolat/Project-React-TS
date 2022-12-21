import React, { useState } from 'react';
import Modal from '../../../../ui/Modal';
import { ModalHookReturnProps } from '../../../../hooks/useModal';
import { addDecision } from '../model';
import styles from './DecisionMaker.module.scss';

type RefuseModalProps = {
    modal: ModalHookReturnProps;
    artId: number;
};

const RefuseModal: React.FC<RefuseModalProps> = ({ modal, artId }) => {
    const [refuseReason, setRefuseReason] = useState('');

    const handleTextarea = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setRefuseReason(e.target.value);
    };

    const sendRefuseReason = () => {
        addDecision({ id: artId, decision: { value: false, reason: refuseReason } });
        modal.hide();
    };

    return modal.isVisible ? (
        <Modal
            title='Причина отказа'
            buttonLabel='Отправить'
            onClickButton={sendRefuseReason}
            onCloseModal={modal.hide}
        >
            <textarea
                onChange={handleTextarea}
                value={refuseReason}
                className={styles.modal_textarea}
            ></textarea>
        </Modal>
    ) : null;
};

export default RefuseModal;
