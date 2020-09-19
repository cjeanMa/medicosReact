import {URL_MOCKAPI} from "../enviroment/enviroment";

/**
 * Funcion que obtiene los platos de una categoria
 * dado el id de la categoria
 * @param {*} categoria_id
 */
export const getEspecialidades = async () => {
    const response = await fetch(
      `${URL_MOCKAPI}/especialidades`
    );
    const json = await response.json();
    return json;
  };
  