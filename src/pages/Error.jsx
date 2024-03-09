import { useRouteError } from "react-router-dom"
const Error = () => {
    const error = useRouteError();

    return (
        <div className="space-y-8">
            <h1 className="text-center text-6xl font-extrabold text-red-500">Ups</h1>
            <p className="text-center text-xl text-red-500">Parece que hubo un problema en el proceso de carga</p>
            <p className="text-center">{error.statusText || error.message}</p>
        </div>
    )
}

export default Error
