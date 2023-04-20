import { Navigate, useNavigate, useParams } from "react-router-dom"
import { getHeroById } from "../helpers";
import { useMemo } from "react";

export const HeroPage = () => {

    const { heroeId , ...rest} = useParams();
    const navigate = useNavigate();

    // cada que el heroeId cambie, se dispara el callback del useMEmo
    // la dependencia es el  heoreID
    const hero = useMemo(() => getHeroById( heroeId ), [heroeId]);

    const onRegresar = () => {
        navigate(-1);
    }

    if( !hero ) {
        return <Navigate to="/marvel"/>
    }

    console.log(hero);
    
    return(
        <div className="row mt-5">
            <div className="col-4">
                <img 
                    src={`/assets/heroes/${ heroeId }.jpg`} 
                    alt={ hero.superhero } 
                    className="img-thumbnail"/>
            </div>

            <div className="col-8">
                <h3>{ hero.superhero }</h3>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item"><b>Alter ego: </b>{ hero.alter_ego }</li>
                    <li className="list-group-item"><b>Publisher: </b>{ hero.publisher }</li>
                    <li className="list-group-item"><b>First aparence: </b>{ hero.first_appearance }</li>
                </ul>

                <h5 className="mt-3">Characters</h5>
                <p>{ hero.characters }</p>

                <button 
                    className="btn btn-outline-primary"
                    onClick={ onRegresar }>
                    Regresar
                </button>
            </div>
        </div>
    )
}