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

export type TVisitas = {
    visitas: ICardProps[]
    newVisistaQR: string
    visita: TVisita
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
