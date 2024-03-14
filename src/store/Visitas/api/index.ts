import { base_url } from "@gcMobile/components/Auth/constants";
import { setNewVisitaQR, setVisitas } from "../index";
import { ENDPOINTS } from "@gcMobile/util/urls";
import { stringTemplateParser } from "@gcMobile/util";
import { visitasPayload } from "../types";
import { ALERT_TYPE, Toast } from "react-native-alert-notification";
import { setLoading, setOperationSuccess } from "@gcMobile/store/UI";

export const getVisitas =
	(email: string, instalacion: number) => async (dispatch: any) => {
		dispatch(setLoading(true));
		fetch(
			stringTemplateParser(`${base_url}/${ENDPOINTS.VISITAS.BY_INSTALACION}`, {
				email,
				instalacion,
			})
		)
			.then((res) =>
				res
					.json()
					.then((data) => {
						dispatch(setVisitas(data));
						dispatch(setLoading(false));
					})
					.catch((err) => {
						console.log(err);
						dispatch(setLoading(false));
					})
			)
			.catch((err) => {
				console.log(err);
				dispatch(setLoading(false));
			});
	};

export const getVisistaByFilter =
	(email: string, instalacion: number, filters: string[]) =>
	async (dispatch: any) => {
		dispatch(setLoading(true));
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
					.then((data) => {
						dispatch(setVisitas(data));
						dispatch(setLoading(false));
					})
					.catch((err) => {
						console.log(err);
						dispatch(setLoading(false));
					})
			)
			.catch((err) => {
				console.log(err);
				dispatch(setLoading(false));
			});
	};

export const createVisita = (data: visitasPayload) => async (dispatch: any) => {
	const formdata = new FormData();
	formdata.append("idUsuario", data.idUsuario.toString());
	formdata.append("tipoVisita", data.tipoVisita.toString());
	formdata.append("tipoIngreso", data.tipoIngreso.toString());
	formdata.append("fechaIngreso", data.fechaIngreso);
	formdata.append("fechaSalida", data.fechaSalida);
	formdata.append("multEntry", data.multEntry.toString());
	formdata.append("notificacion", data.notificacion.toString());
	formdata.append("nombre", data.nombre);
	formdata.append("idInstalacion", data.idInstalacion.toString());
	formdata.append("vehicles", data.vehicle || "");
	dispatch(setLoading(true));

	fetch(`${base_url}/${ENDPOINTS.VISITAS.CREATE}`, {
		method: "POST",
		body: formdata,
	})
		.then((res) => res.json())
		.then((response: any) => {
			Toast.show({
				type: ALERT_TYPE.SUCCESS,
				title: "Visita",
				textBody: "Visita creada con éxito",
			});
			const { uniqueID } = response;
			dispatch(setNewVisitaQR(uniqueID));
			dispatch(setLoading(false));
			dispatch(setOperationSuccess(true));
		})
		.catch((err) => {
			console.log(err);
			dispatch(setLoading(false));
			Toast.show({
				type: ALERT_TYPE.DANGER,
				title: "Visita",
				textBody: "Error al crear la visita",
			});
		});
};
