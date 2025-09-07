import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import React, { Suspense, lazy } from 'react';
import { ClipLoader } from 'react-spinners';
import ReactDOM from 'react-dom/client';
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
const App = lazy(() => import('./App.jsx'));
const Enterpage = lazy(() => import('./pages/enter-page.jsx'))
const Homepage = lazy(() => import('./pages/home-page.jsx'))
const Error = () => <div>Error loading the page!</div>;

// Create Router with lazy-loaded components
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      { index: true, element: <Homepage /> },
      { path: 'enter', element: <Enterpage /> },
      { path: 'homepage', element: <Homepage /> }
    ]
  },
]);

// Render the app with a Suspense fallback
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Suspense fallback={<ClipLoader color="#3498db" size={40} />}>
      <RouterProvider router={router} />
    </Suspense>
  </React.StrictMode>
);
