import { IAnalyticsClickEventTemplate } from './AnalyticsEventTemplates'
import { createAnalyticsClickEvent } from './createAnalyticsClickEvent'
import { useCallback } from 'react'
import {
  getCarPayload,
  getFinancialPayload,
  getLanguage,
  getMarketplace,
  getComponentForm,
  getApplication,
  getPartner,
  AnalyticsApp
} from './analyticsState'
import { trackEvent } from './trackEvent'

export interface ITrackClickEventsParams {
  clickElementId?: string
  targetUrl?: string
  componentForm?
  application?: AnalyticsApp
}

export const trackClickEvent = (event: IAnalyticsClickEventTemplate, params?: ITrackClickEventsParams) => {
  const { clickElementId, targetUrl, application, componentForm } = { ...params }
  try {
    const analyticsClickEvent = createAnalyticsClickEvent(
      event,
      getLanguage(),
      getMarketplace(),
      application ?? getApplication(),
      {
        clickElementId,
        targetUrl
      },
      getCarPayload(),
      getPartner(),
      getFinancialPayload(),
      componentForm ?? getComponentForm()
    )

    trackEvent(analyticsClickEvent)
  } catch (e) {
    console.log('Failed to send analytics event', e)
  }
}

export const useClickAnalytics = (event: IAnalyticsClickEventTemplate) => {
  return useCallback(
    (clickElementId: string, targetUrl?: string, componentForm?) => {
      trackClickEvent(event, { clickElementId, targetUrl, componentForm })
    },
    [event]
  )
}
