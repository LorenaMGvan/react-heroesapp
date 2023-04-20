import React, { useMemo } from 'react';
import { HeroCard } from './HeroCard';
import { getHeroesByPublisher } from '../helpers';

export const HeroList = ({ publisher }) => {
    const heroes = useMemo( () => getHeroesByPublisher(publisher) , [publisher]); 

    return (
        <div className='row justify-content-center'>
                {
                    heroes.map( item => (
                        <HeroCard 
                            key={ item.id }
                            { ...item }/>
                    ))
                }
        </div>
    )
}