import { useEffect, useState } from 'react';
import css from './Reviews.module.css';

import reviews from '../reviews.json';

export default function Reviews() {
    const [ reviewsList, setReviewsList ] = useState(reviews.results);

    useEffect(() => {}, []);

    return (
        <ul className={css.container}>
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
    );
}