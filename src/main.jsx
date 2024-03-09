import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/Layout';
import NuevaTasa, { action as storeTasa } from './pages/NuevaTasa';
import { action as tasaEliminarAction } from './components/Tasa';
import IndexMoneda, { loader as monedasLoader } from './pages/IndexMoneda';
import IndexTasa, { loader as tasasLoader } from './pages/IndexTasa';
import Error from './pages/Error';

const router = createBrowserRouter ([
  {
    path: '/',
    element: <Layout/>,
    children: [
      {
        index: true,
        element: <IndexMoneda/>,
        loader: monedasLoader,
        errorElement: <Error/>
      },
      {
        path: '/tasas-de-cambio',
        element: <IndexTasa/>,
        loader: tasasLoader,
        errorElement: <Error/>
      },
      {
        path: '/tasas-de-cambio/nuevo',
        element: <NuevaTasa/>,
        action: storeTasa,
        errorElement: <Error/>
      },
      {
        path: '/tasas-de-cambio/:id/eliminar',
        action: tasaEliminarAction,
      }
    ]
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
