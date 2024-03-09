import { redirect, useLoaderData } from "react-router-dom";
import { getTasas, addTasa } from "../data/tasaCambio";
import Tasa from "../components/Tasa";


export async function action ({request}) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  const errores = [];
  if (Object.values(data).includes('')) {
    errores.push('Todos los campos son obligatorios')
  }

  if (Object.keys(errores).length > 0) {
    return errores;
  }

  await addTasa(data);

  return redirect('/tasas-de-cambio');
}

export function loader() {
  const result = getTasas();
  return result;
}

const IndexTasa = () => {

  const result = useLoaderData();
  const tasas = result.data;

  return (
    <>
      <h1 className='font-bold text-4xl text-blue-900 mb-14'>Tasas de cambio por rango</h1>

      <p className='mt-3'>Listado de Tasas</p>

      {tasas.length ? (
        <table className="w-full bg-white shadow mt-5 table-auto">
          <thead className="bg-blue-900 text-white">
            <tr>
              <th className="p-2 text-left">NO DE PETICIÓN</th>
              <th className="p-2 text-left">FECHA</th>
              <th className="p-2 text-left">TC VENTA</th>
              <th className="p-2 text-left">TC COMPRA</th>
              <th className="p-2 text-left"></th>
            </tr>
          </thead>
          <tbody className="text-sm">
            {tasas.map( tasa => (
              <Tasa
                key={tasa.id}
                tasa={tasa}
              />
            ))}
          </tbody>

        </table>
      ) : (
        <p>Sin registros</p>
      )}
    </>
  )
}

export default IndexTasa
