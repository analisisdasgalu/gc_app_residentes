import { useState } from 'react'
import { StyleSheet, ViewStyle } from 'react-native'
import { colors, fonts } from '../../../theme/default.styles'
import { base_url } from '@gcMobile/components/Auth/constants'

import AsyncStorage from '@react-native-async-storage/async-storage'
import { LOCAL_STORAGE } from '@gcMobile/util/constants'

export const saveToken = async (tokenData: string) => {
    try {
        await AsyncStorage.setItem('@token', JSON.stringify({ access_toke: tokenData }))
    } catch (error) {
        throw error
    }
}

export const getIsntalaciones = async (instalaciones: string) => {
    const url = `${base_url}/instalaciones/getAll/index.php?ids="${instalaciones}"`
    return fetch(url)
}

export const handleLinkPress = () => {
    console.log('Enlace ')
}
export const logout = async () => {
    const response = await fetch(`${base_url}/?logout`, {})
    AsyncStorage.removeItem(LOCAL_STORAGE.USER_CREDENTIALS)
    if (response.status === 200) {
        return true
    }
    return false
}
export const InitializeConnection = async (customerCode: string) => {
    const formdata = new FormData()
    formdata.append('prefix', 'u579469339')
    formdata.append('code', customerCode)
    const requestOptions = {
        method: 'POST',
        body: formdata,
    }
    return fetch(`${base_url}`, requestOptions)
}

export const authenticate = async (email: string, password: string) => {
    const formdata = new FormData()
    formdata.append('email', email)
    formdata.append('password', password)

    const requestOptions = {
        method: 'POST',
        body: formdata,
        Headers: {
            'content-type': 'multipart/form-data',
        },
    }
    return fetch(`${base_url}/?login`, requestOptions)
}

export const useStyles = () => {
    const [emailStyles, setEmailStyles] = useState({
        email: colors.gray,
        regexState: false,
    })

    const [passwordStyles, setPasswordStyles] = useState({
        password: colors.gray,
        regexState: false,
    })
    const [clicked, setClicked] = useState(false)

    return {
        emailStyles,
        setEmailStyles,

        passwordStyles,
        setPasswordStyles,

        clicked,
        setClicked,
    }
}

const marginTop20 = {
    marginTop: -20,
}
const marginBottom20 = {
    marginBottom: -20,
}
const justifyContentCenter: ViewStyle = {
    justifyContent: 'center',
}
const alignItemsCenter: ViewStyle = {
    alignItems: 'center',
}

export const loginScreenStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
    },
    rowImage: {
        flex: 0.1,
        backgroundColor: colors.white,
        justifyContent: 'center',
        flexDirection: 'row',
        marginBottom: '20%',
        paddingTop: '5%',
    },
    imageStyles: {
        width: 100,
        height: 100,
        borderRadius: 50,
        borderWidth: 1,
        borderColor: colors.gray,
    },

    row: {
        flex: 0.18,
        backgroundColor: colors.white,
        justifyContent: 'center',
        flexDirection: 'row',
        marginBottom: '10%',
    },
    rowText: {
        flex: 0.05,
        backgroundColor: colors.white,
        justifyContent: 'center',
        flexDirection: 'row',
    },
    label: {
        fontSize: 12,
        color: colors.gray,
        textAlign: 'center',
    },
})
