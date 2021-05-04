export { usePageLoadAnalytics, trackPageLoadEvent } from './usePageLoadAnalytics'
export { useClickAnalytics, trackClickEvent } from './useClickAnalytics'
export { initializeAnalytics } from './initializeAnalytics'

export { trackEvent } from './trackEvent'

export {
  setLanguage,
  setLoggedIn,
  setApplication,
  getApplication,
  setEnvironment,
  setMarketplace,
  setFinancialPayload,
  getFinancialPayload,
  carAnalytics,
  setCarPayload,
  setPartner,
  getPartner,
  setVehiclePrice,
  setFinProduct,
  setComponentForm,
  getComponentForm,
  setVehicleId,
  setCurrentPage,
  getCurrentPage
} from './analyticsState'

export type { IAnalyticsCarProps, IAnalyticsFinancialProductProps, IComponentForm, IFormField } from './IAnalyticsEvent'
export type { AnalyticsApp } from './analyticsState'
export type { IAnalyticsPageLoadEventTemplate, ElementType } from './AnalyticsEventTemplates'
export type { IAnalyticsClickEventTemplate } from './AnalyticsEventTemplates'

export type { ITrackClickEventsParams } from './useClickAnalytics'
