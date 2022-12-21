import { useState } from 'react';

const useModal = () => {
    const [show, setShow] = useState(false);

    const handleShowModal = () => setShow(true);
    const handleCloseModal = () => setShow(false);

    return { show, handleCloseModal, handleShowModal };
};

export default useModal;
