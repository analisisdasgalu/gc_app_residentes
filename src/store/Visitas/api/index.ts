import { base_url } from '@gcMobile/components/Auth/constants'
import { setEditableVisita, setNewVisitaQR, setVehicles, setVisitas } from '../index'
import { ENDPOINTS } from '@gcMobile/util/urls'
import { stringTemplateAddQuery, stringTemplateParser } from '@gcMobile/util'
import { TVehicles, TVisita, TVisitaPayload, visitasPayload } from '../types'
import { ALERT_TYPE, Toast } from 'react-native-alert-notification'
import { setLoading, setOperationSuccess } from '@gcMobile/store/UI'

export const getVisitaByuniqueId = (uniqueId: string) => async (dispatch: any) => {
    dispatch(setLoading(true))
    fetch(stringTemplateAddQuery(`${base_url}/${ENDPOINTS.VISITAS.BY_UNIQUE_ID}`, { uniqueId }))
        .then((res) =>
            res
                .json()
                .then((data) => {
                    dispatch(setEditableVisita(data as TVisita))
                    dispatch(setLoading(false))
                })
                .catch((err) => {
                    console.log(err)
                    dispatch(setLoading(false))
                })
        )
        .catch((err) => {
            console.log(err)
            dispatch(setLoading(false))
        })
}

export const getVehiclesByUniqueId = (uniqueId: string) => async (dispatch: any) => {
    dispatch(setLoading(true))
    fetch(stringTemplateAddQuery(`${base_url}/${ENDPOINTS.VISITAS.VEHICLES}`, { qr: uniqueId }))
        .then((res) =>
            res
                .json()
                .then((data) => {
                    dispatch(setVehicles(data as TVehicles[]))
                    dispatch(setLoading(false))
                })
                .catch((err) => {
                    console.log(err)
                    dispatch(setLoading(false))
                })
        )
        .catch((err) => {
            console.log(err)
            dispatch(setLoading(false))
        })
}

export const getVisitas = (email: string, instalacion: number) => async (dispatch: any) => {
    dispatch(setLoading(true))
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
                    dispatch(setVisitas(data))
                    dispatch(setLoading(false))
                })
                .catch((err) => {
                    console.log(err)
                    dispatch(setLoading(false))
                })
        )
        .catch((err) => {
            console.log(err)
            dispatch(setLoading(false))
        })
}

export const getVisistaByFilter = (email: string, instalacion: number, filters: string[]) => async (dispatch: any) => {
    dispatch(setLoading(true))
    fetch(
        stringTemplateParser(`${base_url}/${ENDPOINTS.VISITAS.BY_TYPE}`, {
            email,
            instalacion,
            filters: filters.join(','),
        })
    )
        .then((res) =>
            res
                .json()
                .then((data) => {
                    dispatch(setVisitas(data))
                    dispatch(setLoading(false))
                })
                .catch((err) => {
                    console.log(err)
                    dispatch(setLoading(false))
                })
        )
        .catch((err) => {
            console.log(err)
            dispatch(setLoading(false))
        })
}

export const createVisita = (data: visitasPayload) => async (dispatch: any) => {
    const formdata = new FormData()
    formdata.append('idUsuario', data.idUsuario.toString())
    formdata.append('tipoVisita', data.tipoVisita.toString())
    formdata.append('tipoIngreso', data.tipoIngreso.toString())
    formdata.append('fechaIngreso', data.fechaIngreso)
    formdata.append('fechaSalida', data.fechaSalida)
    formdata.append('multEntry', data.multEntry.toString())
    formdata.append('notificacion', data.notificacion.toString())
    formdata.append('nombre', data.nombre)
    formdata.append('idInstalacion', data.idInstalacion.toString())
    formdata.append('vehicles', data.vehicle || '')
    dispatch(setLoading(true))

    fetch(`${base_url}/${ENDPOINTS.VISITAS.CREATE}`, {
        method: 'POST',
        body: formdata,
    })
        .then((res) => res.json())
        .then((response: any) => {
            Toast.show({
                type: ALERT_TYPE.SUCCESS,
                title: 'Visita',
                textBody: 'Visita creada con éxito',
            })
            const { uniqueID } = response
            dispatch(setNewVisitaQR(uniqueID))
            dispatch(setLoading(false))
            dispatch(setOperationSuccess(true))
        })
        .catch((err) => {
            console.log(err)
            dispatch(setLoading(false))
            Toast.show({
                type: ALERT_TYPE.DANGER,
                title: 'Visita',
                textBody: 'Error al crear la visita',
            })
        })
}

export const updateVisita = (data: TVisitaPayload) => async (dispatch: any) => {
    const formdata = new FormData()
    formdata.append('idVisita', data.idVisita)
    formdata.append('tipoVisita', data.tipoVisita)
    formdata.append('tipoIngreso', data.tipoIngreso)
    formdata.append('fechaIngreso', data.fechaIngreso)
    formdata.append('fechaSalida', data.fechaSalida)
    formdata.append('multiEntrada', data.multiEntrada)
    formdata.append('notificaciones', data.notificaciones)
    formdata.append('nombreVisita', data.nombreVisita)
    formdata.append('vehicles', data.vehicles)
    dispatch(setLoading(true))
    fetch(`${base_url}/${ENDPOINTS.VISITAS.UPDATE}`, {
        method: 'POST',
        body: formdata,
    })
        .then((res) => res.json())
        .then((response: any) => {
            Toast.show({
                type: ALERT_TYPE.SUCCESS,
                title: 'Visita',
                textBody: 'Visita actualizada con éxito',
            })
            dispatch(setLoading(false))
            dispatch(setOperationSuccess(true))
        })
        .catch((err) => {
            console.log(err)
            dispatch(setLoading(false))
            Toast.show({
                type: ALERT_TYPE.DANGER,
                title: 'Visita',
                textBody: 'Error al actualizar la visita',
            })
        })
}

export const deleteVehicle = (vehicle_id: string, callback: () => void) => async (dispatch: any) => {
    dispatch(setLoading(true))
    const formdata = new FormData()
    formdata.append('idVehicle', vehicle_id)
    try {
        const res = await fetch(`${base_url}/${ENDPOINTS.VISITAS.DELETE}`, {
            method: 'POST',
            body: formdata,
        })
        const data = await res.json()
        if (['200', 200].includes(data.estatus)) {
            dispatch(setLoading(false))
            Toast.show({
                type: ALERT_TYPE.SUCCESS,
                title: 'Vehículo',
                textBody: 'Vehículo eliminado con éxito',
            })
            callback()
        } else {
            throw new Error(data)
        }
    } catch (error) {
        dispatch(setLoading(false))
        console.error(error)
        Toast.show({
            type: ALERT_TYPE.DANGER,
            title: 'Vehículo',
            textBody: 'Error al eliminar el vehículo',
        })
    }
}
