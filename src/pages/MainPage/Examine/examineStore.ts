import { createStore, createEvent } from 'effector';
import MOCK_ART_WORKS from '../../../mock/mockArts';
import { Decision, ArtWork } from '../../../types/artWork';

const artWorksJSON = localStorage.getItem('artWorks');
const artWorks = artWorksJSON ? JSON.parse(artWorksJSON) : null;

const $artWorks = createStore(artWorks || MOCK_ART_WORKS);

type AddDecisionArguments = {
    id: number;
    decision: Decision;
};
export const addDecision = createEvent<AddDecisionArguments>();

$artWorks.on(addDecision, (artWorks, payload: AddDecisionArguments) => {
    return artWorks.map((artWork: ArtWork) =>
        artWork.id === payload.id ? { ...artWork, decision: payload.decision } : artWork
    );
});

$artWorks.watch((artWorks) => {
    localStorage.setItem('artWorks', JSON.stringify(artWorks));
    console.log(artWorks);
});

export default $artWorks;
