export const address = "0xd53bED10825B3a9E6B357791d08B4738362C94E0"
export const abi = [
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "Address",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "enum Shops.ROLES",
				"name": "newRole",
				"type": "uint8"
			}
		],
		"name": "changeRoleEvent",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "Address",
				"type": "address"
			}
		],
		"name": "delShop",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "AddressSender",
				"type": "address"
			}
		],
		"name": "newRequest",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "Address",
				"type": "address"
			}
		],
		"name": "newShop",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "Address",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "enum Shops.STATUS",
				"name": "status",
				"type": "uint8"
			}
		],
		"name": "newStatusRequest",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "Address",
				"type": "address"
			}
		],
		"name": "newUser",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "Shops",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "Address",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "Name",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "city",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "Users",
		"outputs": [
			{
				"internalType": "string",
				"name": "login",
				"type": "string"
			},
			{
				"internalType": "address",
				"name": "Address",
				"type": "address"
			},
			{
				"internalType": "bytes32",
				"name": "password",
				"type": "bytes32"
			},
			{
				"internalType": "string",
				"name": "FIO",
				"type": "string"
			},
			{
				"internalType": "enum Shops.ROLES",
				"name": "role",
				"type": "uint8"
			},
			{
				"internalType": "address",
				"name": "shopAddress",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "idRequest",
				"type": "uint256"
			}
		],
		"name": "accRequest",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "Address",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "loginShop",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "NameShop",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "city",
				"type": "string"
			}
		],
		"name": "addShop",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "idRequest",
				"type": "uint256"
			}
		],
		"name": "cancelRequest",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "shopAddress",
				"type": "address"
			}
		],
		"name": "deleteShop",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getAddress",
		"outputs": [
			{
				"internalType": "address[]",
				"name": "",
				"type": "address[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "word",
				"type": "string"
			}
		],
		"name": "getByteString",
		"outputs": [
			{
				"internalType": "bytes32",
				"name": "",
				"type": "bytes32"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getRequests",
		"outputs": [
			{
				"components": [
					{
						"internalType": "uint256",
						"name": "id",
						"type": "uint256"
					},
					{
						"internalType": "enum Shops.TYPE",
						"name": "typeRequest",
						"type": "uint8"
					},
					{
						"internalType": "address",
						"name": "AddressSender",
						"type": "address"
					},
					{
						"internalType": "enum Shops.ROLES",
						"name": "currentRole",
						"type": "uint8"
					},
					{
						"internalType": "enum Shops.ROLES",
						"name": "newRole",
						"type": "uint8"
					},
					{
						"internalType": "enum Shops.STATUS",
						"name": "status",
						"type": "uint8"
					},
					{
						"internalType": "address",
						"name": "shopAddress",
						"type": "address"
					}
				],
				"internalType": "struct Shops.Request[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "Address",
				"type": "address"
			}
		],
		"name": "getShopersOfShop",
		"outputs": [
			{
				"internalType": "address[]",
				"name": "",
				"type": "address[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getShops",
		"outputs": [
			{
				"internalType": "address[]",
				"name": "",
				"type": "address[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "login",
				"type": "string"
			},
			{
				"internalType": "bytes32",
				"name": "password",
				"type": "bytes32"
			}
		],
		"name": "login",
		"outputs": [
			{
				"components": [
					{
						"internalType": "string",
						"name": "login",
						"type": "string"
					},
					{
						"internalType": "address",
						"name": "Address",
						"type": "address"
					},
					{
						"internalType": "bytes32",
						"name": "password",
						"type": "bytes32"
					},
					{
						"internalType": "string",
						"name": "FIO",
						"type": "string"
					},
					{
						"internalType": "enum Shops.ROLES",
						"name": "role",
						"type": "uint8"
					},
					{
						"internalType": "address",
						"name": "shopAddress",
						"type": "address"
					}
				],
				"internalType": "struct Shops.User",
				"name": "",
				"type": "tuple"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "login",
				"type": "string"
			},
			{
				"internalType": "bytes32",
				"name": "password",
				"type": "bytes32"
			},
			{
				"internalType": "string",
				"name": "FIO",
				"type": "string"
			}
		],
		"name": "registration",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "enum Shops.TYPE",
				"name": "typeRequest",
				"type": "uint8"
			},
			{
				"internalType": "address",
				"name": "shopAddress",
				"type": "address"
			}
		],
		"name": "request",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "requestsRole",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			},
			{
				"internalType": "enum Shops.TYPE",
				"name": "typeRequest",
				"type": "uint8"
			},
			{
				"internalType": "address",
				"name": "AddressSender",
				"type": "address"
			},
			{
				"internalType": "enum Shops.ROLES",
				"name": "currentRole",
				"type": "uint8"
			},
			{
				"internalType": "enum Shops.ROLES",
				"name": "newRole",
				"type": "uint8"
			},
			{
				"internalType": "enum Shops.STATUS",
				"name": "status",
				"type": "uint8"
			},
			{
				"internalType": "address",
				"name": "shopAddress",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "shopsArray",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "usersArray",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]