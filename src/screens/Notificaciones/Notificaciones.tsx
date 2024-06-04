import React, { useEffect } from 'react'
import { View, Text, ScrollView } from 'react-native'
import { container } from './constants'
import NotificationItem from '@gcMobile/components/NotificationItem'
import { useDispatch } from 'react-redux'
import { clearBadgeCount } from '@gcMobile/store/Notificaciones'

export const Notificaciones = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(clearBadgeCount())
    }, [])

    return (
        <ScrollView contentContainerStyle={container}>
            <NotificationItem title="Pago cuota de mantenimiento" date="30 May 2024" body="lorem ipsu dolor...." />
        </ScrollView>
    )
}
