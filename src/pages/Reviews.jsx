import { fetchMovieReviews } from '../services/api.js';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Loader from '../components/Loader.jsx';
import ErrorMessage from '../components/ErrorMessage.jsx';
import css from './Reviews.module.css';

export default function Reviews() {
    const [ reviewsList, setReviewsList ] = useState([]);
    const [ loading, setLoading ] = useState(false);
    const [ error, setError ] = useState('');

    const { movieId } = useParams();

    async function getMovieReviews() {
        try {
            setError('');
            setLoading(true);
            const reviews = await fetchMovieReviews(movieId);
            setReviewsList(reviews);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        getMovieReviews();
    }, []);

    return (
        <>
            {reviewsList.length > 0
                ? <ul className={css.container}>
                    {reviewsList.map(review => (
                        <li
                            key={review.id}
                            className={css.item}
                        >
                            <h4>{review.author}</h4>
                            <p>{review.content}</p>
                        </li>
                    ))}
                </ul>
                : <p>No reviews found</p>}
            {loading && <Loader />}
            {error && <ErrorMessage message={error} />}
        </>

    );
}