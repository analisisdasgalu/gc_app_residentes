import NotificationItem from '@gcMobile/components/NotificationItem'
import { AVISOS_TYPE } from '@gcMobile/components/NotificationItem/constants'
import { RootState } from '@gcMobile/store'
import { getRecibos } from '@gcMobile/store/Recibos/api'
import React from 'react'
import { ScrollView } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'

export const Recibos = () => {
    const dispatch = useDispatch()
    const { recibos } = useSelector((state: RootState) => state.recibos)
    const { currentHouseId, recintoId } = useSelector((state: RootState) => state.houseReducer)
    const { id } = useSelector((state: RootState) => state.userReducer)

    React.useEffect(() => {
        dispatch(
            getRecibos({
                residenteId: id,
                instalacionId: currentHouseId.toString(),
                recintoId: recintoId.toString(),
            }) as any
        )
    }, [])

    const handlePress = (id: string) => {
        console.log(id)
    }

    return (
        <ScrollView>
            {recibos.map((recibo) => (
                <NotificationItem
                    key={recibo.id}
                    title={`Recivo ${recibo.folio}`}
                    date={recibo.fecha}
                    type={AVISOS_TYPE.ESTADO_CUENTA}
                    handlePress={() => handlePress(recibo.id.toString())}
                />
            ))}
        </ScrollView>
    )
}
