import { ICardProps } from "@gcMobile/components/Card/Card";

export type TVisitas = {
	visitas: ICardProps[];
	newVisistaQR: string;
};

export type visitasPayload = {
	idUsuario: string;
	tipoVisita: string;
	tipoIngreso: string;
	fechaIngreso: string;
	fechaSalida: string;
	multEntry: string;
	notificacion: string;
	nombre: string;
	idInstalacion: string;
};
