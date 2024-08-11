import { IconName } from '@gcMobile/components/CircularButton/CircularButton'

export type PaymentReference = {
    targetBank: string
    reference: string
    cents: string
}

export type BankInformation = {
    bankName: string
    accountNumber: string
    CLABE: string
}

export type HomeCardProps = {
    imageUrl: string
    nombre: string
    recinto: string
    instalacion: string
    bankInformation: BankInformation
    paymentReference: PaymentReference
}

export type HomeCreateVisitProps = {
    window: string
    icon: IconName
}
