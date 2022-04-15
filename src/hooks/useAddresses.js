import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { loadAddressesThunk } from "../models/address"

export const useAddresses = () => {
    const addresses = useSelector(state => state.address.addresses)
    const isLoading = useSelector(state => state.address.isLoading)
    const dispatch = useDispatch()

    useEffect(() => {
        if(!addresses.length && !isLoading) {
            dispatch(loadAddressesThunk())
        }
    }, [addresses.length, isLoading, dispatch])

    return { addresses, isLoading }
    
}