import PropTypes from 'prop-types';
import { NavLink, useLocation } from 'react-router-dom';
import s from './ListItem.module.css';

export default function ListItem({ movie }) {
    const { release_date, title } = movie;
    const date = release_date.slice(0, 4);

    let { pathname, search } = useLocation();
    const currentPath = pathname === '/' ? `movies/${movie.id}` : `${movie.id}`;

    return (
        <li className={s.item}>
            <NavLink to={currentPath} state={{ from: `${pathname}${search}` }} className={s.link}>
                {title} ({date})
            </NavLink>
        </li>
    );
}

ListItem.propTypes = {
    movie: PropTypes.shape({
        release_date: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
    }),
};
