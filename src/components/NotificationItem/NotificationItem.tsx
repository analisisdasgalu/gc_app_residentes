import React from 'react'
import { View, Text } from 'react-native'
import { NotificationItemProps, container, dateContainer, titleContainer } from './constants'
import { fonts } from '@gcMobile/theme/default.styles'

export const NotificationItem = ({ title, date }: NotificationItemProps) => {
    return (
        <View style={container}>
            <View style={titleContainer}>
                <Text style={{ fontSize: fonts.text_subtitle }}>{title}</Text>
            </View>
            <View style={dateContainer}>
                <Text style={{ fontSize: fonts.bodyText3 }}>{date}</Text>
            </View>
        </View>
    )
}
