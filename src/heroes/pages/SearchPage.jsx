import { useLocation, useNavigate } from 'react-router-dom';
import queryString from 'query-string';
import { useForm } from '../../hooks/useForm';
import { HeroCard } from '../components';
import { getHeroByName } from '../helpers';



export const SearchPage = () => {

    const navigate = useNavigate();
    const location = useLocation();
    
    const { q = '' } = queryString.parse( location.search );
    const heroes = getHeroByName(q);

    const showSearch = ( q.length === 0);
    const showError = ( q.length > 0) && heroes.lentgh === 0;


    const { searchText , onInputChange } = useForm({
        searchText: q
    });

    const onSearchSubmit = (event) => {
        event.preventDefault();

        if ( searchText.trim().length <= 1 ) return;

        navigate(`?q=${ searchText.toLowerCase().trim() }`);

        console.log({ searchText });
    }

    return(
        <>
        <h1>Search</h1>
        <hr />
        <div className="row">
        <div className="col-5">
            <h4>Buscando</h4>
            <hr />
            <form onSubmit={ onSearchSubmit }>
                <input type="text"
                placeholder="Search a hero"
                autoComplete="off"
                className="form-control"
                value={ searchText}
                name="searchText"
                onChange={ onInputChange }
                 />

                <button className="btn btn-outline-primary mt-1">
                    Search
                </button>
            </form>
        </div>

        <div className="col-7">
            <h4>Resultados</h4>
            <hr />
            {
                // ( q === '')
                // ? <div className='alert alert-primary'>Search a hero</div>
                // : ( heroes.length === 0 )
                //     && <div className="alert alert-danger"> No hay resultados para el término <b>{q}</b></div>
            }

            <div className='alert alert-primary' style={{ display: showSearch ? 'none': '' }}>
                Search a hero
            </div>

            <div className="alert alert-danger" style={{ display: showError ? '': 'none' }}>
                No hay resultados para el término <b>{q}</b>
            </div>


            {
                heroes.map( item => (
                    <HeroCard key={ item.id } {...item} />
                ) )
            }

        </div>
        </div>
        </>
    )
}