import './App.css'
import { useEffect, useState } from 'react'
import * as movieService from './services/movieService'
import MovieList from './components/MovieList'
import Form from './components/Form'
import SearchMovieList from './components/SearchMovieList'

const App = () => {
  const [error, setError] = useState('')
  const [movies, setMovies] = useState([])
  const [searchMovies, setSearchMovies] = useState([])
  const [value, setValue] = useState('')


  useEffect(() => {
    const fetchAllMovies = async () => {
      try {
        const moviesData = await movieService.index()
        setMovies(moviesData)
      } catch (error) {
        console.log(error)
        setError(error.message)
      }
    }

    fetchAllMovies()
  }, [])

  useEffect(() => {
    const fetchSearch = async () => {
      try {
        const moviesData = await movieService.search(value)
        setSearchMovies(moviesData)
      } catch (error) {
        console.log(error)
        setError(error.message)
      }
    }

    if (value) {
      fetchSearch()
    }

  }, [value])

  return (
    <>
      <main>
        <div className="search">
          <Form value={value} setValue={setValue} />

          {value ? <h1>Search: {value}</h1> : ''}
          {value ? <SearchMovieList searchMovies={searchMovies} /> : ''}

        </div>
        <div className="popular">

          <h1>Popular Movies</h1>

          {error && <p>{error}</p>}

          {movies.length === 0 && !error && (
            <p>Loading movies...</p>
          )}

          {movies.length > 0 && (
            <MovieList movies={movies} />
          )}
        </div>
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
