import { StyleSheet } from 'react-native'
import { colors } from '@gcMobile/theme/default.styles'
import { filterPalette } from '@gcMobile/theme/default.styles'
export const FilterStyles = StyleSheet.create({
    container: {
        width: '100%',
    },
    filterContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
        paddingHorizontal: '10%',
        paddingTop: 5,
        backgroundColor: colors.red,
    },
    filterControls: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        paddingRight: 10,
        paddingTop: 5,
    },
    mainText: {
        color: colors.black,
        paddingRight: 10,
    },
    button: {
        height: 40,
        borderRadius: 30,
        paddingHorizontal: 10,
        marginHorizontal: 1,
    },
    buttonText: {
        textAlign: 'center',
        paddingTop: 10,
        color: colors.white,
    },

    columbiaBlue: {
        backgroundColor: '#5FA8D3',
    },
    indigoBlue: {
        backgroundColor: '#62B6CB',
    },
    moonstoneBlue: {
        backgroundColor: '#1B4965',
    },
    tabNotSelected: {
        backgroundColor: colors.lightGray2,
    },
})

export const colorFilters = ['#5FA8D3', '#62B6CB', '#1B4965']
