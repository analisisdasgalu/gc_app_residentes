import { StyleSheet } from 'react-native'
import { colors } from '@gcMobile/theme/default.styles'

export const TabStyles = StyleSheet.create({
    container: {
        marginTop: 0,
        backgroundColor: colors.white,
        justifyContent: 'space-around',
    },
    buttonContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-around',
    },
    selectedTab: {
        width: '40%',
        height: 40,
        backgroundColor: colors.lightBlue,
        borderRadius: 10,
        margin: 5,
    },
    selectedTabText: {
        color: colors.darkGray,
        textAlign: 'center',
        paddingTop: 10,
        fontWeight: '800',
    },
    button: {
        width: '40%',
        height: 40,
    },
    buttonText: {
        color: colors.darkGray,
        textAlign: 'center',
        paddingTop: 10,
    },
})
