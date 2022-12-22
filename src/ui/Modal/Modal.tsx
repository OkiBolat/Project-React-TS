import React from 'react';
import { ReactComponent as CloseIcon } from '../../assets/icons/close.svg';
import Button from '../Button';
import styles from './Modal.module.scss';

type ModalProps = {
    children: React.ReactNode;
    buttonLabel: string;
    title: string;
    onClickButton: () => void;
    onCloseModal: () => void;
};

const Modal: React.FC<ModalProps> = ({
    buttonLabel,
    title,
    children,
    onClickButton,
    onCloseModal,
}) => {
    return (
        <div className={styles.modal_wrapper} onClick={onCloseModal}>
            <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
                <CloseIcon className={styles.modal_close_icon} onClick={onCloseModal} />
                <h1 className={styles.modal_title}>{title}</h1>
                <div className={styles.modal_content}>{children}</div>
                <Button variant='secondary' onClick={onClickButton}>
                    {buttonLabel}
                </Button>
            </div>
        </div>
    );
};

export default Modal;
