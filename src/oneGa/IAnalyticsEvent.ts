export interface IFormField {
  fieldId: string
  fieldName: string
  fieldValue: any
}

export interface IAnalyticsCarProps {
  type: 'real_car'
  realcarStatus: 'new_car' | 'used_car'
  offerKey: string | undefined
  modelName: string | undefined
  modelCode: string | undefined

  modelRangeCode?: string
  modelRangeName?: string
  modelSeriesCode?: string
  modelSeriesName?: string
  vin?: string
  vehicleId: string
}

export interface IAnalyticsFinancialProductProps {
  productName: string
  productCategory: string
  customerTargetGroup?: string
  paymentFinal?: number
  cashPrice?: number
  downpaymentValue?: number
  mileageNumber?: number
  financingDuration?: number
  interestEffective?: number
  interestDebt?: number
  paymentMonthly?: number
  mileageUnit?: string
}

export interface IComponentForm {
  formFields1?: IFormField[]
  formFields2?: IFormField[]
}

export interface IAnalyticsPartner {
  companyId: string
}

export interface IAnalyticsEvent {
  car?: IAnalyticsCarProps
  partner?: IAnalyticsPartner
  financialProduct?: IAnalyticsFinancialProductProps
  componentForm?: IComponentForm | undefined

  context: {
    eventAction: string
    applicationId: string
    language: string
    country: string
    environment: 'K' | 'PP' | 'P' | null
    timestamp: string
    currency: string
    server: string
  }
  visitor: {
    loginStatus: boolean
    deviceBrowserHeight: string
    deviceBrowserWidth: string
    deviceBrowserOrientation: 'p' | 'l'
    useragent: string
  }
  pageExperience: {
    pageId: string
    pageName: string
  }
}
