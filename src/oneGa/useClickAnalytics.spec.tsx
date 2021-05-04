import React from 'react'
import { useClickAnalytics } from './useClickAnalytics'
import { renderHook } from '@testing-library/react-hooks'
import { setEnvironment } from './analyticsState'
import { IAnalyticsClickEventTemplate } from './AnalyticsEventTemplates'

describe('create Analytics Click Event', () => {
  const HOME_ONECLICKSECTION_CLICK: IAnalyticsClickEventTemplate = {
    page: 'home',
    action: 'PAGFinder_Generic_Click',
    clickElementName: 'oneclicksection',
    clickElementType: 'link'
  }
  beforeEach(() => {
    // eslint-disable-next-line
    window['pagData'] = []
    setEnvironment('K')
  })

  it('should create the event after triggering the click handler', () => {
    // Arrange
    const expectation = {
      context: {
        eventAction: 'PAGFinder_Generic_Click'
      }
    }

    // Act
    const { result } = renderHook(() => useClickAnalytics(HOME_ONECLICKSECTION_CLICK), {
      wrapper: ({ children }) => <div>{children}</div>
    })

    result.current('911', 'https://finder.porsche.com/de/de_DE/search/list?modelSeriesKeys=911')

    // Assert
    // eslint-disable-next-line
    expect(window['pagData'][0]).toMatchObject(expectation)
  })
})
