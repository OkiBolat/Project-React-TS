import { createStore, createEvent } from 'effector';
import MOCK_ART_WORKS from '../../../mock/mockArts';

const artWorksJSON = localStorage.getItem('artWorks');
const artWorks = artWorksJSON ? JSON.parse(artWorksJSON) : null;

const $artWorks = createStore(artWorks || MOCK_ART_WORKS);

export default $artWorks;
