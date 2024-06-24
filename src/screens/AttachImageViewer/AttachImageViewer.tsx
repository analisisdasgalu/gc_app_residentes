import React from 'react'
import { View, Image } from 'react-native'
import ViewShot from 'react-native-view-shot'
import { container } from './constants'

export const AttachImageViewer = ({ route, navigation }: any) => {
    const { url } = route.params
    const ref = React.useRef<any>()
    return (
        <View style={container}>
            <ViewShot ref={ref}>
                <Image source={{ uri: url }} style={{ width: 250, height: 250 }} />
            </ViewShot>
        </View>
    )
}
