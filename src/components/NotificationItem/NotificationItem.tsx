import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { NotificationItemProps, container, dateContainer, titleContainer } from './constants'
import { fonts } from '@gcMobile/theme/default.styles'
import { useNavigation } from '@react-navigation/native'
import { VIEWS } from '@gcMobile/navigation/constants'

export const NotificationItem = ({ id, title, date, body }: NotificationItemProps) => {
    const navigation = useNavigation<any>()
    const handlePress = () => {
        navigation.navigate(VIEWS.READ_NOTIFICATION, { id, title, body })
    }

    return (
        <TouchableOpacity style={container} onPress={handlePress}>
            <View style={titleContainer}>
                <Text style={{ fontSize: fonts.text_subtitle }}>{title}</Text>
            </View>
            <View style={dateContainer}>
                <Text style={{ fontSize: fonts.bodyText3 }}>{date}</Text>
            </View>
        </TouchableOpacity>
    )
}
