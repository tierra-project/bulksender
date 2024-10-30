const bulksender = [
	{
		inputs: [],
		name: 'FailedToSendValue',
		type: 'error',
	},
	{
		inputs: [],
		name: 'InvalidAmount',
		type: 'error',
	},
	{
		inputs: [],
		name: 'InvalidAmounts',
		type: 'error',
	},
	{
		inputs: [],
		name: 'InvalidInitialization',
		type: 'error',
	},
	{
		inputs: [],
		name: 'InvalidRecipient',
		type: 'error',
	},
	{
		inputs: [],
		name: 'InvalidRecipients',
		type: 'error',
	},
	{
		inputs: [],
		name: 'InvalidToken',
		type: 'error',
	},
	{
		inputs: [],
		name: 'NotEnoughApproval',
		type: 'error',
	},
	{
		inputs: [],
		name: 'NotEnoughBalance',
		type: 'error',
	},
	{
		inputs: [],
		name: 'NotInitializing',
		type: 'error',
	},
	{
		inputs: [],
		name: 'ReentrancyGuardReentrantCall',
		type: 'error',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: 'token',
				type: 'address',
			},
		],
		name: 'SafeERC20FailedOperation',
		type: 'error',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: 'uint64',
				name: 'version',
				type: 'uint64',
			},
		],
		name: 'Initialized',
		type: 'event',
	},
	{
		inputs: [],
		name: 'initialize',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address[]',
				name: 'recipients',
				type: 'address[]',
			},
			{
				internalType: 'uint256[]',
				name: 'amount',
				type: 'uint256[]',
			},
		],
		name: 'sendEthToMany',
		outputs: [],
		stateMutability: 'payable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address[]',
				name: 'recipients',
				type: 'address[]',
			},
			{
				internalType: 'uint256',
				name: 'amount',
				type: 'uint256',
			},
		],
		name: 'sendSameAmountToManyInFee',
		outputs: [],
		stateMutability: 'payable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'contract IERC20',
				name: 'token',
				type: 'address',
			},
			{
				internalType: 'address[]',
				name: 'recipients',
				type: 'address[]',
			},
			{
				internalType: 'uint256',
				name: 'amount',
				type: 'uint256',
			},
		],
		name: 'sendSameAmountToManyInToken',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'contract IERC20',
				name: 'token',
				type: 'address',
			},
			{
				internalType: 'address[]',
				name: 'recipients',
				type: 'address[]',
			},
			{
				internalType: 'uint256[]',
				name: 'amounts',
				type: 'uint256[]',
			},
		],
		name: 'sendTokenToManyInToken',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
];
