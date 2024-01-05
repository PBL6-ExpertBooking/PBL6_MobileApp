import { t } from 'i18next'
import { popupUtils } from '../../../utils'
import { jobService } from '../../../services'
import { RootNavigate } from '../../../navigation'
import { SCREEN } from '../../../constants'

export async function post({
  selectedMajor,
  title,
  descriptions,
  price,
  city,
  district,
  ward,
  details,
  setLoading,
  completeCallback = () => {},
}) {
  popupUtils.confirm.popupConfirm({
    title: t('confirmation') + '!!!',
    message: t('postNewJobMessage'),
    buttonText: t('post'),
    callback: async () => {
      setLoading(true)
      popupUtils.hidePopup()
      try {
        await jobService.addJobRequest({
          major_id: selectedMajor._id,
          title,
          descriptions,
          address: { city, district, ward, other_detail: details },
          price,
        })
        popupUtils.success.popupMessage({
          title: t('success'),
          message: t('createJobRequestSuccess'),
          callback: () => {
            popupUtils.hidePopup()
            completeCallback()
          },
        })
      } catch (err) {
        popupUtils.error.popupMessage({
          title: t('failure'),
          message:
            t('createJobRequestFail') + '\nMessage: ' + err.response.data.message,
        })
      } finally {
        setLoading(false)
      }
    },
    cancelCallback: () => {
      popupUtils.hidePopup()
    },
  })
}

export async function edit({
  id,
  selectedMajor,
  title,
  descriptions,
  price,
  city,
  district,
  ward,
  details,
  setLoading,
  completeCallback = () => {},
}) {
  popupUtils.confirm.popupConfirm({
    title: t('confirmation') + '!!!',
    message: t('editJobMessage'),
    buttonText: t('edit'),
    callback: async () => {
      setLoading(true)
      popupUtils.hidePopup()
      try {
        await jobService.editJob({
          id,
          major_id: selectedMajor._id,
          title,
          descriptions,
          address: { city, district, ward, other_detail: details },
          price,
        })
        popupUtils.success.popupMessage({
          title: t('success'),
          message: t('editJobRequestSuccess'),
          callback: () => {
            popupUtils.hidePopup()
            completeCallback()
          },
        })
        RootNavigate.navigate(SCREEN.DASHBOARD)
      } catch {
        popupUtils.error.popupMessage({
          title: t('failure'),
          message: t('editJobRequestFail'),
        })
      } finally {
        setLoading(false)
      }
    },
    cancelCallback: () => {
      popupUtils.hidePopup()
    },
  })
}
