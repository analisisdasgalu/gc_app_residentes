import { ViewStyle } from 'react-native'
import { colors } from '@gcMobile/theme/default.styles'

export type ReadNotificationProps = {
    title: string
    body: string
}

export const readNotification: ViewStyle = {
    width: '100%',
    height: '100%',
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: 'white',
}

export const container: ViewStyle = {
    justifyContent: 'center',
    alignItems: 'center',
}

export const readNotificationHeader: ViewStyle = {
    width: '100%',
    height: '15%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: colors.lightGray,
}

export const readNotificationBody: ViewStyle = {
    width: '100%',
    height: '85%',
    padding: 10,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    // alignItems: 'center',
    backgroundColor: 'white',
}
export const readNotificationAttachments: ViewStyle = {
    width: '100%',
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    // alignItems: 'center',
    backgroundColor: 'white',
}

export const AttachmentIcon: any = {
    marginLeft: '2%',
    fontSize: 24,
    color: colors.gray,
}
