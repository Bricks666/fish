import { AbiItem } from 'web3-utils';

export const abi: AbiItem[] = [
	{
		inputs: [],
		stateMutability: 'nonpayable',
		type: 'constructor',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'address',
				name: 'Address',
				type: 'address',
			},
			{
				indexed: false,
				internalType: 'bool',
				name: 'onRequest',
				type: 'bool',
			}
		],
		name: 'changeOnRequestEvent',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'address',
				name: 'Address',
				type: 'address',
			},
			{
				indexed: true,
				internalType: 'enum Users.ROLES',
				name: 'newRole',
				type: 'uint8',
			}
		],
		name: 'changeRoleEvent',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: 'uint256',
				name: 'shopId',
				type: 'uint256',
			}
		],
		name: 'delShop',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'address',
				name: 'subjectAddress',
				type: 'address',
			},
			{
				indexed: true,
				internalType: 'uint256',
				name: 'reviewId',
				type: 'uint256',
			},
			{
				indexed: false,
				internalType: 'enum Reviews.Mark',
				name: 'mark',
				type: 'uint8',
			}
		],
		name: 'markReview',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'address',
				name: 'subjectAddress',
				type: 'address',
			},
			{
				indexed: true,
				internalType: 'uint256',
				name: 'reviewId',
				type: 'uint256',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'idComment',
				type: 'uint256',
			}
		],
		name: 'newComment',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: 'uint256',
				name: 'id',
				type: 'uint256',
			},
			{
				indexed: true,
				internalType: 'address',
				name: 'senderAddress',
				type: 'address',
			}
		],
		name: 'newRequest',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'address',
				name: 'subjectAddress',
				type: 'address',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'id',
				type: 'uint256',
			}
		],
		name: 'newReview',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: 'uint256',
				name: 'shopId',
				type: 'uint256',
			}
		],
		name: 'newShop',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: 'uint256',
				name: 'id',
				type: 'uint256',
			},
			{
				indexed: true,
				internalType: 'address',
				name: 'Address',
				type: 'address',
			},
			{
				indexed: false,
				internalType: 'enum Requests.STATUS',
				name: 'status',
				type: 'uint8',
			}
		],
		name: 'newStatusRequest',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: 'address',
				name: 'Address',
				type: 'address',
			}
		],
		name: 'newUser',
		type: 'event',
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: 'requestId',
				type: 'uint256',
			}
		],
		name: 'acceptRequest',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: 'subjectAddress',
				type: 'address',
			},
			{
				internalType: 'uint256',
				name: 'reviewId',
				type: 'uint256',
			},
			{
				internalType: 'string',
				name: 'text',
				type: 'string',
			}
		],
		name: 'addComment',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'enum Requests.TYPE',
				name: 'requestType',
				type: 'uint8',
			},
			{
				internalType: 'address',
				name: 'shopAddress',
				type: 'address',
			}
		],
		name: 'addRequest',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: 'subjectAddress',
				type: 'address',
			},
			{
				internalType: 'string',
				name: 'text',
				type: 'string',
			},
			{
				internalType: 'uint256',
				name: 'mark',
				type: 'uint256',
			}
		],
		name: 'addReview',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: 'shopAddress',
				type: 'address',
			},
			{
				internalType: 'string',
				name: 'login',
				type: 'string',
			},
			{
				internalType: 'string',
				name: 'shopName',
				type: 'string',
			},
			{
				internalType: 'string',
				name: 'city',
				type: 'string',
			}
		],
		name: 'addShop',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: 'requestId',
				type: 'uint256',
			}
		],
		name: 'cancelRequest',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: '',
				type: 'address',
			},
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256',
			}
		],
		name: 'comments',
		outputs: [
			{
				internalType: 'uint256',
				name: 'id',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: 'reviewId',
				type: 'uint256',
			},
			{
				internalType: 'string',
				name: 'text',
				type: 'string',
			},
			{
				internalType: 'address',
				name: 'subjectAddress',
				type: 'address',
			}
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: 'shopAddress',
				type: 'address',
			}
		],
		name: 'deleteShop',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: 'subjectAddress',
				type: 'address',
			},
			{
				internalType: 'uint256',
				name: 'reviewId',
				type: 'uint256',
			}
		],
		name: 'dislikeReview',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: 'subjectAddress',
				type: 'address',
			},
			{
				internalType: 'uint256',
				name: 'reviewId',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: 'commentId',
				type: 'uint256',
			}
		],
		name: 'getComment',
		outputs: [
			{
				components: [
					{
						internalType: 'uint256',
						name: 'id',
						type: 'uint256',
					},
					{
						internalType: 'uint256',
						name: 'reviewId',
						type: 'uint256',
					},
					{
						internalType: 'string',
						name: 'text',
						type: 'string',
					},
					{
						internalType: 'address',
						name: 'subjectAddress',
						type: 'address',
					}
				],
				internalType: 'struct Comments.Comment',
				name: '',
				type: 'tuple',
			}
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: 'subjectAddress',
				type: 'address',
			},
			{
				internalType: 'uint256',
				name: 'reviewId',
				type: 'uint256',
			}
		],
		name: 'getComments',
		outputs: [
			{
				components: [
					{
						internalType: 'uint256',
						name: 'id',
						type: 'uint256',
					},
					{
						internalType: 'uint256',
						name: 'reviewId',
						type: 'uint256',
					},
					{
						internalType: 'string',
						name: 'text',
						type: 'string',
					},
					{
						internalType: 'address',
						name: 'subjectAddress',
						type: 'address',
					}
				],
				internalType: 'struct Comments.Comment[]',
				name: '',
				type: 'tuple[]',
			}
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [],
		name: 'getRequests',
		outputs: [
			{
				components: [
					{
						internalType: 'uint256',
						name: 'id',
						type: 'uint256',
					},
					{
						internalType: 'enum Requests.TYPE',
						name: 'requestType',
						type: 'uint8',
					},
					{
						internalType: 'address',
						name: 'senderAddress',
						type: 'address',
					},
					{
						internalType: 'enum Users.ROLES',
						name: 'currentRole',
						type: 'uint8',
					},
					{
						internalType: 'enum Users.ROLES',
						name: 'newRole',
						type: 'uint8',
					},
					{
						internalType: 'enum Requests.STATUS',
						name: 'status',
						type: 'uint8',
					},
					{
						internalType: 'address',
						name: 'shopAddress',
						type: 'address',
					}
				],
				internalType: 'struct Requests.Request[]',
				name: '',
				type: 'tuple[]',
			}
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: 'subjectAddress',
				type: 'address',
			},
			{
				internalType: 'uint256',
				name: 'reviewId',
				type: 'uint256',
			}
		],
		name: 'getReview',
		outputs: [
			{
				components: [
					{
						internalType: 'uint256',
						name: 'id',
						type: 'uint256',
					},
					{
						internalType: 'string',
						name: 'text',
						type: 'string',
					},
					{
						internalType: 'address',
						name: 'subjectAddress',
						type: 'address',
					},
					{
						internalType: 'uint256',
						name: 'mark',
						type: 'uint256',
					},
					{
						internalType: 'address[]',
						name: 'likes',
						type: 'address[]',
					},
					{
						internalType: 'address[]',
						name: 'dislikes',
						type: 'address[]',
					}
				],
				internalType: 'struct Reviews.Review',
				name: '',
				type: 'tuple',
			}
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: 'subjectAddress',
				type: 'address',
			}
		],
		name: 'getReviews',
		outputs: [
			{
				components: [
					{
						internalType: 'uint256',
						name: 'id',
						type: 'uint256',
					},
					{
						internalType: 'string',
						name: 'text',
						type: 'string',
					},
					{
						internalType: 'address',
						name: 'subjectAddress',
						type: 'address',
					},
					{
						internalType: 'uint256',
						name: 'mark',
						type: 'uint256',
					},
					{
						internalType: 'address[]',
						name: 'likes',
						type: 'address[]',
					},
					{
						internalType: 'address[]',
						name: 'dislikes',
						type: 'address[]',
					}
				],
				internalType: 'struct Reviews.Review[]',
				name: '',
				type: 'tuple[]',
			}
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: 'shopId',
				type: 'uint256',
			}
		],
		name: 'getSalesmen',
		outputs: [
			{
				components: [
					{
						internalType: 'string',
						name: 'login',
						type: 'string',
					},
					{
						internalType: 'address',
						name: 'Address',
						type: 'address',
					},
					{
						internalType: 'bytes32',
						name: 'password',
						type: 'bytes32',
					},
					{
						internalType: 'string',
						name: 'FIO',
						type: 'string',
					},
					{
						internalType: 'enum Users.ROLES',
						name: 'role',
						type: 'uint8',
					},
					{
						internalType: 'bool',
						name: 'onRequest',
						type: 'bool',
					},
					{
						internalType: 'address',
						name: 'shopAddress',
						type: 'address',
					}
				],
				internalType: 'struct Users.User[]',
				name: '',
				type: 'tuple[]',
			}
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [],
		name: 'getShops',
		outputs: [
			{
				components: [
					{
						internalType: 'uint256',
						name: 'id',
						type: 'uint256',
					},
					{
						internalType: 'address',
						name: 'Address',
						type: 'address',
					},
					{
						internalType: 'string',
						name: 'Name',
						type: 'string',
					},
					{
						internalType: 'string',
						name: 'city',
						type: 'string',
					}
				],
				internalType: 'struct Shops.Shop[]',
				name: '',
				type: 'tuple[]',
			}
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [],
		name: 'getUsersAddresses',
		outputs: [
			{
				internalType: 'address[]',
				name: '',
				type: 'address[]',
			}
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: 'subjectAddress',
				type: 'address',
			},
			{
				internalType: 'uint256',
				name: 'reviewId',
				type: 'uint256',
			}
		],
		name: 'likeReview',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'string',
				name: 'login',
				type: 'string',
			},
			{
				internalType: 'bytes32',
				name: 'password',
				type: 'bytes32',
			}
		],
		name: 'login',
		outputs: [
			{
				internalType: 'address',
				name: '',
				type: 'address',
			}
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'string',
				name: 'login',
				type: 'string',
			},
			{
				internalType: 'string',
				name: 'FIO',
				type: 'string',
			}
		],
		name: 'registration',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256',
			}
		],
		name: 'requests',
		outputs: [
			{
				internalType: 'uint256',
				name: 'id',
				type: 'uint256',
			},
			{
				internalType: 'enum Requests.TYPE',
				name: 'requestType',
				type: 'uint8',
			},
			{
				internalType: 'address',
				name: 'senderAddress',
				type: 'address',
			},
			{
				internalType: 'enum Users.ROLES',
				name: 'currentRole',
				type: 'uint8',
			},
			{
				internalType: 'enum Users.ROLES',
				name: 'newRole',
				type: 'uint8',
			},
			{
				internalType: 'enum Requests.STATUS',
				name: 'status',
				type: 'uint8',
			},
			{
				internalType: 'address',
				name: 'shopAddress',
				type: 'address',
			}
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: '',
				type: 'address',
			},
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256',
			}
		],
		name: 'reveiws',
		outputs: [
			{
				internalType: 'uint256',
				name: 'id',
				type: 'uint256',
			},
			{
				internalType: 'string',
				name: 'text',
				type: 'string',
			},
			{
				internalType: 'address',
				name: 'subjectAddress',
				type: 'address',
			},
			{
				internalType: 'uint256',
				name: 'mark',
				type: 'uint256',
			}
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: '',
				type: 'address',
			}
		],
		name: 'shopIndexes',
		outputs: [
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256',
			}
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256',
			}
		],
		name: 'shops',
		outputs: [
			{
				internalType: 'uint256',
				name: 'id',
				type: 'uint256',
			},
			{
				internalType: 'address',
				name: 'Address',
				type: 'address',
			},
			{
				internalType: 'string',
				name: 'Name',
				type: 'string',
			},
			{
				internalType: 'string',
				name: 'city',
				type: 'string',
			}
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: '',
				type: 'address',
			}
		],
		name: 'users',
		outputs: [
			{
				internalType: 'string',
				name: 'login',
				type: 'string',
			},
			{
				internalType: 'address',
				name: 'Address',
				type: 'address',
			},
			{
				internalType: 'bytes32',
				name: 'password',
				type: 'bytes32',
			},
			{
				internalType: 'string',
				name: 'FIO',
				type: 'string',
			},
			{
				internalType: 'enum Users.ROLES',
				name: 'role',
				type: 'uint8',
			},
			{
				internalType: 'bool',
				name: 'onRequest',
				type: 'bool',
			},
			{
				internalType: 'address',
				name: 'shopAddress',
				type: 'address',
			}
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256',
			}
		],
		name: 'usersAddresses',
		outputs: [
			{
				internalType: 'address',
				name: '',
				type: 'address',
			}
		],
		stateMutability: 'view',
		type: 'function',
	}
];
