export interface Params {
	readonly shopAddress: string;
	readonly reviewId: string;
	readonly subjectAddress: string;
}

export const SEARCH_PARAMS:Params = {
	shopAddress: 'sp-adr',
	reviewId: 'rw-id',
	subjectAddress: 'sub-adr',
};
