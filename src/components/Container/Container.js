import PropTypes from 'prop-types';
import s from '../Container/Container.module.css';

export default function Container({ children }) {
    return <div className={s.container}>{children}</div>;
}

Container.propTypes = {
    children: PropTypes.arrayOf(PropTypes.node).isRequired,
};
