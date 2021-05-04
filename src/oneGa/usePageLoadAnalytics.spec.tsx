import React from 'react'
import { IAnalyticsPageLoadEventTemplate } from './AnalyticsEventTemplates'
import { renderHook } from '@testing-library/react-hooks'

import { usePageLoadAnalytics } from './usePageLoadAnalytics'
import { setEnvironment } from './analyticsState'

describe('create Analytics PageLoad Event', () => {
  const HOME_LOAD: IAnalyticsPageLoadEventTemplate = {
    page: 'home',
    action: 'PAGFinder_Generic_Pageload'
  }

  beforeEach(() => {
    // eslint-disable-next-line
    window['pagData'] = []
    setEnvironment('K')
  })

  it('should create the event after triggering the click handler', () => {
    const expectation = {
      context: {
        eventAction: 'PAGFinder_Generic_Pageload'
      }
    }

    // Act
    const { result } = renderHook(() => usePageLoadAnalytics(HOME_LOAD), {
      wrapper: ({ children }) => <div>{children}</div>
    })

    result.current()

    // Assert
    // eslint-disable-next-line
    expect(window['pagData'][0]).toMatchObject(expectation)
  })
})
