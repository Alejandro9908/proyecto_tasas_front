export async function getMonedas () {
    const respuesta = await fetch(import.meta.env.VITE_API_URL + '/variables-disponibles');
    const resultado = await respuesta.json();
    return resultado;
}