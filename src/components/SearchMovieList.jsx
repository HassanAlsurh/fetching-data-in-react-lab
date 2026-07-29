
import SearchMovieCard from "./searchMovieCard"

const SearchMovieList = ({ searchMovies }) => {
  return (
    <section className="movie-search-list-row">
      {searchMovies.map((movie) => (
        <SearchMovieCard
          key={movie.id}
          movie={movie}
        />
      ))}
    </section>
  )
}

export default SearchMovieList