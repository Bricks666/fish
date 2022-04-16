import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"
import { loadSalesmenThunk, resetSalesmenAC, subscribeNewSalesmanThunk } from "../../models/slesmen"

export const useSalesmen = (shopId, salesmenAddresses) => {
    console.log(shopId, salesmenAddresses)
    const salesmen = useSelector(state => state.salesmen.salesmen)
    const isLoading = useSelector(state => state.salesmen.isLoading)
    const dispatch = useDispatch()

    useEffect(() => {
        if(!salesmen.length) {
            dispatch(loadSalesmenThunk(salesmenAddresses))
            dispatch(subscribeNewSalesmanThunk(shopId))
        }
    }, [dispatch, salesmen.length, salesmenAddresses, shopId])

    useEffect(() => {
        return () => {
            dispatch(resetSalesmenAC())
        }
    }, [])
    console.log(salesmen, isLoading)
    return {
        salesmen,
        isLoading
    }
}