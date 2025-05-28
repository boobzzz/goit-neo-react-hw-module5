import { castBaseUrl, fetchMovieCast } from '../services/api.js';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Loader from '../components/Loader.jsx';
import ErrorMessage from '../components/ErrorMessage.jsx';
import noImage from '../assets/img/no-image.png';
import css from './Cast.module.css';

export default function Cast() {
    const [ castList, setCastList ] = useState([]);
    const [ loading, setLoading ] = useState(false);
    const [ error, setError ] = useState('');

    const { movieId } = useParams();

    const getProfileImg = (profileImgPath) => {
        return profileImgPath
            ? `${castBaseUrl}${profileImgPath}`
            : noImage;
    }

    async function getMovieCast() {
        try {
            setError('');
            setLoading(true);
            const cast = await fetchMovieCast(movieId);
            setCastList(cast);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        getMovieCast();
    }, []);

    return (
        <>
            {castList.length > 0 && <ul className={css.container}>
                {castList.map(castMember => (
                    <li key={castMember.id}>
                        <div className={css.image}>
                            <img
                                src={getProfileImg(castMember.profile_path)}
                                alt="Cast member"
                            />
                        </div>
                        <div>
                            <p>
                                Actor: <span>{castMember.name}</span>
                            </p>
                            <p>
                                Character: <span>{castMember.character}</span>
                            </p>
                        </div>
                    </li>
                ))}
            </ul>}
            {loading && <Loader />}
            {error && <ErrorMessage message={error} />}
        </>
    );
}