import { defineStore } from 'pinia';
import { requestsModel } from '@/entities/requests';
import { authUserModel } from '@/entities/users';
import { requestsApi, type AddRequestParams } from '@/shared/api';
import { createDataFetch } from '@/shared/lib';

export const KEY = 'CREATE_REQUEST_STORE';

export const useStore = defineStore(KEY, () => {
	const authUser = authUserModel.useStore();
	const requests = requestsModel.useStore();

	const create = async (params: Omit<AddRequestParams, 'sender'>) => {
		if (!authUser.isAuth) {
			return;
		}

		await requestsApi.addRequest({
			sender: authUser.result.address,
			type: params.type,
			shopAddress: params.shopAddress,
		});

		requests.start();
	};

	return createDataFetch({
		handler: create,
	});
});
