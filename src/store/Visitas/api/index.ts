import { base_url } from "@gcMobile/components/Auth/constants";
import { setVisitas } from "../index";
import { ENDPOINTS } from "@gcMobile/util/urls";
import { stringTemplateParser } from "@gcMobile/util";

export const getVisitas =
	(email: string, instalacion: number) => async (dispatch: any) => {
		fetch(
			stringTemplateParser(`${base_url}/${ENDPOINTS.VISITAS.BY_INSTALACION}`, {
				email,
				instalacion,
			})
		)
			.then((res) =>
				res
					.json()
					.then((data) => dispatch(setVisitas(data)))
					.catch((err) => console.log(err))
			)
			.catch((err) => console.log(err));
	};

export const getVisistaByFilter =
	(email: string, instalacion: number, filters: string[]) =>
	async (dispatch: any) => {
		fetch(
			stringTemplateParser(`${base_url}/${ENDPOINTS.VISITAS.BY_TYPE}`, {
				email,
				instalacion,
				filters: filters.join(","),
			})
		)
			.then((res) =>
				res
					.json()
					.then((data) => dispatch(setVisitas(data)))
					.catch((err) => console.log(err))
			)
			.catch((err) => console.log(err));
	};
