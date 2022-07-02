import { useEffect, useState } from 'react';
import { useParams, Outlet, NavLink } from 'react-router-dom';
import { getMovieDetail } from '../../services/apiService';
import Loader from '../../components/Loader/Loader';
import Error from 'components/Error/Error';
import Title from 'components/Title/Title';
import MovieDetails from '../../components/MovieDetails/MovieDetails';
import s from './MovieDetailsPage.module.css';

export default function MovieDetailsPage() {
    const { id } = useParams();
    const [movie, setMovie] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        setLoading(true);
        setError(false);

        getMovieDetail(id)
            .then(res => {
                setMovie(res);
                setLoading(false);
            })
            .catch(error => {
                setError(true);
                setLoading(false);
            });
    }, [id]);

    return (
        <main>
            <Title title={'Film Details'}></Title>

            {loading && <Loader />}
            {error && <Error />}

            {movie && <MovieDetails movieData={movie} />}

            {!error && (
                <div className={s.info}>
                    <p className={s.infoTitle}>Additional information:</p>
                    <ul className={s.list}>
                        <li className={s.link}>
                            <NavLink to="cast">Cast</NavLink>
                        </li>
                        <li className={s.link}>
                            <NavLink to="reviews">Review</NavLink>
                        </li>
                    </ul>
                </div>
            )}

            {!error && <Outlet />}
        </main>
    );
}
