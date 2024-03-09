import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/Layout';
import NuevaTasa, { action as storeCliente } from './pages/NuevaTasa';
import { action as tasaEliminarAction } from './components/Moneda';
import IndexMoneda, { loader as clientesLoader } from './pages/IndexMoneda';
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
        loader: clientesLoader,
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
        action: storeCliente,
        errorElement: <Error/>
      },
    ]
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
