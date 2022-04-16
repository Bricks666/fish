import { addShopApi, deleteShopApi, getSalesmenAddressesApi, getShopAddressesApi, getShopApi } from "../api"
import { subscribe } from "../api/core"
import { toValidShop } from "./utils/toValidShop"

const initialState = {
    isLoading: false,
    shops: [],
    unsubscribes: []
}

const SET_SHOPS = "shops/SET_SHOPS"
const ADD_SHOP = "shops/ADD_SHOP"
const DELETE_SHOP = "shops/DELETE_SHOP"
const TOGGLE_LOADING = "shops/TOGGLE_LOADING"
const CHANGE_SHOP = "shops/CHANGE_SHOP"
const SET_UNSUBSCRIBES = "shops/SET_UNSUBSCRIBES"
const RESET = "shops/RESET"

export const shopsReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case SET_SHOPS: {
            return {
                ...state,
                shops: payload.shops
            }
        }
        case ADD_SHOP: {
            return {
                ...state,
                shops: [...state.shops, payload.shop]
            }
        }
        case DELETE_SHOP : {
            return {
                ...state,
                shops: state.shops.filter(shop => shop.address !== payload.shopAddress)
            }
        }
        case TOGGLE_LOADING: {
            return {
                ...state,
                isLoading: payload.isLoading
            }
        }
        case CHANGE_SHOP: {
            return {
                ...state,
                shops: state.shops.map((shop) => shop.id === payload.shop.id? payload.shop: shop)
            }
        }
        case SET_UNSUBSCRIBES: {
            return {
                ...state,
                unsubscribes: [...state.unsubscribes, ...payload.unsubscribes]
            }
        }
        case RESET: {
            state.unsubscribes.forEach((unsubscribe) => unsubscribe.unsubscribe())
            return initialState
        }
        default: {
            return state
        }
    }
}


const setShopsAC = (shops) => {
    return {
        type: SET_SHOPS,
        payload: {
            shops
        }
    }
}

const addShopAC = (shop) => {
    return {
        type: ADD_SHOP,
        payload: {
            shop
        }
    }
}

const deleteShopAC = (shopAddress) => {
    return {
        type: DELETE_SHOP,
        payload: {
            shopAddress
        }
    }
}


const toggleLoadingAC = (isLoading) => {
    return {
        type: TOGGLE_LOADING,
        payload: {
            isLoading
        }
    }
}

const changeShopAC = (shop) => {
    return {
        type: CHANGE_SHOP,
        payload: {
            shop
        }
    }
}

const setUnsubscribesAC = (...unsubscribes) => {
    return {
        type: SET_UNSUBSCRIBES,
        payload: {
            unsubscribes
        }
    }
}

export const resetShopsAC = () => {
    return {
        type: RESET
    }
}

export const loadShopsThunk = () => {
    return async (dispatch) => {
        dispatch(toggleLoadingAC(true))
        const addresses = await getShopAddressesApi()
        const shops = await Promise.all(addresses.map(getShopApi))
        const shopsWithSalesmen = await Promise.all(shops.filter(shop => shop.city !== "").map(async(shop) => {
            const salesmen = await getSalesmenAddressesApi(shop.Address)
            return toValidShop({...shop, shopers: salesmen})
        }))
        dispatch(setShopsAC(shopsWithSalesmen))
        dispatch(toggleLoadingAC(false))
    }
}

export const deleteShopThunk = (shopAddress) => {
    return async (_, getState) => {
        const { address } = getState().auth
        await deleteShopApi(address, shopAddress)
    }
}
export const addShopThunk = (shopAddress, login, name, city) => {
    return async (_, getState) => {
        const { address } = getState().auth
        await addShopApi(address, shopAddress, login, name, city)
    }
}
export const subscribeNewShopThunk = () => {
    return async(dispatch) => {
        const unsubscribe = subscribe({
            event: "newShop",
            callback: async({ Address }) => {
                const shop = await getShopApi(Address)
                dispatch(addShopAC(toValidShop(shop)))
            },
        })
        dispatch(setUnsubscribesAC(unsubscribe))
    }
}

export const subscribeDeleteShopThunk = () => {
    return async(dispatch) => {
        const unsubscribe = subscribe({
            event: "delShop",
            callback: ({ Address }) => dispatch(deleteShopAC(Address))
        })
        dispatch(setUnsubscribesAC(unsubscribe))
    }
}
