import { base_url } from '@gcMobile/components/Auth/constants'

export const registerDeviceId = async (deviceId: string, recintoId: string) => {
    const url = base_url + '/Notificaciones/register/index.php'
    const data = new FormData()
    data.append('deviceId', deviceId)
    data.append('idRecinto', recintoId)
    const requestOptions = {
        method: 'POST',
        body: data,
    }
    const raw = await fetch(url, requestOptions)
    const response = await raw.json()
    return response
}
