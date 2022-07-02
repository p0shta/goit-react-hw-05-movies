import PropTypes from 'prop-types';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { useState } from 'react';
import s from './SearchForm.module.css';

export default function SearchForm({ handleSubmit }) {
    const [query, setQuery] = useState('');

    const onChange = e => {
        setQuery(e.target.value);
    };

    const onSubmit = e => {
        e.preventDefault();

        if (query.trim() === '') {
            Notify.warning('Please. Write your search query!');
            return;
        }

        handleSubmit(query);
        setQuery('');
    };
    return (
        <form onSubmit={onSubmit} className={s.form}>
            <input type="text" className={s.input} name="query" value={query} onChange={onChange} />
            <button type="submit" className={s.btn}>
                Search
            </button>
        </form>
    );
}

SearchForm.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
};
