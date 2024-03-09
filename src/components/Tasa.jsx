import { useNavigate, Form, redirect } from "react-router-dom"
import { deleteTasa } from "../data/tasaCambio";

export async function action ({params}) {
    await deleteTasa(params.id);
    return redirect('/');
}

const Tasa = ({tasa}) => {
    const navigate = useNavigate();

    return (
        <>
            <tr className="border-b bg-slate-300">
                <td className="p-2" colSpan={2}>
                    <p>{tasa.id}</p>
                </td>
                <td className="p-2">
                Promedio {tasa.venta_promedio}
                </td>
                <td className="p-2">
                    Promedio {tasa.compra_promedio}
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
