import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Navigation from './components/Navigation.jsx';
import Home from './pages/Home.jsx';
import './App.css';

const Movies = lazy(() => import('./pages/Movies.jsx'));
const MovieCard = lazy(() => import('./pages/MovieCard.jsx'));
const Cast = lazy(() => import('./pages/Cast.jsx'));
const Reviews = lazy(() => import('./pages/Reviews.jsx'));
const NotFound = lazy(() => import('./pages/NotFound.jsx'));

function App() {
    return (
        <>
            <header>
                <Navigation />
            </header>
            <main>
                <Suspense>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/movies" element={<Movies />} />
                        <Route path="/movies/:movieId" element={<MovieCard />}>
                            <Route path="cast" element={<Cast />} />
                            <Route path="reviews" element={<Reviews />} />
                        </Route>
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </Suspense>
            </main>
        </>
    );
}

export default App;
