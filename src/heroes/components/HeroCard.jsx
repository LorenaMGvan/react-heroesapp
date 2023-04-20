import React from 'react';
import {Link} from 'react-router-dom';

const DescriptionHeroe = ({ alter_ego, characters}) => {
    return ( alter_ego === characters ) 
            ? (<></>) 
            : <p>{ characters }</p> ;
}

export const HeroCard = ({ 
    id,
    superhero,
    publisher,
    alter_ego,
    first_apparence,
    characters,

}) => {

    const heroImageUrl = `/assets/heroes/${ id }.jpg`;
    const charactersByHero =( <p>{ characters }</p>);

    return (
        <div className="col-4 mb-3">
            <div className="card">
                <div className="row no-gutters">
                    <div className="col-4">
                        <img src={ heroImageUrl } className="card-img animate__animated animate__fadeInUp" alt={superhero} />
                    </div>

                    <div className="col-8">
                        <div className="card-body">
                            <h5 className='card-title'>{ superhero }</h5>
                            <p className='card-text'>{ alter_ego }</p>
                            {
                                // ( alter_ego !== characters ) && charactersByHero
                                // en lugar de hacer esto, creamos y usamos el componente

                                <DescriptionHeroe characters={ characters } alter_ego={ alter_ego } />
                            }
                            <p className='card-text'>
                                <small className='text-muted'>
                                    { first_apparence }
                                </small>
                            </p>

                            <Link to={`/hero/${ id }`}>
                                más
                            </Link>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}