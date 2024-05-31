import { setLoading } from '@gcMobile/store/UI'
import { setHistoricVisitas } from '@gcMobile/store/HistoricVisitas'
import { base_url } from '@gcMobile/components/Auth/constants'
import { ENDPOINTS } from '@gcMobile/util/urls'
import { stringTemplateAddQuery } from '@gcMobile/util'
import { VisitaHistorica } from '@gcMobile/store/HistoricVisitas/types'

export const getHistoricoVisitas =
    ({ idInstalacion, email }: { idInstalacion: number; email: string }) =>
    (dispatch: any) => {
        const url = stringTemplateAddQuery(`${base_url}${ENDPOINTS.VISITAS.HISTORIC}`, { idInstalacion, email })
        console.log('getHistoricoVisitas url ====>', url)
        dispatch(setLoading(true))
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                console.log('Historic visitas =====>', data)
                if (!Object.keys(data).includes('message')) {
                    dispatch(setHistoricVisitas(data as unknown as VisitaHistorica[]))
                }
                dispatch(setLoading(false))
            })
            .catch((error) => {
                console.error(error)
                dispatch(setLoading(false))
            })
    }
