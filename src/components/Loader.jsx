import { RotateLoader } from 'react-spinners';
import css from './Loader.module.css';

export default function Loader() {
    return (
        <div className={css.container}>
            <RotateLoader
                size={20}
                color={'#535bf2'}
            />
        </div>
    );
}
