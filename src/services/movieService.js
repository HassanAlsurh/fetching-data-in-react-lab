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

    console.log('Index Return: ', data.results);

    return data.results
}

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
    console.log('Search retirn: ', data.results);

    return data.results
}

export {
    index,
    search
}
