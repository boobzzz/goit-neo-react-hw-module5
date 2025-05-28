import axios from 'axios';

export const posterBaseUrl = 'https://image.tmdb.org/t/p/w300';
export const castBaseUrl = 'https://image.tmdb.org/t/p/w200';
export const defaultPoster =
    'https://dl-media.viber.com/10/share/2/long/vibes/icon/image/0x0/95e0/5688fdffb84ff8bed4240bcf3ec5ac81ce591d9fa9558a3a968c630eaba195e0.jpg';

axios.defaults.headers.common['Authorization'] = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MmRkNjVlOGZhMjQ3ZmFlMmVjZjc5YTk3ZjU0YmQ0YSIsIm5iZiI6MTU3NjQyODA0Ny4wMDQsInN1YiI6IjVkZjY2MjBmMGQxZTdmMDAxNTcxZjEyNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nD3K3WiXnZFk8Zsnxm0T9NyUbbOuwWdus_U6xK8KhDk';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';

// export const fetchMovies = async (query, page) => {
//     const response = await axios.get('/trending/movie/day', {
//         params: {
//             query: query,
//             page: page,
//             per_page: 20
//         },
//     });
//     return response.data.results;
// };

export const fetchMovies = async () => {
    const response = await axios.get('/trending/movie/day');
    return response.data.results;
};
