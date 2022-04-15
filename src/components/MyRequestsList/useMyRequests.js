import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { loadMyRequestsThunk, subscribeMyChangeRequestStatusThunk, subscribeNewMyRequestThunk } from "../../models/requests"

export const useMyRequests = () => {
    const requests = useSelector(state => state.requests.myRequests)
    const isLoading = useSelector(state => state.requests.isLoading)
    const dispatch = useDispatch()

    useEffect(() => {
        if(!requests.length && !isLoading) {
            dispatch(loadMyRequestsThunk())
            dispatch(subscribeMyChangeRequestStatusThunk())
            dispatch(subscribeNewMyRequestThunk())
        }
    }, [isLoading, requests.length])

    return {
        requests,
        isLoading
    }
}