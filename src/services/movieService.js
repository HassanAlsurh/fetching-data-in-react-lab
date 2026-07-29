// import.meta.env.VITE_TMDB_TOKEN
const BASE_URL = 'https://api.themoviedb.org/3'
const index = async () => {
    const res = await fetch(`${BASE_URL}/movie/popular`, {
        headers: {
            Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`,
            Accept: 'application/json',
        },
    })

    const data = await res.json()

    if (!res.ok) {
        throw new Error(`${res.status}: ${data.status_message}`)
    }

    return data.results
}
console.log(index());

const search = async (query) => {
    const res = await fetch(`${BASE_URL}/search/movie?query=${encodeURIComponent(query)}`, {
        headers: {
            Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`,
            Accept: 'application/json',
        },
    })
    const data = await res.json()

    if (!res.ok) {
        throw new Error(`${res.status}: ${data.status_message}`)
    }

    return data.results
    // Make a request to:
    // `${BASE_URL}/search/movie?query=${encodeURIComponent(query)}`
}



export {
    index,
    search
}
