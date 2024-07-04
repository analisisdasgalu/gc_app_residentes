import React from 'react'
import { View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { container } from './constantes'
import NotificationItem from '@gcMobile/components/NotificationItem'
import { VIEWS } from '@gcMobile/navigation/constants'
import { useNavigation } from '@react-navigation/native'

type EdoCuentaProps = {
    id: string
    path: string
    titulo: string
    fecha: string
}

export const EdoCuenta = () => {
    const navigation = useNavigation<any>()
    const [edoCuenta, setEdoCuenta] = React.useState<EdoCuentaProps[]>([
        {
            id: '1',
            titulo: 'Estado de cuenta 1',
            fecha: '2021-05-01',
            path: 'estados_cuenta/1_202406A3.pdf',
        },
    ])

    const handlePress = (id: string, title: string, path: string) => {
        navigation.navigate(VIEWS.EDO_CUENTA, { id, title, path })
    }

    return (
        <ScrollView contentContainerStyle={container}>
            {edoCuenta.map((item, index) => (
                <NotificationItem
                    key={Math.random().toString(36).substring(7)}
                    title={item.titulo}
                    date={item.fecha}
                    handlePress={() => handlePress(item.id, item.titulo, item.path)}
                />
            ))}
        </ScrollView>
    )
}
