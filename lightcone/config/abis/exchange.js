export default [
  {
    "constant": false,
    "inputs": [
      {
        "internalType": "uint256",
        "name": "pubKeyX",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "pubKeyY",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "permission",
        "type": "bytes"
      }
    ],
    "name": "createOrUpdateAccount",
    "outputs": [
      {
        "internalType": "uint24",
        "name": "accountID",
        "type": "uint24"
      },
      {
        "internalType": "bool",
        "name": "isAccountNew",
        "type": "bool"
      },
      {
        "internalType": "bool",
        "name": "isAccountUpdated",
        "type": "bool"
      }
    ],
    "payable": true,
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "internalType": "address",
        "name": "tokenAddress",
        "type": "address"
      },
      {
        "internalType": "uint96",
        "name": "amount",
        "type": "uint96"
      }
    ],
    "name": "deposit",
    "outputs": [],
    "payable": true,
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "internalType": "address",
        "name": "recipient",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "tokenAddress",
        "type": "address"
      },
      {
        "internalType": "uint96",
        "name": "amount",
        "type": "uint96"
      }
    ],
    "name": "depositTo",
    "outputs": [],
    "payable": true,
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "getFees",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "_accountCreationFeeETH",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "_accountUpdateFeeETH",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "_depositFeeETH",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "_withdrawalFeeETH",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "internalType": "address",
        "name": "tokenAddress",
        "type": "address"
      },
      {
        "internalType": "uint96",
        "name": "amount",
        "type": "uint96"
      }
    ],
    "name": "withdraw",
    "outputs": [],
    "payable": true,
    "stateMutability": "payable",
    "type": "function"
  },{
  "constant": false,
  "inputs": [
    {
      "internalType": "uint256",
      "name": "pubKeyX",
      "type": "uint256"
    },
    {
      "internalType": "uint256",
      "name": "pubKeyY",
      "type": "uint256"
    },
    {
      "internalType": "address",
      "name": "tokenAddress",
      "type": "address"
    },
    {
      "internalType": "uint96",
      "name": "amount",
      "type": "uint96"
    },
    {
      "internalType": "bytes",
      "name": "permission",
      "type": "bytes"
    }
  ],
  "name": "updateAccountAndDeposit",
  "outputs": [
    {
      "internalType": "uint24",
      "name": "accountID",
      "type": "uint24"
    },
    {
      "internalType": "bool",
      "name": "isAccountNew",
      "type": "bool"
    },
    {
      "internalType": "bool",
      "name": "isAccountUpdated",
      "type": "bool"
    }
  ],
  "payable": true,
  "stateMutability": "payable",
  "type": "function"
}
]
