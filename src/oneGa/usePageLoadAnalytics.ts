import { useCallback } from 'react'
import { IAnalyticsPageLoadEventTemplate } from './AnalyticsEventTemplates'
import { createAnalyticsPageLoadEvent, IAnalyticsPageLoadEvent } from './createAnalyticsPageLoadEvent'
import {
  getApplication,
  getCarPayload,
  getComponentForm,
  getFinancialPayload,
  getLanguage,
  getMarketplace,
  getPartner,
  setCurrentPage
} from './analyticsState'
import { trackEvent } from './trackEvent'

export const pageLoadEvent = (
  event: IAnalyticsPageLoadEventTemplate,
  componentForm?,
  applicationId?
): IAnalyticsPageLoadEvent =>
  createAnalyticsPageLoadEvent(
    event,
    getLanguage(),
    getMarketplace(),
    applicationId ?? getApplication(),
    getCarPayload(),
    getPartner(),
    getFinancialPayload(),
    componentForm ?? getComponentForm()
  )

export const trackPageLoadEvent = (event: IAnalyticsPageLoadEventTemplate, componentForm?, applicationId?) => {
  try {
    trackEvent(pageLoadEvent(event, componentForm, applicationId))

    setCurrentPage(event.page)
  } catch (e) {
    console.log('Failed to send analytics event', e)
  }
}

export const usePageLoadAnalytics = (event: IAnalyticsPageLoadEventTemplate) => {
  return useCallback(() => trackPageLoadEvent(event), [event])
  // data is not included in dependencies because the object reference might change with each render,
  // but we don't want to create another analytics event
}
