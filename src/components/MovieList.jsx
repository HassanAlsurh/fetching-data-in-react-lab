import MovieCard from './MovieCard'

const MovieList = ({ movies }) => {
  return (
    <section className="movie-list-row">
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          movie={movie}
        />
      ))}
    </section>
  )
}

export default MovieList