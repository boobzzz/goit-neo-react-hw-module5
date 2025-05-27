import { useState, useEffect } from 'react';
import MovieList from '../components/MovieList.jsx';

import movies from '../movies.json';

export default function Home() {
    const [ movieList, setMovieList ] = useState(movies.results);

    useEffect(() => {}, []);

    return (
        <>
            <h2>Trending today</h2>
            <MovieList list={movieList} />
        </>
    );
}