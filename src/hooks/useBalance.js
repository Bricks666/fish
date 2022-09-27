import { useEffect, useState } from 'react';
import { web3 } from '../api/core';

export const useBalance = (address) => {
	const [balance, setBalance] = useState(0);

	useEffect(() => {
		if (address) {
			const changeBalance = async () => {
				const balance = await web3.eth.getBalance(address);
				setBalance(balance);
			};
			const id = setInterval(changeBalance, 100);

			return () => {
				clearInterval(id);
			};
		}
	}, [address]);

	return balance;
};
