import { useNavigate } from "react-router-dom"

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
