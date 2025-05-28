import axios from 'axios';

export const posterBaseUrl = 'https://image.tmdb.org/t/p/w300';
export const castBaseUrl = 'https://image.tmdb.org/t/p/w200';
export const defaultPoster =
    'https://dl-media.viber.com/10/share/2/long/vibes/icon/image/0x0/95e0/5688fdffb84ff8bed4240bcf3ec5ac81ce591d9fa9558a3a968c630eaba195e0.jpg';

axios.defaults.headers.common['Authorization'] = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MmRkNjVlOGZhMjQ3ZmFlMmVjZjc5YTk3ZjU0YmQ0YSIsIm5iZiI6MTU3NjQyODA0Ny4wMDQsInN1YiI6IjVkZjY2MjBmMGQxZTdmMDAxNTcxZjEyNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nD3K3WiXnZFk8Zsnxm0T9NyUbbOuwWdus_U6xK8KhDk';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';

export const fetchMovies = async () => {
    const response = await axios.get('/trending/movie/day');
    return response.data.results;
};

export const fetchMovieDetails = async (movieId) => {
    const response = await axios.get(`/movie/${movieId}`);
    return response.data;
};

export const fetchMovieCast = async (movieId) => {
    const response = await axios.get(`/movie/${movieId}/credits`);
    return response.data.cast;
};

export const fetchMovieReviews = async (movieId) => {
    const response = await axios.get(`/movie/${movieId}/reviews`);
    return response.data.results;
};

export const searchMovies = async (query) => {
    const response = await axios.get('/search/movie', {
        params: {
            query: query
        },
    });
    return response.data.results;
};
