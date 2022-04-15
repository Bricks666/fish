import { acceptRequestApi, addRequestApi, cancelRequestApi, getRequestApi, getRequestsApi } from "../api"
import { subscribe } from "../api/core"
import { filterMyRequests } from "./utils/filterMyRequests"
import { toValidRequest } from "./utils/toValidRequest"

const initialState = {
    isLoading: false,
    requests: [],
    myRequests: [],
    unsubscribes: []
}

const SET_REQUESTS = 'requests/SET_REQUESTS'
const ADD_REQUEST = 'requests/ADD_REQUESTS'
const CHANGE_STATUS_REQUEST = 'requests/CHANGE_STATUS_REQUESTS'
const SET_MY_REQUESTS = 'requests/SET_MY_REQUESTS'
const CHANGE_STATUS_MY_REQUEST = 'requests/CHANGE_STATUS_MY_REQUESTS'
const ADD_MY_REQUEST = 'requests/ADD_MY_REQUESTS'
const TOGGLE_LOADING = 'requests/TOGGLE_LOADING'
const SET_UNSUBSCRIBES = "requests/SET_UNSUBSCRIBES"
const RESET = "requests/RESET"

export const requestsReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case SET_REQUESTS: {
            return {
                ...state,
                requests: payload.requests
            }
        }
        case ADD_REQUEST: {
            return {
                ...state,
                requests: [...state.requests, payload.request]
            }
        }
        case CHANGE_STATUS_REQUEST: {
            return {
                ...state,
                requests: state.requests.map(request => request.id === payload.requestId? { ...request, status: payload.status }: request)
            }
        }
        case SET_MY_REQUESTS: {
            return {
                ...state,
                myRequests: payload.myRequests
            }
        }
        case ADD_MY_REQUEST: {
            return {
                ...state,
                myRequests: [...state.myRequests, payload.myRequest]
            }
        }
        case CHANGE_STATUS_MY_REQUEST: {
            return {
                ...state,
                myRequests: state.myRequests.map(request => request.id === payload.requestId? { ...request, status: payload.status }: request)
            }
        }
        case TOGGLE_LOADING: {
            return {
                ...state,
                isLoading: payload.isLoading
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


const setRequestsAC = (requests) => {
    return {
        type: SET_REQUESTS,
        payload: {
            requests
        }
    }
}


const setMyRequestsAC = (myRequests) => {
    return {
        type: SET_MY_REQUESTS,
        payload: {
            myRequests
        }
    }
}

const addRequestAC = (request) => {
    return {
        type: ADD_REQUEST,
        payload: {
            request
        }
    }
}
const changeStatusRequestAC = (requestId, status) => {
    console.log("a")
    return {
        type: CHANGE_STATUS_REQUEST,
        payload: {
            requestId, status
        }
    }
}


const addMyRequestAC = (myRequest) => {
    return {
        type: ADD_MY_REQUEST,
        payload: {
            myRequest
        }
    }
}
const changeStatusMyRequestAC = (requestId, status) => {
    return {
        type: CHANGE_STATUS_MY_REQUEST,
        payload: {
            requestId, status
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

const setUnsubscribesAC = (...unsubscribes) => {
    return {
        type: SET_UNSUBSCRIBES,
        payload: {
            unsubscribes
        }
    }
}

export const resetRequestsAC = () => {
    return {
        type: RESET
    }
}

export const loadRequestsThunk = () => {
    return async(dispatch) => {
        try {
            dispatch(toggleLoadingAC(true))
            const response = await getRequestsApi()
            dispatch(setRequestsAC(response.map(toValidRequest)))
            dispatch(toggleLoadingAC(false))
        } catch (e) {
            console.log(e)
        }
    }
}

export const loadMyRequestsThunk = () => {
    return async(dispatch, getState) => {
        const { address } = getState().auth
        try {
            dispatch(toggleLoadingAC(true))
            const response = await getRequestsApi()
            dispatch(setMyRequestsAC(filterMyRequests(response, address).map(toValidRequest)))
            dispatch(toggleLoadingAC(false))
        } catch (e) {
            console.log(e)
        }
    }
}

export const subscribeNewRequestThunk = () => {
    return async(dispatch) => {
        const subscribeNewRequest = subscribe({
            event: "newRequest",
            callback: async({ id }) => {
                const request = await getRequestApi(id)
                dispatch(addRequestAC(toValidRequest(request)))
            }
        })
        dispatch(setUnsubscribesAC(subscribeNewRequest))
    }
}
export const subscribeChangeRequestStatusThunk = () => {
    return async(dispatch) => {
        const subscribeNewRequest = subscribe({
            event: "newStatusRequest",
            callback: ({ id, status }) => dispatch(changeStatusRequestAC(+id, status))
        })
        dispatch(setUnsubscribesAC(subscribeNewRequest))
    }
}

export const subscribeNewMyRequestThunk = () => {
    return async(dispatch, getState) => {
        const { address } = getState().auth
        const subscribeNewRequest = subscribe({
            event: "newRequest",
            callback: async({ id }) => {
                const request = await getRequestApi(id)
                dispatch(addMyRequestAC(toValidRequest(request)))
            },
            filter: { AddressSender: address }
        })
        dispatch(setUnsubscribesAC(subscribeNewRequest))
    }
}
export const subscribeMyChangeRequestStatusThunk = () => {
    return async(dispatch, getState) => {
        const { address } = getState().auth
        const subscribeNewRequest = subscribe({
            event: "newStatusRequest",
            callback: ({ id, status }) => dispatch(changeStatusMyRequestAC(+id, status)),
            filter: { Address:address }
        })
        dispatch(setUnsubscribesAC(subscribeNewRequest))
    }
}

export const addRequestThunk = (type, shopAddress) => {
    return async(_, getState) => {
        const { address } = getState().auth
        await addRequestApi(address, type, shopAddress)
    }
}

export const acceptRequestThunk = (id) => {
    return async(_, getState) => {
        const { address } = getState().auth
        await acceptRequestApi(address, id)
    }
}

export const cancelRequestThunk = (id) => {
    return async(_, getState) => {
        const { address } = getState().auth
        await cancelRequestApi(address, id)
    }
}