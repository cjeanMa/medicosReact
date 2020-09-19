import {URL_MOCKAPI} from "../enviroment/enviroment";

export const getMedicos = async() =>{
    const response = await fetch(`${URL_MOCKAPI}/medicos`);
    const json = await response.json();
    return json;
}   

export const postMedico = async (medico) => {
    const response = await fetch(`${URL_MOCKAPI}/medicos`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(medico),
    });
    const json = await response.json();
    return json;
  };