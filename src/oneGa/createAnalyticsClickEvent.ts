import { ElementType, IAnalyticsClickEventTemplate } from './AnalyticsEventTemplates'
import {
  IAnalyticsCarProps,
  IAnalyticsEvent,
  IAnalyticsFinancialProductProps,
  IAnalyticsPartner,
  IComponentForm
} from './IAnalyticsEvent'
import { createAnalyticsEvent } from './createAnalyticsEvent'

export interface IAnalyticsClickPayload {
  clickElementId: string
  targetUrl?: string
}

export interface IAnalyticsClickEvent extends IAnalyticsEvent {
  car?: IAnalyticsCarProps
  partner?: IAnalyticsPartner
  financialProduct?: IAnalyticsFinancialProductProps
  componentForm?: IComponentForm | undefined
  componentClick: {
    clickElementType: ElementType
    clickElementId: string
    clickElementName: string
    targetUrl?: string
  }
}

export const createAnalyticsClickEvent = (
  template: IAnalyticsClickEventTemplate,
  language: string,
  country: string,
  applicationId: string,
  clickPayload: IAnalyticsClickPayload,
  car?: IAnalyticsCarProps,
  partner?: IAnalyticsPartner,
  financialProduct?: IAnalyticsFinancialProductProps,
  componentForm?: IComponentForm
): IAnalyticsClickEvent => {
  return {
    ...createAnalyticsEvent(template, language, country, applicationId),
    car,
    partner,
    financialProduct,
    componentForm,
    componentClick: {
      clickElementId: clickPayload.clickElementId ?? template.clickElementId,
      clickElementName: template.clickElementName,
      clickElementType: template.clickElementType,
      targetUrl: clickPayload.targetUrl
    }
  }
}
