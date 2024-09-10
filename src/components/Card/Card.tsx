import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { cardStyles, popOverMenu } from './constants'
import { colors } from '@gcMobile/theme/default.styles'
import { getTipoVisitaIcon } from '@gcMobile/util'
import { useNavigation } from '@react-navigation/native'
import { Entypo } from '@expo/vector-icons'

import { VIEWS } from '@gcMobile/navigation/constants'
import { PopOverMenu } from '../PopOverMenu/PopOverMenu'
import { useDispatch } from 'react-redux'
import { deleteVisitaByUniqueId } from '@gcMobile/store/Visitas/api'

export interface ICardProps {
    nombre: string
    desde: string
    hasta: string
    tipo: string
    acceso: string
    avisos: string
    emailAutor: string
    tipo_visita: string
    uniqueID: string
    estado: string
    index: number
    deleteCallback: () => void
}

export default function Card({
    nombre,
    desde,
    hasta,
    tipo,
    acceso,
    avisos,
    emailAutor,
    tipo_visita,
    uniqueID,
    estado,
    index,
    deleteCallback,
}: ICardProps) {
    const navigation = useNavigation<any>()
    const dispatch = useDispatch()
    const [showMenu, setOpenMenu] = React.useState<boolean>(false)

    const handleMenuIconPressed = (route: string) => {
        setOpenMenu(false)
        switch (route) {
            case 'qrcode':
                navigation.navigate(VIEWS.QR_DETAILS, { uniqueID })
                break
            case 'pencil':
                navigation.navigate(VIEWS.CREATE_VISITA, { uniqueID })
                break
            case 'trash':
                dispatch(deleteVisitaByUniqueId(uniqueID, deleteCallback) as any)
                break
            default:
                break
        }
    }

    return (
        <View style={cardStyles.container}>
            {showMenu && (
                <PopOverMenu
                    iconList={popOverMenu.map((item) => ({
                        ...item,
                        onPressed: () => handleMenuIconPressed(item.name),
                    }))}
                />
            )}
            <View style={cardStyles.row}>
                <View
                    style={{
                        flex: 0.2,
                        flexDirection: 'column',
                        borderRightWidth: 1,
                        borderColor: colors.gray,
                        marginRight: '1%',
                    }}
                >
                    <View
                        style={{
                            flexDirection: 'column',
                            flex: 0.4,
                            alignItems: 'center',
                        }}
                    >
                        <View
                            style={{
                                width: '35%',
                                minWidth: '20%',
                                borderRadius: 50,
                                backgroundColor: getTipoVisitaIcon(tipo_visita),
                            }}
                        >
                            <Text>&nbsp;</Text>
                        </View>
                    </View>
                    <View
                        style={{
                            flexDirection: 'column',
                            alignItems: 'center',
                            flex: 0.25,
                        }}
                    >
                        <Text style={{ fontSize: 9, color: colors.darkGray }}>{tipo_visita}</Text>
                    </View>
                </View>

                <View style={{ flexDirection: 'column', flex: 1 }}>
                    <View
                        style={{
                            flexDirection: 'row',
                            flex: 0.16,
                        }}
                    >
                        <View
                            style={{
                                width: '100%',
                            }}
                        >
                            <View
                                style={{
                                    flex: 1,
                                    flexDirection: 'row',
                                    justifyContent: 'space-between',
                                }}
                            >
                                <Text
                                    style={{
                                        color: colors.gray,
                                        marginRight: '5%',
                                        fontSize: 9,
                                    }}
                                >{`${index + 1})`}</Text>
                                <Text
                                    style={{
                                        color: colors.darkGray,
                                        fontSize: 10,
                                        textAlign: 'left',
                                        width: '70%',
                                    }}
                                >
                                    {nombre}
                                </Text>
                                <TouchableOpacity
                                    style={{
                                        right: 0,
                                    }}
                                    onPress={() => {
                                        // ---> navigation.navigate(VIEWS.QR_DETAILS, { uniqueID })
                                        setOpenMenu((prev) => !prev)
                                    }}
                                >
                                    <Entypo name="dots-three-vertical" style={{ fontSize: 12, color: colors.gray }} />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <View
                        style={{
                            flexDirection: 'row',
                            flex: 0.16,
                        }}
                    >
                        <View
                            style={{
                                width: '25%',
                            }}
                        >
                            <Text style={cardStyles.descriptionText}>Desde:</Text>
                        </View>

                        <View
                            style={{
                                width: '35%',
                            }}
                        >
                            <Text style={{ color: colors.darkGray, fontSize: 10 }}>{desde?.split('T')[0]}</Text>
                        </View>
                        <View
                            style={{
                                width: '15%',
                            }}
                        >
                            <Text style={cardStyles.descriptionText}>a las:</Text>
                        </View>
                        <View
                            style={{
                                width: '25%',
                            }}
                        >
                            <Text style={{ color: colors.darkGray, fontSize: 10 }}>{desde?.split('T')[1]}</Text>
                        </View>
                    </View>
                    <View
                        style={{
                            flexDirection: 'row',
                            flex: 0.16,
                        }}
                    >
                        <View
                            style={{
                                width: '25%',
                            }}
                        >
                            <Text style={cardStyles.descriptionText}>Hasta:</Text>
                        </View>

                        <View
                            style={{
                                width: '35%',
                            }}
                        >
                            <Text style={{ color: colors.darkGray, fontSize: 10 }}>{hasta?.split('T')[0]}</Text>
                        </View>
                        <View
                            style={{
                                width: '15%',
                            }}
                        >
                            <Text style={cardStyles.descriptionText}>a las:</Text>
                        </View>
                        <View
                            style={{
                                width: '25%',
                            }}
                        >
                            <Text style={{ color: colors.darkGray, fontSize: 10 }}>{hasta?.split('T')[1]}</Text>
                        </View>
                    </View>
                    <View
                        style={{
                            flexDirection: 'row',
                            flex: 0.16,
                        }}
                    >
                        <View
                            style={{
                                width: '25%',
                            }}
                        >
                            <Text style={cardStyles.descriptionText}>Tipo:</Text>
                        </View>

                        <View
                            style={{
                                width: '30%',
                            }}
                        >
                            <Text style={{ color: colors.darkGray, fontSize: 10 }}>{tipo}</Text>
                        </View>
                        <View
                            style={{
                                width: '22%',
                            }}
                        >
                            <Text style={cardStyles.descriptionText}>Acceso:</Text>
                        </View>
                        <View
                            style={{
                                width: '22%',
                            }}
                        >
                            <Text style={{ color: colors.darkGray, fontSize: 10 }}>
                                {acceso ? `Unico` : `Multiple`}
                            </Text>
                        </View>
                    </View>

                    <View
                        style={{
                            flexDirection: 'row',
                            flex: 0.16,
                        }}
                    >
                        <View
                            style={{
                                width: '25%',
                            }}
                        >
                            <Text style={cardStyles.descriptionText}>Avisos:</Text>
                        </View>

                        <View
                            style={{
                                width: '30%',
                            }}
                        >
                            <Text style={{ color: colors.darkGray, fontSize: 10 }}>{avisos ? `Si` : `No`}</Text>
                        </View>
                        <View
                            style={{
                                width: '22%',
                            }}
                        >
                            <Text style={cardStyles.descriptionText}>Estado:</Text>
                        </View>
                        <View
                            style={{
                                width: '22%',
                            }}
                        >
                            <Text style={{ color: colors.darkGray, fontSize: 10 }}>
                                {estado ? `Activo` : `Vencido`}
                            </Text>
                        </View>
                    </View>
                    <View
                        style={{
                            flexDirection: 'row',
                            flex: 0.16,
                        }}
                    >
                        <View
                            style={{
                                width: '25%',
                            }}
                        >
                            <Text style={cardStyles.descriptionText}>Autor:</Text>
                        </View>
                        <View
                            style={{
                                width: '75%',
                            }}
                        >
                            <Text style={{ color: colors.darkGray, fontSize: 10 }}>{emailAutor}</Text>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )
}
