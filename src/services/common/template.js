import { popupUtils, storeUtils } from '../../utils'
import { RootNavigate } from '../../navigation'
import { SCREEN } from '../../constants'
import i18n from '../../config/i18n'

export async function templatePopupOnRejection(callback) {
  try {
    const result = await callback()
    return result
  } catch {
    storeUtils.clearTokens()
    popupUtils.success.popupMessage({
      title: i18n.t('information'),
      message: i18n.t('sessionExpireMessage'),
      showIcon: false,
      callback: async () => {
        popupUtils.hidePopup()
        RootNavigate.navigate(SCREEN.LOGIN)
      },
    })
  }
}
