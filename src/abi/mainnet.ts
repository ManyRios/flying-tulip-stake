export const MainnetABI = { 
  address: '0x8ecEbc2BF559D96c663E6cCD80e2C78431E0d9E9', 
  abi: [
  {
    "inputs": [
      { "internalType": "address", "name": "_coldStorage", "type": "address" }
    ],
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "addr",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "NewDeposit",
    "type": "event"
  },
  {
    "inputs": [],
    "name": "WithdrawPeriod",
    "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "coldStorage",
    "outputs": [{ "internalType": "address", "name": "", "type": "address" }],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "contractInfo",
    "outputs": [
      { "internalType": "uint256", "name": "_invested", "type": "uint256" },
      { "internalType": "uint256", "name": "_totalReward", "type": "uint256" },
      {
        "internalType": "uint256",
        "name": "_totalWithdrawed",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "_totalETHPoolInvested",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "_totalSoloPoolInvested",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "deposit",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "emergencyWithdraw",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getReward",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }],
    "name": "investHolders",
    "outputs": [
      { "internalType": "address", "name": "investAddress", "type": "address" },
      { "internalType": "uint256", "name": "investAmount", "type": "uint256" }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "lastGetRewardTime",
    "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "maxSoloStakingAmount",
    "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "maxStakingAmount",
    "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "minStakingAmount",
    "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "operator",
    "outputs": [{ "internalType": "address", "name": "", "type": "address" }],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "owner",
    "outputs": [{ "internalType": "address", "name": "", "type": "address" }],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [{ "internalType": "address", "name": "", "type": "address" }],
    "name": "players",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "userETHPoolInvested",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "userETHPoolWithdrawed",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "userSoloPoolInvested",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "userSoloPoolWithdrawed",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "userInvestedTime",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "userTotalInvested",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "userTotalRewardAmount",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "userTotalWithdrawed",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "reCall",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      { "internalType": "address", "name": "_coldStorage", "type": "address" }
    ],
    "name": "setColdStorage",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      { "internalType": "address", "name": "_operator", "type": "address" }
    ],
    "name": "setOperator",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      { "internalType": "address", "name": "_owner", "type": "address" }
    ],
    "name": "setOwner",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      { "internalType": "uint256", "name": "_minAmount", "type": "uint256" },
      { "internalType": "uint256", "name": "_maxStaking", "type": "uint256" },
      { "internalType": "uint256", "name": "_maxSolo", "type": "uint256" }
    ],
    "name": "setStakingAmounts",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      { "internalType": "uint256", "name": "_newPeriod", "type": "uint256" }
    ],
    "name": "setWithdrawPeriod",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "totalETHPoolInvested",
    "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "totalInvested",
    "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "totalReward",
    "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "totalSoloPoolInvested",
    "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "totalWithdrawAmount",
    "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "totalWithdrawed",
    "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      { "internalType": "address", "name": "_addr", "type": "address" }
    ],
    "name": "userInfo",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "userETHPoolInvested",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "userSoloPoolInvested",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "userETHPoolWithdrawed",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "userSoloPoolWithdrawed",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "userTotalInvested",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "userTotalRewardAmount",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "userTotalWithdrawed",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "userInvestedTime",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }],
    "name": "whitelistHolders",
    "outputs": [
      {
        "internalType": "address",
        "name": "withdrawAddress",
        "type": "address"
      },
      { "internalType": "uint256", "name": "withdrawAmount", "type": "uint256" }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "whitelistLength",
    "outputs": [
      { "internalType": "uint256", "name": "length", "type": "uint256" }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [{ "internalType": "address", "name": "", "type": "address" }],
    "name": "whitelistRegistered",
    "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "withdraw",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  }
]} as const
