import { base_url } from "@gcMobile/components/Auth/constants";
import { setVisitas } from "../index";

export const getVisitas =
	(email: string, instalacion: number) => async (dispatch: any) => {
		fetch(
			`${base_url}/visita/consulta/GetAllByInstalacion/index.php?email=${email}&idInstalacion=${instalacion}`
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
		console.log(
			`${base_url}/visita/consulta/GetAllByType/index.php?email=${email}&idInstalacion=${instalacion}&idTipoVisita=${filters.join(
				","
			)}`
		);
		fetch(
			`${base_url}/visita/consulta/GetAllByType/index.php?email=${email}&idInstalacion=${instalacion}&idTipoVisita=${filters.join(
				","
			)}`
		)
			.then((res) =>
				res
					.json()
					.then((data) => dispatch(setVisitas(data)))
					.catch((err) => console.log(err))
			)
			.catch((err) => console.log(err));
	};
