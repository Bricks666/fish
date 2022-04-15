export const toValidRequest= (request) => {
    return {
        id: +request.id,
        type: +request.typeRequest,
        sender: request.AddressSender,
        currentRole: +request.currentRole,
        newRole: +request.newRole,
        status: +request.status,
        shopAddress: request.shopAddress
    }
}