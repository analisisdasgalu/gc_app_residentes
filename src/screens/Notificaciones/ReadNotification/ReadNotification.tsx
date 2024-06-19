import React from 'react'
import { View, Text } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'
import {
    AttachmentIcon,
    readNotification,
    readNotificationAttachments,
    readNotificationBody,
    readNotificationHeader,
} from '../constants'
import { colors, fonts } from '@gcMobile/theme/default.styles'
import { sanitizeString, saveToCameraRoll } from '@gcMobile/util'
import { TouchableOpacity } from 'react-native-gesture-handler'

export const ReadNotification = ({ route, navigation }: any) => {
    const { title, body } = route.params
    const attachment = 'avisos/1_6_6669f5dc532b4.pdf'

    const handleAttachFile = (uri: string, url: string) => {
        const imageRegex = /\.(jpeg|jpg|gif|png)$/
        const docRegex = /\.(pdf|doc|docx|xls|xlsx)$/
        if (uri.match(imageRegex)) {
            saveToCameraRoll(url, 'Imagen guardada en galería')
        } else if (uri.match(docRegex)) {
            // -- saveToCameraRoll(uri, 'Documento guardado en galería')
            console.log('Document detected')
        }
    }

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
                <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
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
                <TouchableOpacity
                    style={readNotificationAttachments}
                    onPress={() =>
                        handleAttachFile(attachment, 'https://gcdemo.dasgalu.net/avisos/1_6_6669f5dc532b4.png')
                    }
                >
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
                        <FontAwesome name="paperclip" style={AttachmentIcon} />
                    </Text>
                    <Text
                        style={[
                            {
                                fontFamily: 'Roboto',
                                fontSize: fonts.bodyText3,
                                fontWeight: '100',
                                color: colors.darkGray,
                                marginLeft: '2%',
                                paddingTop: 5,
                            },
                        ]}
                    >
                        {attachment.split('/')[1]}
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
