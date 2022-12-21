import React, { useEffect } from 'react';
import { useStore } from 'effector-react';
import { ArtWork } from '../../../libs/types/artWork';
import ArtInformation from './ArtInformation';
import DecisionMaker from './DecisionMaker';
import styles from './Examine.module.scss';
import $artWorks, { addDecision } from './model';
import usePagination from '../../../hooks/usePagination';

type ExamineProps = {
    children?: React.ReactNode;
};

const Examine: React.FC<ExamineProps> = (props) => {
    const artWorks: ArtWork[] = useStore($artWorks);
    const { currentIndex, moveNext, movePrev, moveTo } = usePagination(0, artWorks.length);

    return (
        <div className={['container', styles.container].join(' ')}>
            <ArtInformation data={artWorks[currentIndex]} />
            <DecisionMaker
                art={artWorks[currentIndex]}
                artsLength={artWorks.length}
                currentArtIndex={currentIndex}
                onNext={moveNext}
                onPrev={movePrev}
                onMoveTo={moveTo}
            />
        </div>
    );
};

export default Examine;
