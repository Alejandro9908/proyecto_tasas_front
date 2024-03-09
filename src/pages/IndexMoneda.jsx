import { useLoaderData } from "react-router-dom";
import { getMonedas } from "../data/monedas";
import Moneda from "../components/Moneda";

export function loader() {
  const result = getMonedas();
  return result;
}

const IndexMoneda = () => {

  const result = useLoaderData();
  const monedas = result.Variables.Variable;

  return (
    <>
      <h1 className='font-bold text-4xl text-blue-900'>Monedas</h1>
      <p className='mt-3'>Listado de monedas</p>

      {monedas.length ? (
        <table className="w-full bg-white shadow mt-5 table-auto">
          <thead className="bg-blue-900 text-white">
            <tr>
              <th className="p-2 text-left">ID</th>
              <th className="p-2 text-left">MONEDA</th>
            </tr>
          </thead>
          <tbody className="text-sm">
            {monedas.map( moneda => (
              <Moneda
                key={moneda.moneda}
                moneda={moneda}
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

export default IndexMoneda
