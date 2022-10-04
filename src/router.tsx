import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import ErrorPage from './common/pages/ErrorPage';
import React, { lazy } from 'react';

const Landing = lazy(async () => await import('./features/landing/pages/Landing'));
const EventDetails = lazy(async () => await import('./features/events/pages/EventDetails'));
const EventCreate = lazy(async () => await import('./features/events/pages/EventCreate'));

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            { path: 'create', element: <EventCreate /> },
            { path: 'event', element: <EventDetails /> },
            { path: '', element: <Landing /> },
        ]
    },
]);

export default function Router() {
    return <RouterProvider router={router} />
}
