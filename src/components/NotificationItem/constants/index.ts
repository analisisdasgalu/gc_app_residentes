import { colors } from '@gcMobile/theme/default.styles'
import { ViewStyle } from 'react-native'

export type NotificationItemProps = {
    title: string
    date: string
}

export const container: ViewStyle = {
    width: '100%',
    backgroundColor: colors.white,
}

export const titleContainer: ViewStyle = {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    padding: 10,
    borderLeftWidth: 7,
    borderLeftColor: colors.cherry,
}

export const dateContainer: ViewStyle = {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    padding: 10,
    borderLeftWidth: 7,
    borderLeftColor: colors.cherry,
}
