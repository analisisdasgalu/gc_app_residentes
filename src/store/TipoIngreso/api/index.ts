import { ENDPOINTS } from "@gcMobile/util/urls";
import { setCatalogIngreso } from "@gcMobile/store/TipoIngreso";
import { TTipoIngreso } from "@gcMobile/store/TipoIngreso/Types";
import { base_url } from "@gcMobile/components/Auth/constants";

export const getCatalogTipoIngreso = () => async (dispatch: any) => {
	fetch(`${base_url}${ENDPOINTS.CATALOG_TIPO_INGRESO}`)
		.then((res) => res.json())
		.then((data) => {
			dispatch(setCatalogIngreso(data as TTipoIngreso[]));
		})
		.catch((error) => {
			console.error(error);
		});
};
