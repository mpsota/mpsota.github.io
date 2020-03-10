goog.provide('ebc.sablier');
goog.require('cljs.core');
ebc.sablier.sablier_abi_str = "[\n   {\n     \"constant\": true,\n     \"inputs\": [],\n     \"name\": \"nextStreamId\",\n     \"outputs\": [\n       {\n         \"internalType\": \"uint256\",\n         \"name\": \"\",\n         \"type\": \"uint256\"\n       }\n     ],\n     \"payable\": false,\n     \"stateMutability\": \"view\",\n     \"type\": \"function\"\n   },\n   {\n     \"constant\": false,\n     \"inputs\": [],\n     \"name\": \"unpause\",\n     \"outputs\": [],\n     \"payable\": false,\n     \"stateMutability\": \"nonpayable\",\n     \"type\": \"function\"\n   },\n   {\n     \"constant\": true,\n     \"inputs\": [\n       {\n         \"internalType\": \"address\",\n         \"name\": \"account\",\n         \"type\": \"address\"\n       }\n     ],\n     \"name\": \"isPauser\",\n     \"outputs\": [\n       {\n         \"internalType\": \"bool\",\n         \"name\": \"\",\n         \"type\": \"bool\"\n       }\n     ],\n     \"payable\": false,\n     \"stateMutability\": \"view\",\n     \"type\": \"function\"\n   },\n   {\n     \"constant\": true,\n     \"inputs\": [],\n     \"name\": \"paused\",\n     \"outputs\": [\n       {\n         \"internalType\": \"bool\",\n         \"name\": \"\",\n         \"type\": \"bool\"\n       }\n     ],\n     \"payable\": false,\n     \"stateMutability\": \"view\",\n     \"type\": \"function\"\n   },\n   {\n     \"constant\": false,\n     \"inputs\": [],\n     \"name\": \"initialize\",\n     \"outputs\": [],\n     \"payable\": false,\n     \"stateMutability\": \"nonpayable\",\n     \"type\": \"function\"\n   },\n   {\n     \"constant\": false,\n     \"inputs\": [\n       {\n         \"internalType\": \"address\",\n         \"name\": \"account\",\n         \"type\": \"address\"\n       }\n     ],\n     \"name\": \"addPauser\",\n     \"outputs\": [],\n     \"payable\": false,\n     \"stateMutability\": \"nonpayable\",\n     \"type\": \"function\"\n   },\n   {\n     \"constant\": false,\n     \"inputs\": [],\n     \"name\": \"pause\",\n     \"outputs\": [],\n     \"payable\": false,\n     \"stateMutability\": \"nonpayable\",\n     \"type\": \"function\"\n   },\n   {\n     \"constant\": true,\n     \"inputs\": [],\n     \"name\": \"owner\",\n     \"outputs\": [\n       {\n         \"internalType\": \"address\",\n         \"name\": \"\",\n         \"type\": \"address\"\n       }\n     ],\n     \"payable\": false,\n     \"stateMutability\": \"view\",\n     \"type\": \"function\"\n   },\n   {\n     \"constant\": true,\n     \"inputs\": [],\n     \"name\": \"isOwner\",\n     \"outputs\": [\n       {\n         \"internalType\": \"bool\",\n         \"name\": \"\",\n         \"type\": \"bool\"\n       }\n     ],\n     \"payable\": false,\n     \"stateMutability\": \"view\",\n     \"type\": \"function\"\n   },\n   {\n     \"constant\": false,\n     \"inputs\": [\n       {\n         \"internalType\": \"address\",\n         \"name\": \"sender\",\n         \"type\": \"address\"\n       }\n     ],\n     \"name\": \"initialize\",\n     \"outputs\": [],\n     \"payable\": false,\n     \"stateMutability\": \"nonpayable\",\n     \"type\": \"function\"\n   },\n   {\n     \"constant\": true,\n     \"inputs\": [],\n     \"name\": \"cTokenManager\",\n     \"outputs\": [\n       {\n         \"internalType\": \"contract ICTokenManager\",\n         \"name\": \"\",\n         \"type\": \"address\"\n       }\n     ],\n     \"payable\": false,\n     \"stateMutability\": \"view\",\n     \"type\": \"function\"\n   },\n   {\n     \"constant\": true,\n     \"inputs\": [],\n     \"name\": \"fee\",\n     \"outputs\": [\n       {\n         \"internalType\": \"uint256\",\n         \"name\": \"mantissa\",\n         \"type\": \"uint256\"\n       }\n     ],\n     \"payable\": false,\n     \"stateMutability\": \"view\",\n     \"type\": \"function\"\n   },\n   {\n     \"constant\": false,\n     \"inputs\": [\n       {\n         \"internalType\": \"address\",\n         \"name\": \"newOwner\",\n         \"type\": \"address\"\n       }\n     ],\n     \"name\": \"transferOwnership\",\n     \"outputs\": [],\n     \"payable\": false,\n     \"stateMutability\": \"nonpayable\",\n     \"type\": \"function\"\n   },\n   {\n     \"inputs\": [\n       {\n         \"internalType\": \"address\",\n         \"name\": \"cTokenManagerAddress\",\n         \"type\": \"address\"\n       }\n     ],\n     \"payable\": false,\n     \"stateMutability\": \"nonpayable\",\n     \"type\": \"constructor\"\n   },\n   {\n     \"anonymous\": false,\n     \"inputs\": [\n       {\n         \"indexed\": true,\n         \"internalType\": \"uint256\",\n         \"name\": \"streamId\",\n         \"type\": \"uint256\"\n       },\n       {\n         \"indexed\": false,\n         \"internalType\": \"uint256\",\n         \"name\": \"exchangeRate\",\n         \"type\": \"uint256\"\n       },\n       {\n         \"indexed\": false,\n         \"internalType\": \"uint256\",\n         \"name\": \"senderSharePercentage\",\n         \"type\": \"uint256\"\n       },\n       {\n         \"indexed\": false,\n         \"internalType\": \"uint256\",\n         \"name\": \"recipientSharePercentage\",\n         \"type\": \"uint256\"\n       }\n     ],\n     \"name\": \"CreateCompoundingStream\",\n     \"type\": \"event\"\n   },\n   {\n     \"anonymous\": false,\n     \"inputs\": [\n       {\n         \"indexed\": true,\n         \"internalType\": \"uint256\",\n         \"name\": \"streamId\",\n         \"type\": \"uint256\"\n       },\n       {\n         \"indexed\": false,\n         \"internalType\": \"uint256\",\n         \"name\": \"senderInterest\",\n         \"type\": \"uint256\"\n       },\n       {\n         \"indexed\": false,\n         \"internalType\": \"uint256\",\n         \"name\": \"recipientInterest\",\n         \"type\": \"uint256\"\n       },\n       {\n         \"indexed\": false,\n         \"internalType\": \"uint256\",\n         \"name\": \"sablierInterest\",\n         \"type\": \"uint256\"\n       }\n     ],\n     \"name\": \"PayInterest\",\n     \"type\": \"event\"\n   },\n   {\n     \"anonymous\": false,\n     \"inputs\": [\n       {\n         \"indexed\": true,\n         \"internalType\": \"address\",\n         \"name\": \"tokenAddress\",\n         \"type\": \"address\"\n       },\n       {\n         \"indexed\": true,\n         \"internalType\": \"uint256\",\n         \"name\": \"amount\",\n         \"type\": \"uint256\"\n       }\n     ],\n     \"name\": \"TakeEarnings\",\n     \"type\": \"event\"\n   },\n   {\n     \"anonymous\": false,\n     \"inputs\": [\n       {\n         \"indexed\": true,\n         \"internalType\": \"uint256\",\n         \"name\": \"fee\",\n         \"type\": \"uint256\"\n       }\n     ],\n     \"name\": \"UpdateFee\",\n     \"type\": \"event\"\n   },\n   {\n     \"anonymous\": false,\n     \"inputs\": [\n       {\n         \"indexed\": false,\n         \"internalType\": \"address\",\n         \"name\": \"account\",\n         \"type\": \"address\"\n       }\n     ],\n     \"name\": \"Paused\",\n     \"type\": \"event\"\n   },\n   {\n     \"anonymous\": false,\n     \"inputs\": [\n       {\n         \"indexed\": false,\n         \"internalType\": \"address\",\n         \"name\": \"account\",\n         \"type\": \"address\"\n       }\n     ],\n     \"name\": \"Unpaused\",\n     \"type\": \"event\"\n   },\n   {\n     \"anonymous\": false,\n     \"inputs\": [\n       {\n         \"indexed\": true,\n         \"internalType\": \"address\",\n         \"name\": \"account\",\n         \"type\": \"address\"\n       }\n     ],\n     \"name\": \"PauserAdded\",\n     \"type\": \"event\"\n   },\n   {\n     \"anonymous\": false,\n     \"inputs\": [\n       {\n         \"indexed\": true,\n         \"internalType\": \"address\",\n         \"name\": \"account\",\n         \"type\": \"address\"\n       }\n     ],\n     \"name\": \"PauserRemoved\",\n     \"type\": \"event\"\n   },\n   {\n     \"anonymous\": false,\n     \"inputs\": [\n       {\n         \"indexed\": true,\n         \"internalType\": \"address\",\n         \"name\": \"previousOwner\",\n         \"type\": \"address\"\n       },\n       {\n         \"indexed\": true,\n         \"internalType\": \"address\",\n         \"name\": \"newOwner\",\n         \"type\": \"address\"\n       }\n     ],\n     \"name\": \"OwnershipTransferred\",\n     \"type\": \"event\"\n   },\n   {\n     \"anonymous\": false,\n     \"inputs\": [\n       {\n         \"indexed\": true,\n         \"internalType\": \"uint256\",\n         \"name\": \"streamId\",\n         \"type\": \"uint256\"\n       },\n       {\n         \"indexed\": true,\n         \"internalType\": \"address\",\n         \"name\": \"sender\",\n         \"type\": \"address\"\n       },\n       {\n         \"indexed\": true,\n         \"internalType\": \"address\",\n         \"name\": \"recipient\",\n         \"type\": \"address\"\n       },\n       {\n         \"indexed\": false,\n         \"internalType\": \"uint256\",\n         \"name\": \"deposit\",\n         \"type\": \"uint256\"\n       },\n       {\n         \"indexed\": false,\n         \"internalType\": \"address\",\n         \"name\": \"tokenAddress\",\n         \"type\": \"address\"\n       },\n       {\n         \"indexed\": false,\n         \"internalType\": \"uint256\",\n         \"name\": \"startTime\",\n         \"type\": \"uint256\"\n       },\n       {\n         \"indexed\": false,\n         \"internalType\": \"uint256\",\n         \"name\": \"stopTime\",\n         \"type\": \"uint256\"\n       }\n     ],\n     \"name\": \"CreateStream\",\n     \"type\": \"event\"\n   },\n   {\n     \"anonymous\": false,\n     \"inputs\": [\n       {\n         \"indexed\": true,\n         \"internalType\": \"uint256\",\n         \"name\": \"streamId\",\n         \"type\": \"uint256\"\n       },\n       {\n         \"indexed\": true,\n         \"internalType\": \"address\",\n         \"name\": \"recipient\",\n         \"type\": \"address\"\n       },\n       {\n         \"indexed\": false,\n         \"internalType\": \"uint256\",\n         \"name\": \"amount\",\n         \"type\": \"uint256\"\n       }\n     ],\n     \"name\": \"WithdrawFromStream\",\n     \"type\": \"event\"\n   },\n   {\n     \"anonymous\": false,\n     \"inputs\": [\n       {\n         \"indexed\": true,\n         \"internalType\": \"uint256\",\n         \"name\": \"streamId\",\n         \"type\": \"uint256\"\n       },\n       {\n         \"indexed\": true,\n         \"internalType\": \"address\",\n         \"name\": \"sender\",\n         \"type\": \"address\"\n       },\n       {\n         \"indexed\": true,\n         \"internalType\": \"address\",\n         \"name\": \"recipient\",\n         \"type\": \"address\"\n       },\n       {\n         \"indexed\": false,\n         \"internalType\": \"uint256\",\n         \"name\": \"senderBalance\",\n         \"type\": \"uint256\"\n       },\n       {\n         \"indexed\": false,\n         \"internalType\": \"uint256\",\n         \"name\": \"recipientBalance\",\n         \"type\": \"uint256\"\n       }\n     ],\n     \"name\": \"CancelStream\",\n     \"type\": \"event\"\n   },\n   {\n     \"constant\": false,\n     \"inputs\": [\n       {\n         \"internalType\": \"uint256\",\n         \"name\": \"feePercentage\",\n         \"type\": \"uint256\"\n       }\n     ],\n     \"name\": \"updateFee\",\n     \"outputs\": [],\n     \"payable\": false,\n     \"stateMutability\": \"nonpayable\",\n     \"type\": \"function\"\n   },\n   {\n     \"constant\": false,\n     \"inputs\": [\n       {\n         \"internalType\": \"address\",\n         \"name\": \"tokenAddress\",\n         \"type\": \"address\"\n       },\n       {\n         \"internalType\": \"uint256\",\n         \"name\": \"amount\",\n         \"type\": \"uint256\"\n       }\n     ],\n     \"name\": \"takeEarnings\",\n     \"outputs\": [],\n     \"payable\": false,\n     \"stateMutability\": \"nonpayable\",\n     \"type\": \"function\"\n   },\n   {\n     \"constant\": true,\n     \"inputs\": [\n       {\n         \"internalType\": \"uint256\",\n         \"name\": \"streamId\",\n         \"type\": \"uint256\"\n       }\n     ],\n     \"name\": \"getStream\",\n     \"outputs\": [\n       {\n         \"internalType\": \"address\",\n         \"name\": \"sender\",\n         \"type\": \"address\"\n       },\n       {\n         \"internalType\": \"address\",\n         \"name\": \"recipient\",\n         \"type\": \"address\"\n       },\n       {\n         \"internalType\": \"uint256\",\n         \"name\": \"deposit\",\n         \"type\": \"uint256\"\n       },\n       {\n         \"internalType\": \"address\",\n         \"name\": \"tokenAddress\",\n         \"type\": \"address\"\n       },\n       {\n         \"internalType\": \"uint256\",\n         \"name\": \"startTime\",\n         \"type\": \"uint256\"\n       },\n       {\n         \"internalType\": \"uint256\",\n         \"name\": \"stopTime\",\n         \"type\": \"uint256\"\n       },\n       {\n         \"internalType\": \"uint256\",\n         \"name\": \"remainingBalance\",\n         \"type\": \"uint256\"\n       },\n       {\n         \"internalType\": \"uint256\",\n         \"name\": \"ratePerSecond\",\n         \"type\": \"uint256\"\n       }\n     ],\n     \"payable\": false,\n     \"stateMutability\": \"view\",\n     \"type\": \"function\"\n   },\n   {\n     \"constant\": true,\n     \"inputs\": [\n       {\n         \"internalType\": \"uint256\",\n         \"name\": \"streamId\",\n         \"type\": \"uint256\"\n       }\n     ],\n     \"name\": \"deltaOf\",\n     \"outputs\": [\n       {\n         \"internalType\": \"uint256\",\n         \"name\": \"delta\",\n         \"type\": \"uint256\"\n       }\n     ],\n     \"payable\": false,\n     \"stateMutability\": \"view\",\n     \"type\": \"function\"\n   },\n   {\n     \"constant\": true,\n     \"inputs\": [\n       {\n         \"internalType\": \"uint256\",\n         \"name\": \"streamId\",\n         \"type\": \"uint256\"\n       },\n       {\n         \"internalType\": \"address\",\n         \"name\": \"who\",\n         \"type\": \"address\"\n       }\n     ],\n     \"name\": \"balanceOf\",\n     \"outputs\": [\n       {\n         \"internalType\": \"uint256\",\n         \"name\": \"balance\",\n         \"type\": \"uint256\"\n       }\n     ],\n     \"payable\": false,\n     \"stateMutability\": \"view\",\n     \"type\": \"function\"\n   },\n   {\n     \"constant\": true,\n     \"inputs\": [\n       {\n         \"internalType\": \"uint256\",\n         \"name\": \"streamId\",\n         \"type\": \"uint256\"\n       }\n     ],\n     \"name\": \"isCompoundingStream\",\n     \"outputs\": [\n       {\n         \"internalType\": \"bool\",\n         \"name\": \"\",\n         \"type\": \"bool\"\n       }\n     ],\n     \"payable\": false,\n     \"stateMutability\": \"view\",\n     \"type\": \"function\"\n   },\n   {\n     \"constant\": true,\n     \"inputs\": [\n       {\n         \"internalType\": \"uint256\",\n         \"name\": \"streamId\",\n         \"type\": \"uint256\"\n       }\n     ],\n     \"name\": \"getCompoundingStream\",\n     \"outputs\": [\n       {\n         \"internalType\": \"address\",\n         \"name\": \"sender\",\n         \"type\": \"address\"\n       },\n       {\n         \"internalType\": \"address\",\n         \"name\": \"recipient\",\n         \"type\": \"address\"\n       },\n       {\n         \"internalType\": \"uint256\",\n         \"name\": \"deposit\",\n         \"type\": \"uint256\"\n       },\n       {\n         \"internalType\": \"address\",\n         \"name\": \"tokenAddress\",\n         \"type\": \"address\"\n       },\n       {\n         \"internalType\": \"uint256\",\n         \"name\": \"startTime\",\n         \"type\": \"uint256\"\n       },\n       {\n         \"internalType\": \"uint256\",\n         \"name\": \"stopTime\",\n         \"type\": \"uint256\"\n       },\n       {\n         \"internalType\": \"uint256\",\n         \"name\": \"remainingBalance\",\n         \"type\": \"uint256\"\n       },\n       {\n         \"internalType\": \"uint256\",\n         \"name\": \"ratePerSecond\",\n         \"type\": \"uint256\"\n       },\n       {\n         \"internalType\": \"uint256\",\n         \"name\": \"exchangeRateInitial\",\n         \"type\": \"uint256\"\n       },\n       {\n         \"internalType\": \"uint256\",\n         \"name\": \"senderSharePercentage\",\n         \"type\": \"uint256\"\n       },\n       {\n         \"internalType\": \"uint256\",\n         \"name\": \"recipientSharePercentage\",\n         \"type\": \"uint256\"\n       }\n     ],\n     \"payable\": false,\n     \"stateMutability\": \"view\",\n     \"type\": \"function\"\n   },\n   {\n     \"constant\": false,\n     \"inputs\": [\n       {\n         \"internalType\": \"uint256\",\n         \"name\": \"streamId\",\n         \"type\": \"uint256\"\n       },\n       {\n         \"internalType\": \"uint256\",\n         \"name\": \"amount\",\n         \"type\": \"uint256\"\n       }\n     ],\n     \"name\": \"interestOf\",\n     \"outputs\": [\n       {\n         \"internalType\": \"uint256\",\n         \"name\": \"senderInterest\",\n         \"type\": \"uint256\"\n       },\n       {\n         \"internalType\": \"uint256\",\n         \"name\": \"recipientInterest\",\n         \"type\": \"uint256\"\n       },\n       {\n         \"internalType\": \"uint256\",\n         \"name\": \"sablierInterest\",\n         \"type\": \"uint256\"\n       }\n     ],\n     \"payable\": false,\n     \"stateMutability\": \"nonpayable\",\n     \"type\": \"function\"\n   },\n   {\n     \"constant\": true,\n     \"inputs\": [\n       {\n         \"internalType\": \"address\",\n         \"name\": \"tokenAddress\",\n         \"type\": \"address\"\n       }\n     ],\n     \"name\": \"getEarnings\",\n     \"outputs\": [\n       {\n         \"internalType\": \"uint256\",\n         \"name\": \"\",\n         \"type\": \"uint256\"\n       }\n     ],\n     \"payable\": false,\n     \"stateMutability\": \"view\",\n     \"type\": \"function\"\n   },\n   {\n     \"constant\": false,\n     \"inputs\": [\n       {\n         \"internalType\": \"address\",\n         \"name\": \"recipient\",\n         \"type\": \"address\"\n       },\n       {\n         \"internalType\": \"uint256\",\n         \"name\": \"deposit\",\n         \"type\": \"uint256\"\n       },\n       {\n         \"internalType\": \"address\",\n         \"name\": \"tokenAddress\",\n         \"type\": \"address\"\n       },\n       {\n         \"internalType\": \"uint256\",\n         \"name\": \"startTime\",\n         \"type\": \"uint256\"\n       },\n       {\n         \"internalType\": \"uint256\",\n         \"name\": \"stopTime\",\n         \"type\": \"uint256\"\n       }\n     ],\n     \"name\": \"createStream\",\n     \"outputs\": [\n       {\n         \"internalType\": \"uint256\",\n         \"name\": \"\",\n         \"type\": \"uint256\"\n       }\n     ],\n     \"payable\": false,\n     \"stateMutability\": \"nonpayable\",\n     \"type\": \"function\"\n   },\n   {\n     \"constant\": false,\n     \"inputs\": [\n       {\n         \"internalType\": \"address\",\n         \"name\": \"recipient\",\n         \"type\": \"address\"\n       },\n       {\n         \"internalType\": \"uint256\",\n         \"name\": \"deposit\",\n         \"type\": \"uint256\"\n       },\n       {\n         \"internalType\": \"address\",\n         \"name\": \"tokenAddress\",\n         \"type\": \"address\"\n       },\n       {\n         \"internalType\": \"uint256\",\n         \"name\": \"startTime\",\n         \"type\": \"uint256\"\n       },\n       {\n         \"internalType\": \"uint256\",\n         \"name\": \"stopTime\",\n         \"type\": \"uint256\"\n       },\n       {\n         \"internalType\": \"uint256\",\n         \"name\": \"senderSharePercentage\",\n         \"type\": \"uint256\"\n       },\n       {\n         \"internalType\": \"uint256\",\n         \"name\": \"recipientSharePercentage\",\n         \"type\": \"uint256\"\n       }\n     ],\n     \"name\": \"createCompoundingStream\",\n     \"outputs\": [\n       {\n         \"internalType\": \"uint256\",\n         \"name\": \"\",\n         \"type\": \"uint256\"\n       }\n     ],\n     \"payable\": false,\n     \"stateMutability\": \"nonpayable\",\n     \"type\": \"function\"\n   },\n   {\n     \"constant\": false,\n     \"inputs\": [\n       {\n         \"internalType\": \"uint256\",\n         \"name\": \"streamId\",\n         \"type\": \"uint256\"\n       },\n       {\n         \"internalType\": \"uint256\",\n         \"name\": \"amount\",\n         \"type\": \"uint256\"\n       }\n     ],\n     \"name\": \"withdrawFromStream\",\n     \"outputs\": [\n       {\n         \"internalType\": \"bool\",\n         \"name\": \"\",\n         \"type\": \"bool\"\n       }\n     ],\n     \"payable\": false,\n     \"stateMutability\": \"nonpayable\",\n     \"type\": \"function\"\n   },\n   {\n     \"constant\": false,\n     \"inputs\": [\n       {\n         \"internalType\": \"uint256\",\n         \"name\": \"streamId\",\n         \"type\": \"uint256\"\n       }\n     ],\n     \"name\": \"cancelStream\",\n     \"outputs\": [\n       {\n         \"internalType\": \"bool\",\n         \"name\": \"\",\n         \"type\": \"bool\"\n       }\n     ],\n     \"payable\": false,\n     \"stateMutability\": \"nonpayable\",\n     \"type\": \"function\"\n   }\n ]";
ebc.sablier.test_dai_abi = JSON.parse("[{\"constant\":true,\"inputs\":[],\"name\":\"name\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"approve\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"totalSupply\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"transferFrom\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"decimals\",\"outputs\":[{\"internalType\":\"uint8\",\"name\":\"\",\"type\":\"uint8\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"addedValue\",\"type\":\"uint256\"}],\"name\":\"increaseAllowance\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"mint\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"}],\"name\":\"balanceOf\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"symbol\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"subtractedValue\",\"type\":\"uint256\"}],\"name\":\"decreaseAllowance\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"transfer\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"}],\"name\":\"allowance\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"Transfer\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"Approval\",\"type\":\"event\"}]");
ebc.sablier.sablier_abi = JSON.parse(ebc.sablier.sablier_abi_str);

//# sourceMappingURL=ebc.sablier.js.map