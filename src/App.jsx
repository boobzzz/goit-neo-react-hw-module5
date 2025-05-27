import { Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation.jsx';
import Home from './pages/Home.jsx';
import Movies from './pages/Movies.jsx';
import MovieCard from './pages/MovieCard.jsx';
import Cast from './pages/Cast.jsx';
import Reviews from './pages/Reviews.jsx';
import NotFound from './pages/NotFound.jsx';
import './App.css';

function App() {
    return (
        <>
            <header>
                <Navigation />
            </header>
            <main>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/movies" element={<Movies />} />
                    <Route path="/movies/:movieId" element={<MovieCard />}>
                        <Route path="cast" element={<Cast />} />
                        <Route path="reviews" element={<Reviews />} />
                    </Route>
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </main>
        </>
    );
}

export default App;
