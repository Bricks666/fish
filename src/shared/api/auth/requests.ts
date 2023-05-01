/* eslint-disable no-shadow */
import { keccak256 } from 'web3-utils';
import { web3Api } from '../web3';
import type { LoginParams, RegistrationParams } from './types';

export const login = async (params: LoginParams): Promise<void> => {
	const { address, login, password, } = params;
	const hashPassword = keccak256(password);
	await web3Api.unlockAccount(address);
	await web3Api.contract.methods.login(login, hashPassword).call({ from: address, });
};
export const registration = async (params: RegistrationParams): Promise<void> => {
	const { address, login, name, } = params;
	await web3Api.unlockAccount(address);
	await web3Api.contract.methods.registration(login, name).send({ from: address, });
};
