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
            const errores = await respuesta.json(); 
            return errores; 
        } else {
            return { success: true }; 
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