export const ENDPOINTS = {
	CATALOG_TIPO_VISITAS: "/visita/catalogs/GetTipoVisita/index.php",
	CATALOG_TIPO_INGRESO: "/visita/catalogs/GetTipoIngreso/index.php",
	VISITAS: {
		BY_INSTALACION: `/visita/consulta/GetAllByInstalacion/index.php?email={email}&idInstalacion={instalacion}`,
		BY_TYPE: `visita/consulta/GetAllByType/index.php?email={email}&idInstalacion={instalacion}&idTipoVisita={filters}`,
		CREATE: "/visita/crear/index.php",
	},
};
