export interface Params {
	readonly shopId: string;
	readonly reviewId: string;
	readonly subjectId: string;
}

export const SEARCH_PARAMS: Params = {
	shopId: 'sp-id',
	reviewId: 'rw-id',
	subjectId: 'sub-id',
};
