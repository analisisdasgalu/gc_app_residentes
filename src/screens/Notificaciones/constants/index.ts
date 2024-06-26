import { ViewStyle } from 'react-native'
import { colors, fonts } from '@gcMobile/theme/default.styles'

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
    width: '80%',
    padding: 10,
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
    // alignItems: 'center',
    backgroundColor: 'white',
}

export const AttachmentIcon: any = {
    marginLeft: '2%',
    fontSize: 24,
    color: colors.gray,
}

export const IconStyle: any = {
    fontFamily: 'Roboto',
    fontSize: fonts.bodyText2,
    fontWeight: '200',
    color: colors.darkGray,
}

export const fileLabelStyle: any = {
    fontFamily: 'Roboto',
    fontSize: fonts.bodyText3,
    fontWeight: '100',
    color: colors.darkGray,
    marginLeft: '2%',
    paddingTop: 5,
}
