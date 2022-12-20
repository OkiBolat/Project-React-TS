import { useStore } from 'effector-react';
import React from 'react';
import { ArtWork } from '../../../types/artWork';
import ArtInformation from './ArtInformation';
import DecisionMaker from './DecisionMaker';
import styles from './Examine.module.scss';
import $artWorks from './examineStore';

interface IExamineProps {
    children?: React.ReactNode;
}

const Examine: React.FC<IExamineProps> = (props) => {
    const activeId = 1;
    const artWorks: ArtWork[] = useStore($artWorks);

    return (
        <div className={['container', styles.container].join(' ')}>
            {artWorks.map(
                (artWork) =>
                    artWork.id === activeId && (
                        <>
                            <ArtInformation data={artWork} />
                            <DecisionMaker artUrl={artWork.url} />
                        </>
                    )
            )}
        </div>
    );
};

export default Examine;
