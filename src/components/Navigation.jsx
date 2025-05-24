import { NavLink } from 'react-router';
import clsx from 'clsx';
import css from './Navigation.module.css';

const buildLinkClass = ({ isActive }) => {
    return clsx(css.link, isActive && css.active);
};

export default function Navigation() {
    return (
        <nav className={css.container}>
            <NavLink to="/" className={buildLinkClass}>
                Home
            </NavLink>
            <NavLink to="/movies" className={buildLinkClass}>
                Movies
            </NavLink>
        </nav>
    );
}
