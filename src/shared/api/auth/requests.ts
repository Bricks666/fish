/* eslint-disable no-shadow */
import { keccak256 } from 'web3-utils';
import { createContractRequest } from '../contract';
import { web3Api } from '../web3';
import type { LoginParams, RegistrationParams } from './types';

export const login = createContractRequest<LoginParams, Promise<void>>(async (params) => {
	const { address, login, password, contract, } = params;
	const hashPassword = keccak256(password);
	await web3Api.unlockAccount(address);
	await contract.methods.login(login, hashPassword).call({ from: address, });
});
export const registration = createContractRequest<RegistrationParams, Promise<void>>(
	async (params) => {
		const { address, login, name, contract, } = params;
		await web3Api.unlockAccount(address);
		await contract.methods.registration(login, name).send({ from: address, });
	}
);
