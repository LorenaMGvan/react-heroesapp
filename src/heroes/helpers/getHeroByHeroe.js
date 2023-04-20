import { heroes } from '../data/heroes';

export const getHeroById = ( heroeId ) => {
    return heroes.find( item => item.id === heroeId );
}