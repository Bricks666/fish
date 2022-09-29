import { useEffect, useState } from 'react';
import { Address } from '@/interfaces/web3';
import { web3 } from '../api/core';

export const useBalance = (address: Address): number => {
	const [balance, setBalance] = useState(0);

	useEffect(() => {
		if (address) {
			const changeBalance = async () => {
				const newBalance = await web3.eth.getBalance(address);
				setBalance(+newBalance);
			};
			const id = setInterval(changeBalance, 100);

			return () => {
				clearInterval(id);
			};
		}
	}, [address]);

	return balance;
};
