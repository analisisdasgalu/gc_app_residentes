import { colorFilters } from "@gcMobile/components/Filter/constants";
import { RootState } from "@gcMobile/store";
import { useSelector } from "react-redux";

export const getTipoVisitaIcon = (tipo_visita: string) => {
	const { catalogVisitas } = useSelector(
		(state: RootState) => state.tipoVisitas
	);
	const findTipoVisita = catalogVisitas.find(
		(visita) => visita.tipo_visita === tipo_visita
	);
	if (findTipoVisita) {
		return colorFilters[Number.parseInt(findTipoVisita.id, 10) - 1];
	}
	return "green";
};

export const stringTemplateParser = (cadena: string, object: any) => {
	const regex = /{([^{}]*)}/g;
	return cadena.replace(regex, (match, submatch) => object[submatch]);
};

export const stringTemplateAddQuery = (cadena: string, object: any) => {
  cadena += "?";
  Object.keys(object).forEach((key) => {
    cadena +=  `${key}=${object[key]}&`;
  });
  cadena = cadena.slice(0, -1);
  return cadena;
};

