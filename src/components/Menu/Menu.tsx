import React, { useEffect } from 'react'
import { Alert, StyleSheet, TouchableOpacity } from 'react-native'
import { Entypo } from '@expo/vector-icons'
import { colors } from '@gcMobile/theme/default.styles'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@gcMobile/store'
import { StackActions, useNavigation } from '@react-navigation/native'
import { VIEWS } from '@gcMobile/navigation/constants'
import { setMenuOpen } from '@gcMobile/store/UI'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 10,
    },
    button: {
        alignItems: 'center',
        backgroundColor: colors.blue,
    },
    countContainer: {
        alignItems: 'center',
        padding: 10,
    },
})

export const Menu = () => {
    const navigation = useNavigation()
    const dispatch = useDispatch()
    const [open, setOpen] = React.useState<boolean>(false)
    const { access_token } = useSelector((state: RootState) => state.userReducer)
    const { menuOpen } = useSelector((state: RootState) => state.uiReducer)

    useEffect(() => {}, [])

    useEffect(() => {
        setOpen(menuOpen)
    }, [menuOpen])

    const onPress = () => {
        setOpen((prev) => !prev)
        dispatch(setMenuOpen(true))
        if (open && navigation.canGoBack()) {
            navigation.goBack()
        } else {
            navigation.navigate(VIEWS.MENU as never)
        }
    }

    return (
        <>
            {access_token != '' && (
                <TouchableOpacity style={styles.button} onPress={onPress}>
                    {!open && <Entypo name="menu" size={32} color="white" />}
                    {open && <Entypo name="cross" size={32} color="white" />}
                </TouchableOpacity>
            )}
        </>
    )
}
