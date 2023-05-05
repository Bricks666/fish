import { toHex } from "web3-utils";
import type { User } from "../types";
import { ROLES } from "@/shared/config";

export const guest: User = {
	address: toHex(0),
	login: 'Guest',
	name: 'Guest',
	onRequest: false,
	role: ROLES.GUEST,
	shopAddress: null,
};
