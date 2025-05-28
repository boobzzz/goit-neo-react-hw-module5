import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Navigation from './components/Navigation.jsx';
import HomePage from './pages/HomePage.jsx';
import './App.css';

const Movies = lazy(() => import('./pages/./MoviesPage'));
const MovieCard = lazy(() => import('./pages/./MovieDetailsPage'));
const Cast = lazy(() => import('./pages/./MovieCast'));
const Reviews = lazy(() => import('./pages/./MovieReviews'));
const NotFound = lazy(() => import('./pages/NotFound.jsx'));

function App() {
    return (
        <>
            <header>
                <Navigation />
            </header>
            <main>
                <Suspense fallback={<p>Loading...</p>}>
                    <Routes>
                        <Route path="/" element={<HomePage />} />
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
