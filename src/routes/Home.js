import { useState, useEffect } from 'react';
import MovieSon from '../components/MovieSon'

function Home(){

    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([])
    const getMovies = async () => {
        const json = await (
            await fetch(
                `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`
            )
        ).json()
        setMovies(json.data.movies)
        setLoading(false)
    }
    useEffect(() => {
       getMovies()
    }, [])
   
    return (
        <div>
            {loading ? (
            <h1>Loding ...</h1> 
            ) : (
            <div>
                {movies.map((movie) => (
                    // coverImg는 단순 prop이므로 원하느대로 이름을 지을 수 있으나 내용물은 단디 적어야함
                <MovieSon 
                key={movie.id} // 키값 꼭 넣어줘야해.
                // 키값은 map안에서 component들을 render할 때만 사용
                id={movie.id}
                coverImg={movie.medium_cover_image}
                title={movie.title}
                summary={movie.summary}
                genres={movie.genres}
                />
                ))}
                </div>
                )}
        </div>
    )
}

export default Home