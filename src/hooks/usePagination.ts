import React, { useState } from 'react';

const usePagination = (defaultIndex: number, arrayLength: number) => {
    const [currentIndex, setCurrentIndex] = useState(defaultIndex);

    const moveNext = () =>
        setCurrentIndex((prevIndex) => (prevIndex + 1 >= arrayLength ? 0 : prevIndex + 1));

    const movePrev = () =>
        setCurrentIndex((prevIndex) => (prevIndex - 1 < 0 ? arrayLength - 1 : prevIndex - 1));

    const moveTo = (index: number) =>
        setCurrentIndex((prevIndex) => (index < 0 || index >= arrayLength ? prevIndex : index));

    return { currentIndex, moveNext, movePrev, moveTo };
};

export default usePagination;
