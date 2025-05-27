import { Link, useLocation } from 'react-router-dom';
import css from './MovieList.module.css';
import PropTypes from 'prop-types';

export default function MovieList({ list }) {
    const location = useLocation();

    return (
        <ul>
            {list.map(movie => (
                <li key={movie.id} className={css.item}>
                    <Link
                        to={`movies/${movie.id}`}
                        state={location}
                    >
                        {movie.title}
                    </Link>
                </li>
            ))}
        </ul>
    );
}

MovieList.propTypes = {
    list: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
        title: PropTypes.string
    }))
};
