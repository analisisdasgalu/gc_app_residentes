import React from 'react'
import { View, Text, ScrollView } from 'react-native'
import { ReadNotificationProps, readNotification, readNotificationBody, readNotificationHeader } from '../constants'
import { colors, fonts } from '@gcMobile/theme/default.styles'
import { sanitizeString } from '@gcMobile/util'

export const ReadNotification = ({ route, navigation }: any) => {
    const { title, body } = route.params
    return (
        <View style={readNotification}>
            <View style={readNotificationHeader}>
                <Text
                    style={[
                        {
                            fontFamily: 'Roboto',
                            fontSize: fonts.text_subtitle,
                            fontWeight: '500',
                            color: colors.darkGray,
                        },
                    ]}
                >
                    {title}
                </Text>
            </View>
            <View style={readNotificationBody}>
                <Text
                    style={[
                        {
                            fontFamily: 'Roboto',
                            fontSize: fonts.bodyText2,
                            fontWeight: '200',
                            color: colors.darkGray,
                        },
                    ]}
                >
                    {sanitizeString(body)}
                </Text>
            </View>
        </View>
    )
}
