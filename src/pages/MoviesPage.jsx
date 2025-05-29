import { searchMovies } from '../services/api.js';
import { useSearchParams } from 'react-router-dom';
import {useEffect, useState} from 'react';
import MovieList from '../components/MovieList.jsx';
import Loader from '../components/Loader.jsx';
import ErrorMessage from '../components/ErrorMessage.jsx';
import toast, { Toaster } from 'react-hot-toast';
import css from './MoviesPage.module.css';

const PARAMS_KEY = 'query';

export default function MoviesPage() {
    const [ movieList, setMovieList ] = useState(null);
    const [ loading, setLoading ] = useState(false);
    const [ error, setError ] = useState('');

    const [ searchParams, setSearchParams ] = useSearchParams();

    async function getMovies(query) {
        try {
            setError('');
            setLoading(true);
            const movies = await searchMovies(query);
            setMovieList(movies);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    }

    const updateSearchParams = (value) => {
        const updatedParams = new URLSearchParams(searchParams);
        updatedParams.set(PARAMS_KEY, value);
        setSearchParams(updatedParams);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        const { search } = form.elements;

        updateSearchParams(search.value);

        form.reset();
    };

    useEffect(() => {
        if (searchParams.get(PARAMS_KEY)) {
            const getData = async () => {
                await getMovies(searchParams.get(PARAMS_KEY));
            };
            getData();
        }
    }, [searchParams]);

    useEffect(() => {
        if (movieList?.length === 0) {
            toast.error('No movies found');
        }
    }, [movieList]);

    return (
        <div className={css.container}>
            <form className={css.form} onSubmit={handleSubmit}>
                <input type="text" name="search" />
                <button type="submit">Search</button>
            </form>
            {movieList?.length > 0 && <MovieList list={movieList}/>}
            {loading && <Loader />}
            {error && <ErrorMessage message={error} />}
            <Toaster />
        </div>
    );
}