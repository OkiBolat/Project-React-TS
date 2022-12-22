import React from 'react';
import classNames from 'classnames';
import PagintationUtils from '../../libs/pagination';
import styles from './Pagination.module.scss';

type PaginationProps = {
    currentIndex: number;
    visibleNumbers: number;
    arrayLength: number;
    onPressNumber: (index: number) => void;
};

const Pagination: React.FC<PaginationProps> = ({
    currentIndex,
    visibleNumbers,
    arrayLength,
    onPressNumber,
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
                            className={classNames({
                                [styles.active]: isActive,
                                [styles.isDots]: isDots,
                            })}
                            onClick={() => onPressNumber(isDots ? currentIndex : paginationNumber)}
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
