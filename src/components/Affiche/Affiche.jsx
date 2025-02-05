import "Affiche.scss"

function Affiche(film)
{

    return(
        <div className="movie">
            <picture>
                <img src={film.img} alt={film.titre} title={film.title}/>
            </picture>
            <figcaption>
                <div className="Score">
                    <p>{film.score}</p>
                </div>
                <h5>{film.title}</h5>
                <p>{film.date}</p>
            </figcaption>
        </div>
    )
}

export default  Affiche