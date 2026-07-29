const MovieCard = ({ movie }) => {
    return (
        <article>
            {movie.poster_path ? (
                <img
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt={`${movie.title} poster`}
                />
            ) : (
                <p>No poster available</p>
            )}



            <h2>{movie.title}</h2>

            <p>
                Release date: {movie.release_date/* Display the release date */}
            </p>

            <p>
                Rating: {movie.vote_average/* Display the vote average */}
            </p>

            <p>
                {movie.overview/* Display the overview */}
            </p>
        </article>
    )
}

export default MovieCard
