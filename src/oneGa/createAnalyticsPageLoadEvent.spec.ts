import { createAnalyticsPageLoadEvent } from './createAnalyticsPageLoadEvent'

import { setEnvironment } from './analyticsState'
import { IAnalyticsPageLoadEventTemplate } from './AnalyticsEventTemplates'
import { IAnalyticsCarProps } from './IAnalyticsEvent'

describe('create  Analytics Event test', () => {
  const HOME_LOAD: IAnalyticsPageLoadEventTemplate = {
    page: 'home',
    action: 'PAGFinder_Generic_Pageload'
  }

  setEnvironment('K')
  it('should create the event', () => {
    // Arrange
    const event = HOME_LOAD
    const language = 'en'
    const applicationId = 'carsales'
    const marketPlace = 'US'

    const expectation = {
      context: {
        eventAction: 'PAGFinder_Generic_Pageload',
        applicationId: 'carsales',
        language,
        country: 'US',
        environment: 'K',
        server: 'localhost'
      },
      visitor: {
        loginStatus: false,
        deviceBrowserHeight: '768',
        deviceBrowserWidth: '1024',
        deviceBrowserOrientation: 'l'
      },
      pageExperience: {
        pageId: 'http://localhost/',
        pageName: 'home'
      }
    }
    // Act
    const result = createAnalyticsPageLoadEvent(event, language, marketPlace, applicationId)
    // Assert
    expect(result).toMatchObject(expectation)
  })

  it('should create the event w/ car data when car data is given', () => {
    // Arrange
    const event = HOME_LOAD
    const language = 'en'
    const applicationId = 'carsales'
    const marketPlace = 'US'
    const data: IAnalyticsCarProps = {
      type: 'real_car',
      realcarStatus: 'used_car',
      vehicleId: '4646',
      modelCode: '',
      offerKey: '12345',
      modelName: ''
    }

    const expectation = {
      context: {
        eventAction: 'PAGFinder_Generic_Pageload',
        applicationId: 'carsales',
        language,
        country: 'US',
        environment: 'K',
        server: 'localhost'
      },
      visitor: {
        loginStatus: false,
        deviceBrowserHeight: '768',
        deviceBrowserWidth: '1024',
        deviceBrowserOrientation: 'l'
      },
      pageExperience: {
        pageId: 'http://localhost/',
        pageName: 'home'
      },
      car: data
    }
    // Act
    const result = createAnalyticsPageLoadEvent(event, language, marketPlace, applicationId, data)
    // Assert
    expect(result).toMatchObject(expectation)
  })
})
