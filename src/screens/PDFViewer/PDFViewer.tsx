import React from 'react'
import { Platform, View } from 'react-native'
import Pdf from 'react-native-pdf'
import { containerStyles, pdfViewerStyles } from './constants'
import RNFetchBlob from 'rn-fetch-blob'
import { ALERT_TYPE, Toast } from 'react-native-alert-notification'

export const PDFViewer = ({ route, navigation }: any) => {
    const { uri } = route.params

    return (
        <View style={containerStyles}>
            <Pdf source={{ uri: Platform.OS === 'android' ? `file://${uri}` : `${uri}` }} style={pdfViewerStyles} />
        </View>
    )
}
