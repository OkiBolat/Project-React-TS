import { useState } from 'react';

export type ModalHookReturnProps = {
    show: () => void;
    hide: () => void;
    isVisible: boolean;
};

const useModal = (): ModalHookReturnProps => {
    const [isVisible, setIsVisible] = useState(false);

    const show = () => setIsVisible(true);
    const hide = () => setIsVisible(false);

    return { show, hide, isVisible };
};

export default useModal;
