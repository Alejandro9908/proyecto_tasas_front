import { Form, redirect } from "react-router-dom"
import { deleteTasa } from "../data/tasaCambio";

export async function action ({params}) {
    await deleteTasa(params.id);
    return redirect('/tasas-de-cambio');
}

const Tasa = ({tasa}) => {

    return (
        <>
            <tr className="border-b bg-slate-300">
                <td className="p-2" colSpan={2}>
                    <p>{tasa.id}</p>
                </td>
                <td className="p-2">
                Prom. {tasa.venta_promedio}
                </td>
                <td className="p-2">
                    Prom. {tasa.compra_promedio}
                </td>
                <td>
                    <Form
                        method="POST"
                        action={`/tasas-de-cambio/${tasa.id}/eliminar`}
                        onSubmit={(e) => {
                            if (!confirm('Deseas eliminar el registro?')) {
                                e.preventDefault();
                            }
                        }}
                    >
                        <button className="px-1 bg-red-500 text-white rounded-sm">
                            ×
                        </button>
                    </Form>
                </td>
            </tr>
            {tasa.detalles.map( detalle => (
            <tr key={detalle.id}>
                <td className="p-2"></td>
                <td className="p-2">{detalle.fecha}</td>
                <td className="p-2">{detalle.venta}</td>
                <td className="p-2">{detalle.compra}</td>
            </tr>
            ))}
        </>
    )
    }

export default Tasa
