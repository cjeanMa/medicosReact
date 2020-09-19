import {URL_MOCKAPI} from "../enviroment/enviroment"

export const getDistritos = async() =>{
    const response = await fetch(`${URL_MOCKAPI}/provincias`);
    const json = await response.json();
    return json;
}