import "DetailFilm.scss"

function DetailFilm(film)
{

    return(
        <div className="Detail">
            <div className="Content">
                <picture>
                    <img src={film.img} alt={film.titre} title={film.title}/>
                </picture>
                <div className="Top">
                    <div className="Score">
                        <p>{film.score}</p>
                    </div>
                    <div className="TitleDate">
                        <h2>{film.title}</h2>
                        <span>{film.date} - {film.genre} - {film.duree}</span>
                    </div>
                </div>
                <div  className="Synopsis">
                    <h2>Synopsis</h2>
                    <p>{film.sysnopsis}</p>
                </div>
            </div>
            <div className="Cast">
                <h2>Casting</h2>
                <div className="Actor">
                    <img src={actor.img} alt={actor.name}/>
                    <h4>{actor.name}</h4>
                    <span>{actor.role}</span>
                </div>
            </div>
        </div>
    )
}

export default  DetailFilm