import React, { useEffect } from 'react';
import { useStore } from 'effector-react';
import { ArtWork } from '../../../assets/types/artWork';
import ArtInformation from './ArtInformation';
import DecisionMaker from './DecisionMaker';
import styles from './Examine.module.scss';
import $artWorks, { addDecision } from './model';
import usePagination from '../../../hooks/usePagination';

interface IExamineProps {
    children?: React.ReactNode;
}

const Examine: React.FC<IExamineProps> = (props) => {
    const artWorks: ArtWork[] = useStore($artWorks);
    const { currentIndex, moveNext, movePrev, moveTo } = usePagination(0, artWorks.length);

    const handleApproveArtWork = (id: number) => () => {
        addDecision({ id, decision: { value: true } });
    };

    const handleRefuseArtWork = (id: number, reason: string) => {
        addDecision({ id, decision: { value: false, reason } });
    };

    return (
        <div className={['container', styles.container].join(' ')}>
            <ArtInformation data={artWorks[currentIndex]} />
            <DecisionMaker
                artId={artWorks[currentIndex].id}
                artUrl={artWorks[currentIndex].url}
                artDecision={artWorks[currentIndex].decision}
                artsLength={artWorks.length}
                currentArtIndex={currentIndex}
                handleNext={moveNext}
                handlePrev={movePrev}
                handleMoveTo={moveTo}
                handleApprove={handleApproveArtWork}
                handleRefuse={handleRefuseArtWork}
            />
        </div>
    );
};

export default Examine;
