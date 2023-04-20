import { heroes } from '../data/heroes';

export const getHeroesByPublisher = ( publisher ) => {
    const validaPublishers = ['DC Comics', 'Marvel Comics'];

    if( !validaPublishers.includes( publisher) ) {
        throw new Error(`${ publisher}  no es un  grupo válido`);
    }

    // si existe
    return heroes.filter( item => item.publisher === publisher );


} 
