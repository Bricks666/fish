import {useSalesmen} from "../../hooks"

export const useSalesman = (shopId, salesmanAddress) => {
  const {salesmen} = useSalesmen(shopId)

  return salesmen.find(salesman => salesman.address === salesmanAddress)
}
