import PropTypes from 'prop-types';

export default function ErrorMessage({ message }) {
    return (
        <h1>Error: {message}</h1>
    );
}

ErrorMessage.propTypes = {
    message: PropTypes.string.isRequired
};
