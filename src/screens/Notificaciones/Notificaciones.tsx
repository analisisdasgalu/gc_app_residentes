import React from 'react'
import { View, Text, ScrollView } from 'react-native'
import { container } from './constants'
import NotificationItem from '@gcMobile/components/NotificationItem'

export const Notificaciones = () => {
    return (
        <ScrollView contentContainerStyle={container}>
            <NotificationItem title="Pago cuota de mantenimiento" date="30 May 2024" />
        </ScrollView>
    )
}
