import React from 'react'
import { View, Text, ScrollView } from 'react-native'
import { ReadNotificationProps, readNotification, readNotificationBody, readNotificationHeader } from '../constants'
import { colors, fonts } from '@gcMobile/theme/default.styles'

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
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, debitis recusandae in ut quibusdam
                    voluptatem est illum at saepe maiores harum officia nobis, quaerat similique rerum sit asperiores
                    veritatis cupiditate! Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus eveniet
                    accusamus culpa, eum totam beatae corrupti illum quis incidunt deleniti alias atque laboriosam porro
                    autem voluptas iure minima? Magni, dolorum.
                </Text>
            </View>
        </View>
    )
}
