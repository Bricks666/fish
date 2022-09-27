export const toValidUser = (user) => {
	return {
		login: user.login,
		address: user.Address,
		name: user.FIO,
		role: +user.role,
		shopAddress: user.shopAddress,
		onRequest: user.onRequest,
	};
};
