import { contract, unlockAccount, web3 } from './core';

export const loginApi = async (address, login, password) => {
	const hashPassword = web3.utils.sha3(password);
	await unlockAccount(address);
	await contract.methods.login(login, hashPassword).call({ from: address, });
};
export const registrationApi = async (address, login, name) => {
	await unlockAccount(address);
	await contract.methods.registration(login, name).send({ from: address, });
};
