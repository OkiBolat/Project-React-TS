import { useEffect } from 'react';
import React from 'react';
import { ReactComponent as CloseIcon } from '../../assets/icons/close.svg';
import Button from '../Button';
import styles from './Modal.module.scss';

interface Props {
    children: React.ReactNode;
    buttonLabel: string;
    title: string;
    handleClickButton: () => void;
    handleCloseModal: () => void;
}

const Modal: React.FunctionComponent<Props> = ({
    buttonLabel,
    title,
    children,
    handleClickButton,
    handleCloseModal,
}) => {
    return (
        <div className={styles.modal_wrapper} onClick={handleCloseModal}>
            <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
                <CloseIcon className={styles.modal_close_icon} onClick={handleCloseModal} />
                <h1 className={styles.modal_title}>{title}</h1>
                <div className={styles.modal_content}>{children}</div>
                <Button variant='secondary' onClick={handleClickButton}>
                    {buttonLabel}
                </Button>
            </div>
        </div>
    );
};

export default Modal;
