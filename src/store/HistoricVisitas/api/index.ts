import {setLoading} from "@gcMobile/store/UI";
import {setHistoricVisitas} from "@gcMobile/store/HistoricVisitas";
import {base_url} from "@gcMobile/components/Auth/constants";
import {ENDPOINTS} from "@gcMobile/util/urls.ts";
import {stringTemplateAddQuery} from "@gcMobile/util";

export const getHistoricoVisitas = ({idInstalacion, email}:{idInstalacion:number, email:string}) => async (dispatch: any) => {
 const url = stringTemplateAddQuery(`${base_url}${ENDPOINTS.VISITAS.HISTORIC}`, {idInstalacion, email});
  dispatch(setLoading(true));
  console.log('HISTORIC URL ------->', url);
    fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log("Historico Visitas --->", data);
      dispatch(setHistoricVisitas(data));
      dispatch(setLoading(false));
    })
    .catch((error) => {
      console.error(error);
      dispatch(setLoading(false));

  });
};
