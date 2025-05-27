import { useEffect, useState } from 'react';
import css from './Cast.module.css';

import { castBaseUrl } from '../services/api.js';
import noImage from '../assets/img/no-image.png';
import cast from '../cast.json';

export default function Cast() {
    const [ castList, setCastList ] = useState(cast.cast);

    const getProfileImg = (profileImgPath) => {
        return profileImgPath
            ? `${castBaseUrl}${profileImgPath}`
            : noImage;
    }

    useEffect(() => {}, []);

    return (
        <ul className={css.container}>
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
        </ul>
    );
}