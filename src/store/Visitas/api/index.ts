import { base_url } from "@gcMobile/components/Auth/constants";
import { setVisitas } from "../index";
import { ENDPOINTS } from "@gcMobile/util/urls";
import { stringTemplateParser } from "@gcMobile/util";
import { visitasPayload } from "../types";
import { ALERT_TYPE, Toast } from "react-native-alert-notification";

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

export const createVisita = (data: visitasPayload) => {
	var formdata = new FormData();
	formdata.append("idUsuario", data.idUsuario.toString());
	formdata.append("tipoVisita", data.tipoVisita.toString());
	formdata.append("tipoIngreso", data.tipoIngreso.toString());
	formdata.append("fechaIngreso", data.fechaIngreso);
	formdata.append("fechaSalida", data.fechaSalida);
	formdata.append("multEntry", data.multEntry.toString());
	formdata.append("notificacion", data.notificacion.toString());
	formdata.append("nombre", data.nombre);
	formdata.append("idInstalacion", data.idInstalacion.toString());
	fetch(`${base_url}/${ENDPOINTS.VISITAS.CREATE}`, {
		method: "POST",
		body: formdata,
	})
		.then((res) => {
			res.json().then((data) => {
				console.log(data);
				Toast.show({
					type: ALERT_TYPE.SUCCESS,
					title: "Visita",
					textBody: "Visita creada con éxito",
				});
			});
		})
		.catch((err) => {
			console.log(err);
			Toast.show({
				type: ALERT_TYPE.DANGER,
				title: "Visita",
				textBody: "Error al crear la visita",
			});
		});
};
