export const initializeAnalytics = (env: string) => {
  // eslint-disable-next-line
  window['dataLayer'] = []

  // eslint-disable-next-line
  window['pagData'] = []

  // eslint-disable-next-line
  window['oneGa'] = []

  void import(`./googleTagManagerPDG_${env}.js`).then(
    // @ts-ignore
    async () => await import('./googletagmanager') // "neues altes" tracking
  )
}
