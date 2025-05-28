import { fetchMovies } from '../services/api.js';
import { useState, useEffect } from 'react';
import MovieList from '../components/MovieList.jsx';
import Loader from '../components/Loader.jsx';
import ErrorMessage from '../components/ErrorMessage.jsx';

export default function HomePage() {
    const [ movieList, setMovieList ] = useState([]);
    const [ loading, setLoading ] = useState(false);
    const [ error, setError ] = useState('');

    async function getMovies() {
        try {
            setError('');
            setLoading(true);
            const movies = await fetchMovies();
            setMovieList(movies);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        getMovies();
    }, []);

    return (
        <>
            <h2>Trending today</h2>
            {movieList.length > 0 && <MovieList list={movieList}/>}
            {loading && <Loader />}
            {error && <ErrorMessage message={error} />}
        </>
    );
}