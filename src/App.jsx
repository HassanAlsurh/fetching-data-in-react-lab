import { useEffect, useState } from 'react'
import * as movieService from './services/movieService'
import MovieList from './components/MovieList'


const App = () => {
  const [error, setError] = useState('')
  const [movies, setMovies] = useState([])
  useEffect(() => {
    const fetchAllMovies = async () => {
      try {
        const moviesData = await movieService.index()
        console.log(moviesData)
        setMovies(moviesData)
      } catch (error) {
        console.log(error)
        setError(error.message)
      }
    }

    fetchAllMovies()
  }, [])

  return (
    <>
      <main>
        <h1>Popular Movies</h1>

        {error && <p>{error}</p>}

        {movies.length === 0 && !error && (
          <p>Loading movies...</p>
        )}

        {movies.length > 0 && (
          <MovieList movies={movies} />
        )}

      </main>
      <footer>
        <hr />
        <p>
          This product uses the TMDB API but is not endorsed or certified by TMDB.
        </p>
      </footer>

    </>
  )

}

export default App
