import React from 'react';
import { useStore } from 'effector-react';
import { ArtWork } from '../../../assets/types/artWork';
import ArtInformation from './ArtInformation';
import DecisionMaker from './DecisionMaker';
import styles from './Examine.module.scss';
import $artWorks from './examineStore';
import usePagination from '../../../hooks/usePagination';

interface IExamineProps {
    children?: React.ReactNode;
}

const Examine: React.FC<IExamineProps> = (props) => {
    const artWorks: ArtWork[] = useStore($artWorks);
    const { currentIndex, moveNext, movePrev, moveTo } = usePagination(0, artWorks.length);

    return (
        <div className={['container', styles.container].join(' ')}>
            <ArtInformation data={artWorks[currentIndex]} />
            <DecisionMaker
                artUrl={artWorks[currentIndex].url}
                artsLength={artWorks.length}
                currentArtIndex={currentIndex}
                handleNext={moveNext}
                handlePrev={movePrev}
                handleMoveTo={moveTo}
            />
        </div>
    );
};

export default Examine;
