import { trackEvent } from './trackEvent'

interface IOneGAGlobal extends NodeJS.Global {
  pagData: []
}

declare const global: IOneGAGlobal

describe('Track events', () => {
  global.pagData = []

  beforeEach(() => {
    global.pagData = []
  })

  const loadEvent = {
    context: {
      eventAction: 'PAGFinder_Generic_Pageload'
    }
  }

  const clickEvent = {
    context: {
      eventAction: 'PAGFinder_Generic_Click'
    }
  }

  it('Should be able to track events', () => {
    trackEvent(loadEvent)
    trackEvent(clickEvent)

    expect(global.pagData).toEqual([loadEvent, clickEvent])
  })

  it('Should be able to deal with duplicate events', () => {
    trackEvent(loadEvent)
    trackEvent(loadEvent)

    trackEvent(clickEvent)

    expect(global.pagData).toEqual([loadEvent, clickEvent])
  })

  it('Should be able to track events without context', () => {
    expect(() => {
      trackEvent({})
    }).not.toThrow()
  })
})
