export function trackEvent(analyticsEvent) {
  try {
    const pagData = (<any>global).pagData || []
    const push = (event) => {
      pagData.push(event)
    }

    const pageLoadRe = /_Pageload$/

    if (pagData.length) {
      const latest: string = pagData[pagData.length - 1]?.context?.eventAction
      const current: string = analyticsEvent?.context?.eventAction

      if (pageLoadRe.exec(current)) {
        // Pageload but not 2 in a row
        if (current !== latest) {
          push(analyticsEvent)
        }
      } else {
        // Not a pageload so allow duplicates
        push(analyticsEvent)
      }
    } else {
      // First event
      push(analyticsEvent)
    }
  } catch (e) {
    console.log('Failed to send analytics event', e)
  }
}
