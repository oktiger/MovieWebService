import PropTypes from "prop-types"
import {Link} from "react-router-dom"

function MovieSon({coverImg, title, summary, genres, id }) {
    return(
        <div>
                    <img src={coverImg} alt={title}></img>
                        <h2>
                            <Link to={`/movie/${id}`}>{title}</Link>
                        </h2>
                    <p>{summary}</p>
                    <ul>
                        {genres.map((g) => (
                        <li key={g}>{g}</li>
                        ))}
                    </ul>
                    </div>
    )
}

MovieSon.propTypes = {
    id: PropTypes.number.isRequired,
    coverImg: PropTypes.string.isRequired, 
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
}
export default MovieSon