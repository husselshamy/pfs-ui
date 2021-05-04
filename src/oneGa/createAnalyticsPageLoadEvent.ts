import { IAnalyticsPageLoadEventTemplate } from './AnalyticsEventTemplates'
import {
  IAnalyticsCarProps,
  IAnalyticsEvent,
  IAnalyticsFinancialProductProps,
  IAnalyticsPartner
} from './IAnalyticsEvent'
import { createAnalyticsEvent } from './createAnalyticsEvent'

export interface IAnalyticsPageLoadEvent extends IAnalyticsEvent {}

export const createAnalyticsPageLoadEvent = (
  template: IAnalyticsPageLoadEventTemplate,
  language: string,
  country: string,
  applicationId: string,
  car?: IAnalyticsCarProps,
  partner?: IAnalyticsPartner,
  financialProduct?: IAnalyticsFinancialProductProps,
  componentForm?
): IAnalyticsPageLoadEvent => {
  return {
    ...createAnalyticsEvent(template, language, country, applicationId),
    car,
    partner,
    financialProduct,
    componentForm
  }
}
