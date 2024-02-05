export const getTipoVisitaIcon = (catalog: string[], tipo_visita: string) => {
	const found = catalog.find((element) => element === tipo_visita);
	return found;
};
