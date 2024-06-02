import React from 'react'
import { TouchableOpacity, TouchableOpacityComponent } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { colors } from '@gcMobile/theme/default.styles'
import { useNavigation } from '@react-navigation/native'
import { VIEWS } from '@gcMobile/navigation/constants'
import { useSelector } from 'react-redux'
import { RootState } from '@gcMobile/store'

const styles = {
    button: {
        alignItems: 'center',
        backgroundColor: colors.blue,
        marginTop: '3%',
    },
}

export const NotificationBadge = () => {
    const navigation = useNavigation()
    const { access_token } = useSelector((state: RootState) => state.userReducer)

    const onPress = () => {
        navigation.navigate(VIEWS.NOTIFICACIONES as never)
    }

    return (
        <>
            {access_token != '' && (
                <TouchableOpacity style={styles.button as any} onPress={onPress}>
                    <Ionicons name="notifications" size={24} color={colors.white} />
                </TouchableOpacity>
            )}
        </>
    )
}
