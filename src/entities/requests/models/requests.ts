import { defineStore } from 'pinia';
import { requestsApi } from '@/shared/api';
import { createDataFetch } from '@/shared/lib';
import { prepareRequest } from '../lib';

export const KEY = 'REQUESTS_STORE';

export const useStore = defineStore(KEY, () => {
	return createDataFetch({
		handler: requestsApi.getRequests,
		mapResult: (requests) => requests.map(prepareRequest),
		defaultValue: [],
	});
});
