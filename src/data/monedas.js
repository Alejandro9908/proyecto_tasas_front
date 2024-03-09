export async function getMonedas () {
    const respuesta = await fetch(import.meta.env.VITE_API_URL + '/variables-disponibles');
    const resultado = await respuesta.json();
    return resultado;
}

export async function getCliente (id) {
    const respuesta = await fetch(`${import.meta.env.VITE_API_URL}/${id}`);
    const resultado = await respuesta.json();
    return resultado;
}

export async function addCliente (data) { 
    try {
        const respuesta = await fetch(import.meta.env.VITE_API_URL, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: { 'Content-Type': 'application/json' }
        })
        await respuesta.json();
    } catch (e) {
        console.log(e);
    }
}

export async function editCliente (id, data) {
    try {
        const respuesta = await fetch(`${import.meta.env.VITE_API_URL}/${id}`, {
            method: 'PUT',
            body: JSON.stringify(data),
            headers: { 'Content-Type': 'application/json' }
        })
        await respuesta.json();
    } catch (e) {
        console.log(e);
    }
}

export async function deleteCliente (id) {
    try {
        const respuesta = await fetch(`${import.meta.env.VITE_API_URL}/${id}`, {
            method: 'DELETE'
        })
        await respuesta.json();
    } catch (e) {
        console.log(e);
    }
}