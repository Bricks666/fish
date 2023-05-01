import { Address } from '@/packages/web3';
import { contract, unlockAccount, web3 } from './core';

export const loginApi = async (
	address: Address,
	login: string,
	password: string
): Promise<void> => {
	const hashPassword = web3.utils.sha3(password);
	await unlockAccount(address);
	await contract.methods.login(login, hashPassword).call({ from: address, });
};
export const registrationApi = async (
	address: Address,
	login: string,
	name: string
): Promise<void> => {
	await unlockAccount(address);
	await contract.methods.registration(login, name).send({ from: address, });
};
