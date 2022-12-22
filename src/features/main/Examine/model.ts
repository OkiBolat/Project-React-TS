import { createStore, createEvent } from 'effector';
import MOCK_ART_WORKS from '../../../mock/mockArts';
import { Decision, ArtWork } from '../../../libs/types/artWork';
import { LocalStorage } from '../../../libs/constants/localStorage';
import { checkIsAuth } from '../../auth/Login/models/auth-model';

const artWorksJSON = localStorage.getItem(LocalStorage.ART_WORKS);
const artWorks = artWorksJSON ? JSON.parse(artWorksJSON) : null;

const $artWorks = createStore<ArtWork[]>(artWorks || MOCK_ART_WORKS);

type AddDecisionProps = {
    id: number;
    decision: Decision;
};

export const addDecision = createEvent<AddDecisionProps>();

$artWorks.on(addDecision, (artWorks, payload) => {
    checkIsAuth()
    const index = artWorks.findIndex((artWork) => artWork.id === payload.id);
    if (typeof index !== 'undefined') {
        const copy = JSON.parse(JSON.stringify(artWorks));
        copy[index] = { ...copy[index], decision: payload.decision };
        return copy;
    }

    return artWorks;
});

$artWorks.watch((artWorks) => {
    localStorage.setItem(LocalStorage.ART_WORKS, JSON.stringify(artWorks));
    console.log(artWorks);
});

export default $artWorks;
