import React, { useEffect } from 'react'
import { View, Text, ScrollView } from 'react-native'
import { container } from './constants'
import NotificationItem from '@gcMobile/components/NotificationItem'
import { useDispatch, useSelector } from 'react-redux'
import { clearBadgeCount } from '@gcMobile/store/Notificaciones'
import { getAvisos } from '@gcMobile/store/Notificaciones/api'
import { RootState } from '@gcMobile/store'
import { SafeAreaView } from 'react-native-safe-area-context'
import { colors } from '@gcMobile/theme/default.styles'

export const Notificaciones = () => {
    const dispatch = useDispatch()
    const { avisos } = useSelector((state: RootState) => state.notificacionesReducer)
    const { recintoId } = useSelector((state: RootState) => state.houseReducer)

    useEffect(() => {
        dispatch(clearBadgeCount())
        dispatch(getAvisos(`${recintoId}`) as any)
    }, [])

    return (
        <SafeAreaView>
            <ScrollView contentContainerStyle={container}>
                {avisos.map((item, index) => (
                    <NotificationItem
                        key={index}
                        id={item.id}
                        title={item.titulo}
                        date={item.fecha}
                        body={item.descripcion}
                    />
                ))}
            </ScrollView>
        </SafeAreaView>
    )
}
