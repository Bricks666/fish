export const toValidRequest = (request) => {
	return {
		id: +request.id,
		type: +request.requestType,
		sender: request.senderAddress,
		currentRole: +request.currentRole,
		newRole: +request.newRole,
		status: +request.status,
		shopAddress: request.shopAddress,
	};
};
