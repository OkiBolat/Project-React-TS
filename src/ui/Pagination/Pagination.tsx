import React from 'react';
import PagintationUtils from '../../libs/pagination';
import styles from './Pagination.module.scss';

type PaginationProps = {
    currentIndex: number;
    visibleNumbers: number;
    arrayLength: number;
    onMoveTo: (index: number) => void;
};

const Pagination: React.FC<PaginationProps> = ({
    currentIndex,
    visibleNumbers,
    arrayLength,
    onMoveTo,
}) => {
    return (
        <div className={styles.pagination_numbers}>
            {PagintationUtils.getPaginationNumbers(currentIndex, visibleNumbers, arrayLength).map(
                (paginationNumber, index) => {
                    const isDots = typeof paginationNumber === 'string';
                    const isActive = currentIndex === paginationNumber;
                    return (
                        <button
                            key={index}
                            className={[
                                isActive ? styles.active : '',
                                isDots ? styles.dots : '',
                            ].join(' ')}
                            onClick={() => onMoveTo(isDots ? currentIndex : paginationNumber)}
                        >
                            {isDots ? paginationNumber : paginationNumber + 1}
                        </button>
                    );
                }
            )}
        </div>
    );
};

export default Pagination;
