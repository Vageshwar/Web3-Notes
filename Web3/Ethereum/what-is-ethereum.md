### What is Ethereum?

Ethereum is a decentralized, open-source blockchain platform that enables the creation of smart contracts and decentralized applications (dApps). It was proposed by Vitalik Buterin in 2013 and launched in 2015. Unlike Bitcoin, which is primarily a digital currency, Ethereum is a programmable blockchain that allows developers to build various applications on top of it.

#### Key Features

1. **Smart Contracts**
   - Self-executing contracts with predefined rules
   - Written in Solidity programming language
   - Automatically execute when conditions are met
   - Immutable once deployed

2. **Ethereum Virtual Machine (EVM)**
   - Runtime environment for smart contracts
   - Ensures code execution is deterministic
   - Provides security and isolation
   - Runs on all nodes in the network

3. **Gas System**
   - Fee mechanism for transaction processing
   - Prevents spam and infinite loops
   - Paid in ETH (Ethereum's native cryptocurrency)
   - Gas price fluctuates based on network demand

4. **Accounts**
   - Two types of accounts:
     - Externally Owned Accounts (EOAs)
     - Contract Accounts
   - Each account has:
     - Balance (in ETH)
     - Nonce (transaction counter)
     - Storage (for contract accounts)
     - Code (for contract accounts)

#### Ethereum Architecture

1. **Network Layers**
   - Execution Layer (handles transactions and smart contracts)
   - Consensus Layer (manages network agreement)
   - Data Availability Layer (stores blockchain data)

2. **Block Structure**
   - Block header
   - Transaction list
   - State root
   - Gas limit
   - Timestamp

#### Example: Simple Transaction

```solidity
// Sending ETH from one account to another
// This is handled by the Ethereum network automatically
// No smart contract needed for basic transfers

// Example transaction data:
{
    "from": "0x742d35Cc6634C0532925a3b844Bc454e4438f44e",
    "to": "0x742d35Cc6634C0532925a3b844Bc454e4438f44f",
    "value": "1000000000000000000", // 1 ETH in wei
    "gas": "21000",
    "gasPrice": "20000000000" // 20 Gwei
}
```

#### Example: Basic Smart Contract

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract SimpleStorage {
    uint256 private value;
    
    event ValueChanged(uint256 newValue);
    
    function setValue(uint256 _value) public {
        value = _value;
        emit ValueChanged(_value);
    }
    
    function getValue() public view returns (uint256) {
        return value;
    }
}
```

#### Use Cases

1. **Decentralized Finance (DeFi)**
   - Lending platforms
   - Decentralized exchanges
   - Stablecoins
   - Yield farming

2. **Non-Fungible Tokens (NFTs)**
   - Digital art
   - Collectibles
   - Gaming assets
   - Virtual real estate

3. **Decentralized Autonomous Organizations (DAOs)**
   - Community governance
   - Treasury management
   - Voting systems

4. **Enterprise Solutions**
   - Supply chain tracking
   - Identity verification
   - Asset tokenization

#### Ethereum 2.0 (The Merge)

- Transition from Proof of Work to Proof of Stake
- Improved scalability and energy efficiency
- Sharding implementation for better throughput
- Enhanced security features

#### Conclusion

Ethereum has revolutionized the blockchain space by introducing programmability and smart contracts. Its robust ecosystem and continuous development make it the leading platform for decentralized applications and the foundation of Web3.
