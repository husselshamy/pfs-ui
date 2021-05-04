import {
  IAnalyticsCarProps,
  IAnalyticsFinancialProductProps,
  IAnalyticsPartner,
  IComponentForm
} from './IAnalyticsEvent'

import { VehicleView } from '@slatldisal/external-models'

let loggedIn = false
let marketplace = 'us'
let language = 'en'
let application = 'carsales_checkout'
let environment: 'K' | 'PP' | 'P'

let vehicleId: string

let financialData: IAnalyticsFinancialProductProps
let car: IAnalyticsCarProps
let componentForm: IComponentForm | undefined

let partner: IAnalyticsPartner

let currentPage = ''

const FinProductDefaults = {
  downpaymentValue: undefined,
  productCategory: undefined,
  productName: undefined,
  paymentFinal: undefined,
  mileageUnit: 'miles'
}

export function isLoggedIn() {
  return loggedIn
}

export function setLoggedIn(value: boolean) {
  loggedIn = value
}

export function getMarketplace() {
  return marketplace
}

export function getVehicleId() {
  return vehicleId
}

export function setVehicleId(value: string) {
  vehicleId = value
}

export function setMarketplace(value: string) {
  marketplace = value
}

export function setPartner(value: IAnalyticsPartner) {
  partner = value
}

export function setFinancialPayload(value: IAnalyticsFinancialProductProps) {
  financialData = value
}

export function getFinancialPayload(): IAnalyticsFinancialProductProps {
  return financialData
}

export function setVehiclePrice(price: number) {
  setFinancialPayload({
    ...(getFinancialPayload() ?? FinProductDefaults),
    cashPrice: price
  })
}

export function setFinProduct(product: string) {
  setFinancialPayload({
    ...(getFinancialPayload() ?? FinProductDefaults),
    productCategory: product
  })
}

export function setCarPayload(value: IAnalyticsCarProps): void {
  car = value
}

export function getLanguage() {
  return language
}

export function getPartner() {
  return partner
}

export function getApplication() {
  return application
}

export function setLanguage(value: string) {
  language = value
}

export type AnalyticsApp = 'carsales_checkout' | 'carsales_calculator'

export function setApplication(value: AnalyticsApp) {
  application = value
}

export function setCurrentPage(page: string) {
  currentPage = page
}

export function getCurrentPage(): string {
  return currentPage
}

export function getEnvironment() {
  return environment
}

export function setEnvironment(value: 'K' | 'PP' | 'P') {
  environment = value
}

export function getCarPayload(): IAnalyticsCarProps {
  return car
}

export function setComponentForm(value: IComponentForm | undefined) {
  componentForm = value
}

export function getComponentForm(): IComponentForm {
  return componentForm
}

export function carAnalytics(value: VehicleView, vehicleId: string): IAnalyticsCarProps {
  const realcarStatus = value.conditionType === 'NEW' ? 'new_car' : 'used_car'

  return {
    modelName: value.modelName,
    modelCode: value.modelCode,
    offerKey: value.key,
    realcarStatus,
    vehicleId,
    vin: value.vin,
    type: 'real_car'
  }
}
