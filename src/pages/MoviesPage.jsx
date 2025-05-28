import { searchMovies } from '../services/api.js';
import { useSearchParams } from 'react-router-dom';
import { useState } from 'react';
import MovieList from '../components/MovieList.jsx';
import Loader from '../components/Loader.jsx';
import ErrorMessage from '../components/ErrorMessage.jsx';
import toast, { Toaster } from 'react-hot-toast';
import css from './MoviesPage.module.css';

export default function MoviesPage() {
    const [ movieList, setMovieList ] = useState([]);
    const [ loading, setLoading ] = useState(false);
    const [ error, setError ] = useState('');

    const [searchParams, setSearchParams] = useSearchParams();

    async function getMovies(query) {
        try {
            setError('');
            setLoading(true);
            const movies = await searchMovies(query);
            if (movies.length === 0) {
                toast.error('No movies found');
            }
            setMovieList(movies);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    }

    const updateSearchParams = (value) => {
        const updatedParams = new URLSearchParams(searchParams);
        updatedParams.set('query', value);
        setSearchParams(updatedParams);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        const { search } = form.elements;

        await getMovies(search.value);
        updateSearchParams(search.value);

        form.reset();
    };

    return (
        <div className={css.container}>
            <form className={css.form} onSubmit={handleSubmit}>
                <input type="text" name="search" />
                <button type="submit">Search</button>
            </form>
            {movieList.length > 0 && <MovieList list={movieList}/>}
            {loading && <Loader />}
            {error && <ErrorMessage message={error} />}
            <Toaster />
        </div>
    );
}