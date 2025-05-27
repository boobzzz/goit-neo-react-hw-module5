import { NavLink } from 'react-router';
import clsx from 'clsx';
import css from './Navigation.module.css';

const linkClass = ({ isActive }) => {
    return clsx(css.link, isActive && css.active);
};

export default function Navigation() {
    return (
        <nav className={css.container}>
            <NavLink to="/" className={linkClass}>
                Home
            </NavLink>
            <NavLink to="/movies" className={linkClass}>
                Movies
            </NavLink>
        </nav>
    );
}
