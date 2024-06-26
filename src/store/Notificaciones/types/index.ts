export type AttachmentsTypes = {
    id: string
    nombre: string
}

export type NotificacionesAvisos = {
    id: string
    titulo: string
    descripcion: string
    fecha: string
    leido?: boolean
}

export type DevicesType = {
    recintoId: string
    deviceId: string
    badgeCount: number
    avisos: NotificacionesAvisos[]
    attachments: AttachmentsTypes[]
}
