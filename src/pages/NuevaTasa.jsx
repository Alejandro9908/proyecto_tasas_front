import { useNavigate, Form, useActionData, redirect } from "react-router-dom"
import Formulario from "../components/Formulario";
import Error from "../components/Error";
import { addTasa } from "../data/tasaCambio";
import { useState } from "react";

export async function action ({request}) {

}

const NuevaTasa = () => {
  const navigate = useNavigate();
  const [errores, setErrores] = useState([]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData);

    const resultado = await addTasa(data);

    if (resultado.success) {
      navigate('/tasas-de-cambio');
    } else if (resultado.errors) {
      setErrores(Object.values(resultado.errors).flat());
    } else if (resultado.error) {
      setErrores([resultado.error]);
    }
  };

  return (
    <>
      <h1 className='font-bold text-4xl text-blue-900'>Nueva tasa de cambio</h1>
      <p className='mt-3'>Llena el formulario: Establece el rango de fechas</p>

      <div className='flex justify-end'>
        <button className='bg-blue-900 text-white px-3 py-2 font-bold uppercase'
          onClick={() => navigate('/tasas-de-cambio')}
        >
          Volver
        </button>
      </div>

        <div className="bg-white shadow rounded-md md:w-3/4 mx-auto px-5 py-10">

        {!!errores?.length && errores.map((error, i) => <Error key={i}>{error}</Error> )}

          <form onSubmit={handleSubmit}>
            {/* Aquí iría el JSX de tu formulario, incluyendo el componente Formulario */}
            <Formulario />

            <button type="submit" className='bg-blue-900 text-white px-3 py-2 font-bold uppercase cursor-pointer'>
              Guardar
            </button>
          </form>
        </div>
      
    </>
  )
}

export default NuevaTasa
