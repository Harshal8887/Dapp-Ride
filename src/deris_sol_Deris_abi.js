export const derisInterface = [
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "riderNumber",
				"type": "uint256"
			},
			{
				"components": [
					{
						"internalType": "int256",
						"name": "lat",
						"type": "int256"
					},
					{
						"internalType": "int256",
						"name": "long",
						"type": "int256"
					}
				],
				"indexed": false,
				"internalType": "struct Deris.coordinates",
				"name": "pick",
				"type": "tuple"
			},
			{
				"components": [
					{
						"internalType": "int256",
						"name": "lat",
						"type": "int256"
					},
					{
						"internalType": "int256",
						"name": "long",
						"type": "int256"
					}
				],
				"indexed": false,
				"internalType": "struct Deris.coordinates",
				"name": "drop",
				"type": "tuple"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "escrow",
				"type": "uint256"
			}
		],
		"name": "RiderDetails",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "riderNumber",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "arrivalTime",
				"type": "uint256"
			}
		],
		"name": "RiderPicked",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "driverNumber",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "bills",
				"type": "uint256"
			}
		],
		"name": "cashMoney",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "riderNumber",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "int256[]",
				"name": "location",
				"type": "int256[]"
			}
		],
		"name": "imHere",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "usrNumber",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "pairNumber",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "cancelFee",
				"type": "uint256"
			}
		],
		"name": "undone",
		"type": "event"
	},
	{
		"inputs": [],
		"name": "driveRequest",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getNumber",
		"outputs": [
			{
				"internalType": "int256",
				"name": "",
				"type": "int256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getWaitingRiders",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "int256[]",
				"name": "loc",
				"type": "int256[]"
			}
		],
		"name": "informRider",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "payDriver",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "riderNumber",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "arrivalTime",
				"type": "uint256"
			}
		],
		"name": "pickRider",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "int256[]",
				"name": "pick",
				"type": "int256[]"
			},
			{
				"internalType": "int256[]",
				"name": "drop",
				"type": "int256[]"
			},
			{
				"internalType": "uint256",
				"name": "tripCost",
				"type": "uint256"
			}
		],
		"name": "rideRequest",
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
		"name": "userList",
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
		"inputs": [],
		"name": "userReset",
		"outputs": [],
		"stateMutability": "payable",
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
		"name": "users",
		"outputs": [
			{
				"internalType": "bool",
				"name": "isUser",
				"type": "bool"
			},
			{
				"internalType": "uint256",
				"name": "number",
				"type": "uint256"
			},
			{
				"internalType": "enum Deris.Status",
				"name": "state",
				"type": "uint8"
			},
			{
				"internalType": "address",
				"name": "currPairing",
				"type": "address"
			},
			{
				"components": [
					{
						"internalType": "int256",
						"name": "lat",
						"type": "int256"
					},
					{
						"internalType": "int256",
						"name": "long",
						"type": "int256"
					}
				],
				"internalType": "struct Deris.coordinates",
				"name": "pickup",
				"type": "tuple"
			},
			{
				"components": [
					{
						"internalType": "int256",
						"name": "lat",
						"type": "int256"
					},
					{
						"internalType": "int256",
						"name": "long",
						"type": "int256"
					}
				],
				"internalType": "struct Deris.coordinates",
				"name": "dropoff",
				"type": "tuple"
			},
			{
				"internalType": "uint256",
				"name": "arrivalTime",
				"type": "uint256"
			},
			{
				"internalType": "bool",
				"name": "driverArrived",
				"type": "bool"
			},
			{
				"internalType": "bool",
				"name": "inProgress",
				"type": "bool"
			},
			{
				"internalType": "uint256",
				"name": "escrow",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "paid",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]