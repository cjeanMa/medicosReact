import {END_POINT} from '../enviroment/enviroment'

export const getDistritos =  async () =>{
    const response = await fetch(`${END_POINT}provincias`);
    const data = await response.json();
    return data;
}