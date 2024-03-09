export async function getTasas () {
    const respuesta = await fetch(import.meta.env.VITE_API_URL + '/tasas-cambio');
    const resultado = await respuesta.json();
    return resultado;    
}

export async function addTasa (data) { 
    try {
        const respuesta = await fetch(import.meta.env.VITE_API_URL + '/tasas-cambio', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: { 'Content-Type': 'application/json' }
        })
        if (!respuesta.ok) {
            const errores = await respuesta.json(); // Obtiene los detalles de los errores
            console.log('Errores de validación:', errores.errors);
            return errores; // Devuelve los errores para manejarlos en el componente
        } else {
            const contenido = await respuesta.json();
            console.log('Respuesta exitosa:', contenido);
            return { success: true }; // Indica éxito
        }
    } catch (e) {
        console.log(e);
    }
}

export async function deleteTasa (id) {
    try {
        const respuesta = await fetch(`${import.meta.env.VITE_API_URL}/tasas-cambio/${id}`, {
            method: 'DELETE'
        })
        await respuesta.json();
    } catch (e) {
        console.log(e);
    }
}