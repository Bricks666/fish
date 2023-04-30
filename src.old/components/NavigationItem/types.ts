export interface NavigationSubitemDesc {
	readonly label: string;
	readonly path: string;
	readonly roles?: number[];
	readonly invert?: boolean;
}

export interface NavigationItemDesc {
	readonly label: string;
	readonly roles?: number[];
	readonly invert?: boolean;
	readonly path: string | Array<NavigationSubitemDesc>;
}
