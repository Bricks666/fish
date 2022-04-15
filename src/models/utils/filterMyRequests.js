export const filterMyRequests = (requests, address) => {
    return requests.filter(request => request.AddressSender === address)
}