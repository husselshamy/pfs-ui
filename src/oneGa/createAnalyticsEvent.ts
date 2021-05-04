import { IAnalyticsEventTemplate } from './AnalyticsEventTemplates'
import { IAnalyticsEvent } from './IAnalyticsEvent'
import { isLoggedIn, getEnvironment } from './analyticsState'

export const createAnalyticsEvent = (
  template: IAnalyticsEventTemplate,
  language: string,
  country: string,
  applicationId: string
): IAnalyticsEvent => {
  const deviceBrowserOrientation = window.innerWidth > window.innerHeight ? 'l' : 'p'

  if (!template) {
    throw new Error('Event template is undefined')
  }

  return {
    context: {
      eventAction: template.action,
      applicationId,
      language,
      country: country.toUpperCase(),
      environment: getEnvironment(),
      timestamp: new Date().toISOString(),
      currency: country === 'us' ? 'USD' : 'CAD',
      server: window.location.hostname
    },
    visitor: {
      loginStatus: isLoggedIn(),
      deviceBrowserHeight: window.innerHeight.toString(),
      deviceBrowserWidth: window.innerWidth.toString(),
      deviceBrowserOrientation,
      useragent: window.navigator.userAgent
    },
    pageExperience: {
      pageId: window.location.href,
      pageName: template.page
    }
  }
}
