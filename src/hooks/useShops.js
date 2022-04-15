import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { loadShopsThunk, subscribeDeleteShopThunk, subscribeNewShopThunk } from "../models/shops"

export const useShops = () => {
    
    const isLoading = useSelector(state => state.shops.isLoading)
    const shops = useSelector(state => state.shops.shops)
    const dispatch = useDispatch()

    useEffect(() => {
        if(!shops.length && !isLoading) {
            dispatch(loadShopsThunk())
            dispatch(subscribeNewShopThunk())
            dispatch(subscribeDeleteShopThunk())
        }
    }, [shops.length, isLoading])

    return {
        shops,
        isLoading
    }
}