import React from 'react'
import { View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { container } from './constantes'
import NotificationItem from '@gcMobile/components/NotificationItem'
import { VIEWS } from '@gcMobile/navigation/constants'
import { useNavigation } from '@react-navigation/native'
import RNFetchBlob from 'rn-fetch-blob'
import { ALERT_TYPE, Toast } from 'react-native-alert-notification'
import { base_web_server } from '@gcMobile/components/Auth/constants'

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

    const handlePress = (path: string) => {
        try {
            RNFetchBlob.config({
                fileCache: true,
                appendExt: 'pdf',
            })
                .fetch('GET', `${base_web_server}${path}`)
                .then((res) => {
                    navigation.navigate(VIEWS.PDF_VIEWER, { uri: res.path() })
                })
                .catch((error) => console.log(error))
        } catch (error) {
            Toast.show({
                type: ALERT_TYPE.DANGER,
                textBody: 'No se pudo obtener el archivo.',
            })
        }
    }

    return (
        <ScrollView contentContainerStyle={container}>
            {edoCuenta.map((item) => (
                <NotificationItem
                    key={Math.random().toString(36).substring(7)}
                    title={item.titulo}
                    date={item.fecha}
                    handlePress={() => handlePress(item.path)}
                />
            ))}
        </ScrollView>
    )
}
