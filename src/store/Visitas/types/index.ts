import { ICardProps } from '@gcMobile/components/Card/Card'

export type TVisita = {
    visita_id: string
    nombre: string
    desde: string
    hasta: string
    multiple_entrada: string
    notificaciones: string
    uniqueID: string
    estatus_registro: string
    tipo_ingreso: string
    id_tipo_ingreso: string
    id_tipo_visita: string
}

export type TVehicles = {
    vehicle_id: string
    marca: string
    modelo: string
    anio: string
    placas: string
    color: string
}

export type TVisitas = {
    visitas: ICardProps[]
    newVisistaQR: string
    visita: TVisita
    vehicles: TVehicles[]
}

export type visitasPayload = {
    idUsuario: string
    tipoVisita: string
    tipoIngreso: string
    fechaIngreso: string
    fechaSalida: string
    multEntry: string
    notificacion: string
    nombre: string
    idInstalacion: string
    vehicle?: string
}

export type TVisitaPayload = {
    idVisita: string
    tipoVisita: string
    tipoIngreso: string
    fechaIngreso: string
    fechaSalida: string
    multiEntrada: string
    notificaciones: string
    nombreVisita: string
    vehicles: string
}
