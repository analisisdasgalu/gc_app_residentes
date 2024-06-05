import React, { useEffect } from 'react'
import { TouchableOpacity, Text, View } from 'react-native'
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
    badge: {
        position: 'absolute',
        top: -10,
        right: 10,
        backgroundColor: colors.red,
        borderRadius: 50,
        width: 25,
        height: 25,
        justifyContent: 'center',
        alignItems: 'center',
        zindex: 1,
    },
}

export const NotificationBadge = () => {
    const navigation = useNavigation()
    const { access_token } = useSelector((state: RootState) => state.userReducer)
    const { badgeCount } = useSelector((state: RootState) => state.notificacionesReducer)

    const onPress = () => {
        navigation.navigate(VIEWS.NOTIFICACIONES as never)
    }

    return (
        <>
            {access_token != '' && (
                <TouchableOpacity style={styles.button as any} onPress={onPress}>
                    <Ionicons name="notifications" size={24} color={colors.white} />
                    {badgeCount > 0 && (
                        <View style={styles.badge as any}>
                            <Text style={[{ color: colors.white, fontSize: 12 }]}>{badgeCount}</Text>
                        </View>
                    )}
                </TouchableOpacity>
            )}
        </>
    )
}
