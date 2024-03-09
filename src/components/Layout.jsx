import {useState} from 'react'
import { Outlet, Link, useLocation } from 'react-router-dom'

const Layout = () => {
    const location = useLocation();
    return (
        <div className='md:flex md:min-h-screen'>
            <div className='md:w-1/4 bg-blue-900 px-5 py-10 text-white'>
                <h2 className='text-4xl font-bold text-center'>Tasas de cambio</h2>
                <nav className='mt-10'>
                    <ul className='flex flex-col gap-4'>
                        <li>
                            <Link className={`${location.pathname === '/' && 'border-b-2 border-white'}`} to="/">Monedas</Link>
                        </li>
                        <li>
                            <Link className={`${location.pathname === '/tasas-de-cambio' && 'border-b-2 border-white'}`} to="/tasas-de-cambio">Tasas de cambio</Link>
                        </li>
                        <li>
                            <Link className={`${location.pathname === '/tasas-de-cambio/nuevo' && 'border-b-2 border-white'}`} to="/tasas-de-cambio/nuevo">Nuevo registro</Link>
                        </li>
                    </ul>
                    
                </nav>
            </div>

            <div className='md:w-3/4 p-10 md:h-screen overflow-scroll'>
                <Outlet/>
            </div>
        </div>
    )
}

export default Layout
