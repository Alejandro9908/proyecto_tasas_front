import React from 'react'

const Formulario = ({formNuevaTasa}) => {
    return (
        <>
            <div className='mb-4'>
                <label htmlFor="fechainit"> Fecha de inicio</label>
                <input type="date" 
                    id='fechainit'
                    className='mt-2 block w-full p-3 border border-slate-800'
                    placeholder='Fecha de inicio'
                    name='fechainit'
                />
            </div>
            
            <div className='mb-4'>
                <label htmlFor="fechainit"> Fecha Final</label>
                <input type="date" 
                    id='fechafin'
                    className='mt-2 block w-full p-3 border border-slate-800'
                    placeholder='Fecha final'
                    name='fechafin'
                />
            </div>
        </>
    )
}

export default Formulario
