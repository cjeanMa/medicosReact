import {END_POINT} from '../enviroment/enviroment'

export const getEspecialistas = async () =>{
    const response = await fetch(`${END_POINT}medicos`);
    const data = await response.json();
    return data;
}

export const getEspecialista = async (id) =>{
    const response = await fetch(`${END_POINT}medicos/${id}`);
    const data = await response.json();
    return data;
}