import { useState } from 'react';
import MovieList from '../components/MovieList.jsx';
import css from './Movies.module.css';

import movies from '../movies.json';

export default function Movies() {
    const [ movieList, setMovieList ] = useState(movies.results);

    const handleSubmit = (e) => {
        e.preventDefault();

        const form = e.target;
        const { search } = form.elements;

        console.log(search.value)

        form.reset();
    };

    return (
        <div className={css.container}>
            <form className={css.form} onSubmit={handleSubmit}>
                <input type="text" name="search" />
                <button type="submit">Search</button>
            </form>
            <MovieList list={movieList} />
        </div>
    );
}