import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Navigation from './components/Navigation.jsx';
import HomePage from './pages/HomePage.jsx';
import './App.css';

const MoviesPage = lazy(() => import('./pages/./MoviesPage'));
const MovieDetailsPage = lazy(() => import('./pages/./MovieDetailsPage'));
const MovieCast = lazy(() => import('./pages/./MovieCast'));
const MovieReviews = lazy(() => import('./pages/./MovieReviews'));
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
                        <Route path="/movies" element={<MoviesPage />} />
                        <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
                            <Route path="cast" element={<MovieCast />} />
                            <Route path="reviews" element={<MovieReviews />} />
                        </Route>
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </Suspense>
            </main>
        </>
    );
}

export default App;
