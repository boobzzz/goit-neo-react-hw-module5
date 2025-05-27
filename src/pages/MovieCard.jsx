import { Link, NavLink, Outlet } from 'react-router';
import { useLocation, useParams } from 'react-router-dom';
import { useEffect, useState, useRef } from 'react';
import { FaAngleLeft } from 'react-icons/fa6';
import clsx from 'clsx';
import css from './MovieCard.module.css';

import { posterBaseUrl, defaultPoster } from '../services/api.js';
import movie from '../movie.json';

const linkClass = ({ isActive }) => {
    return clsx(css.link, isActive && css.active);
};

export default function MovieCard() {
    const [ movieDetails, setMovieDetails ] = useState(movie);
    const { movieId } = useParams();
    const location = useLocation();
    const locState = useRef(location.state);

    const getTitle = () => {
        return `${movieDetails.original_title} (${new Date(movieDetails.release_date).getFullYear()})`;
    }

    const getPosterUrl = () => {
        return movieDetails.poster_path
            ? `${posterBaseUrl}${movieDetails.poster_path}`
            : defaultPoster;
    }

    const getGenres = () => {
        return movieDetails.genres.reduce((acc, current, i, arr) => {
            return (
                i < arr.length - 1
                    ? acc + current.name + ', '
                    : acc + current.name
            );
        }, '');
    }

    useEffect(() => {}, []);

    return (
        <div className={css.container}>
            <Link
                to={locState.current ?? '/movies'}
                className={css.backBtn}
            >
                <FaAngleLeft />
            </Link>
            <div className={css.mainInfo}>
                <div>
                    <img
                        src={getPosterUrl()}
                        alt={`${movieDetails.original_title} poster`}
                    />
                </div>
                <div>
                    <h3 className={css.title}>{getTitle()}</h3>
                    <p>User Score: {movieDetails.vote_average.toFixed(0)}%</p>
                    <h4>Overview</h4>
                    <p>{movieDetails.overview}</p>
                    <h4>Genres</h4>
                    <p>{getGenres()}</p>
                </div>
            </div>
            <div className={css.additionalInfo}>
                <h4>Additional info</h4>
                <ul>
                    <li>
                        <NavLink to="cast" className={linkClass}>
                            Cast
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="reviews" className={linkClass}>
                            Reviews
                        </NavLink>
                    </li>
                </ul>
            </div>
            <Outlet />
        </div>
    );
}
