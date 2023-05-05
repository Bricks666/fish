import { defineStore } from 'pinia';
import { requestsModel } from '@/entities/requests';
import { authUserModel } from '@/entities/users';
import { requestsApi } from '@/shared/api';
import { STATUSES } from '@/shared/config';
import { createDataFetch } from '@/shared/lib';

export const KEY = 'CANCEL_REQUEST_STORE';

export const useStore = defineStore(KEY, () => {
	const authUser = authUserModel.useStore();
	const requests = requestsModel.useStore();

	const handler = async (id: number) => {
		if (!authUser.isAuth) {
			return;
		}

		await requestsApi.cancelRequest({
			requestId: id,
			sender: authUser.result.address,
		});

		const result = requests.result.map((request) => {
			if (request.id === id) {
				// Можно попробовать с мутацией, но не должно сработать
				return {
					...request,
					status: STATUSES.CANCELED,
				};
			}

			return request;
		});
		requests.$patch({
			result,
		});
	};

	return createDataFetch({
		handler,
	});
});
