import { useNavigate, Form, redirect } from "react-router-dom"
import { deleteCliente } from "../data/monedas";

export async function action ({params}) {
    await deleteCliente(params.id);
    return redirect('/');
}

const Moneda = ({moneda}) => {
    const navigate = useNavigate();

    return (
        <tr className="border-b">
            <td className="p-2">
                <p>{moneda.moneda}</p>
            </td>
            <td className="p-2">
                {moneda.descripcion}
            </td>
        </tr>
    )
    }

export default Moneda
