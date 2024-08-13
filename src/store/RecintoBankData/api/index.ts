import { base_url } from '@gcMobile/components/Auth/constants'
import { stringTemplateAddQuery } from '@gcMobile/util'
import { ENDPOINTS } from '@gcMobile/util/urls'
import { setBankData } from '..'
import { setLoading } from '@gcMobile/store/UI'
import { ALERT_TYPE, Toast } from 'react-native-alert-notification'

export const getBankData = (recintoId: string) => async (dispatch: any) => {
    dispatch(setLoading(true))
    const stringUrl = `${base_url}${ENDPOINTS.HOME.BANK_DATA}`
    const url = stringTemplateAddQuery(stringUrl, { recintoId })
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            const { result } = data
            const [bankData] = result
            dispatch(setBankData(bankData))
            dispatch(setLoading(false))
        })
        .catch((error) => {
            dispatch(setLoading(false))
            Toast.show({
                title: 'Error',
                textBody: 'Ocurrió un error al obtener informacion.',
                type: ALERT_TYPE.DANGER,
            })
        })
}
