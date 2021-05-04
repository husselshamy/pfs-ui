export interface IAnalyticsEventTemplate {
  page: string
  action: string
}

export interface IAnalyticsPageLoadEventTemplate extends IAnalyticsEventTemplate {}

export type ElementType =
  | 'button'
  | 'link'
  | 'toggle'
  | 'slider'
  | 'icon'
  | 'radio'
  | 'checkbox'
  | 'input_field'
  | 'layer'

export interface IAnalyticsClickEventTemplate extends IAnalyticsEventTemplate {
  clickElementId?: string
  clickElementName: string
  clickElementType: ElementType
  targetURL?: string
}

const TRADE_IN_OPT_IN: IAnalyticsPageLoadEventTemplate = {
  page: 'trade_in/opt_in',
  action: 'PAGMyPorsche_TradeInOptin_Pageload'
};

const TRADE_IN_CONFIRMATION: IAnalyticsPageLoadEventTemplate = {
  page: 'trade_in/confirmation',
  action: 'PAGMyPorsche_TradeInConfirmation_Pageload'
};

export const AnalyticsEventTemplates = {
  TRADE_IN_OPT_IN,
  TRADE_IN_CONFIRMATION
};

export const AnalyticsEventFactories = {
  TRADE_IN_OPT_IN_CLICK: (
    elementId: string,
    elementName: string
  ): IAnalyticsClickEventTemplate => ({
    action: 'PAGMyPorsche_TradeInOptin_Click',
    clickElementId: elementId,
    clickElementName: elementName,
    clickElementType: 'button',
    page: 'tradein/yourvehicle'
  }),

  TRADE_IN_CONFIRMATION_CLICK: (
    elementId: string,
    elementName: string
  ): IAnalyticsClickEventTemplate => ({
    action: 'PAGMyPorsche_TradeInConfirmation_Click',
    clickElementId: elementId,
    clickElementName: elementName,
    clickElementType: 'button',
    page: 'trade_in/confirmation'
  })
};
