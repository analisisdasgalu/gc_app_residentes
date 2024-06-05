import { base_url } from '@gcMobile/components/Auth/constants'
import { stringTemplateAddQuery } from '@gcMobile/util'

export const getRecintoId = (instalacionId: number) => {
    const url = stringTemplateAddQuery(`${base_url}/instalaciones/getRecintos/index.php`, { instalacionId })
    return fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    })
}
