import { createAnalyticsClickEvent } from './createAnalyticsClickEvent'
import { setEnvironment } from './analyticsState'
import { IAnalyticsClickEventTemplate } from './AnalyticsEventTemplates'

describe('create Analytics test Click Event', () => {
  const HOME_ONECLICKSECTION_CLICK: IAnalyticsClickEventTemplate = {
    page: 'home',
    action: 'PAGFinder_Generic_Click',
    clickElementName: 'oneclicksection',
    clickElementType: 'link'
  }
  setEnvironment('K')
  it('should create the event', () => {
    // Arrange
    const event = HOME_ONECLICKSECTION_CLICK
    const language = 'en'
    const applicationId = 'carsales'
    const marketPlace = 'US'

    const clickData = {
      clickElementType: 'link',
      clickElementId: '911',
      clickElementName: 'oneclicksection',
      targetUrl: 'https://finder.porsche.com/de/de_DE/search/list?modelSeriesKeys=911'
    }

    const expectation = {
      context: {
        eventAction: 'PAGFinder_Generic_Click',
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
      componentClick: clickData
    }
    // Act
    const result = createAnalyticsClickEvent(event, language, marketPlace, applicationId, clickData)
    // Assert
    expect(result).toMatchObject(expectation)
  })
})
