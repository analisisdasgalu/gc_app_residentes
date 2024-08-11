import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import { HomeCardProps, HomeCreateVisitProps } from './types'
import { View, Text, Image } from 'react-native'
import { add_visit_button_styles, Generate_Visit_Styles, heade_container_styles } from './constants'
import CircularButton from '@gcMobile/components/CircularButton'
import { circularBtnStyles } from '@gcMobile/components/CircularButton/constants'
import { fonts } from '@gcMobile/theme/default.styles'

const HeaderCard = (props: HomeCardProps) => {
    return (
        <View style={[heade_container_styles]}>
            <View>
                {/* Header */}
                <Image source={{ uri: props.imageUrl }} width={100} height={100} />
                <View>
                    <Text>{props.nombre}</Text>
                    <Text>{props.instalacion}</Text>
                </View>
            </View>
            <View>
                {/* Body */}
                <Text>Datos bancarios de: {props.recinto}</Text>
                <View>
                    <Text>Banco:</Text>
                    <Text>{props.bankInformation.bankName}</Text>
                </View>
                <View>
                    <Text>Cuenta:</Text>
                    <Text>{props.bankInformation.accountNumber}</Text>
                </View>
                <View>
                    <Text>CLABE:</Text>
                    <Text>{props.bankInformation.CLABE}</Text>
                </View>
                <Text>Referencias de pago</Text>
                <View>
                    <Text>Bancaria:</Text>
                    <Text>{props.paymentReference.targetBank}</Text>
                </View>
                <View>
                    <Text>Concepto:</Text>
                    <Text>{props.paymentReference.reference}</Text>
                </View>
                <View>
                    <Text>Centavos:</Text>
                    <Text>{props.paymentReference.cents}</Text>
                </View>
            </View>
        </View>
    )
}

const HomeCreateVisit = (props: HomeCreateVisitProps) => {
    return (
        <View style={[Generate_Visit_Styles]}>
            <View style={[add_visit_button_styles]}>
                <CircularButton styles={circularBtnStyles.container} window={props.window} icon={props.icon} />
            </View>
            <View style={[add_visit_button_styles]}>
                <Text style={[{ fontSize: fonts.bodyText1 }]}>Generar visita</Text>
            </View>
        </View>
    )
}

export const Home = () => {
    return (
        <ScrollView>
            <HeaderCard
                imageUrl="https://via.placeholder.com/150"
                nombre="Nombre"
                recinto="Recinto"
                instalacion="Instalacion"
                bankInformation={{
                    bankName: 'Banamex',
                    accountNumber: '1234567890',
                    CLABE: '123456789012345678',
                }}
                paymentReference={{
                    targetBank: 'Banamex',
                    reference: 'Pago de servicios',
                    cents: '0.00',
                }}
            />
            <HomeCreateVisit window="VisitScreen" icon="plus" />
        </ScrollView>
    )
}
