`Blockchain`:
A blockchain is a public database that is updated and shared across many computers in a network.

"Block" refers to data and state being stored in consecutive groups known as "blocks". If you send ETH to someone else, the transaction data needs to be added to a block to be successful.

"Chain" refers to the fact that each block cryptographically references its parent. In other words, blocks get chained together. The data in a block cannot change without changing all subsequent blocks, which would require the consensus of the entire network.

`Nodes`:
Every computer in the network must agree upon each new block and the chain as a whole. These computers are known as "nodes". Nodes ensure everyone interacting with the blockchain has the same data. To accomplish this distributed agreement, blockchains need a [consensus mechanism](../conensus-algo/consensus-algo.md).

`Transaction`: 
Transactions are cryptographically signed instructions from accounts. An account will initiate a transaction to update the state of the Ethereum network. The simplest transaction is transferring ETH from one account to another.

`Accounts`:
An Ethereum account is an entity with an ether (ETH) balance that can send transactions on Ethereum. Accounts can be user-controlled or deployed as smart contracts.

`Miner`:
A miner is a participant in a Proof of Work blockchain network who uses computational power to solve complex mathematical puzzles. Miners validate transactions, create new blocks, and are rewarded with cryptocurrency for their efforts. They play a crucial role in maintaining network security and processing transactions.

`Mathematical Puzzles`:
In Proof of Work, mathematical puzzles are computational problems that miners must solve to create new blocks. These puzzles typically involve finding a specific hash value that meets certain criteria (like having a certain number of leading zeros). The puzzles are designed to be difficult to solve but easy to verify, ensuring network security while maintaining efficiency.

`51% Attack`:
A 51% attack occurs when a single entity or group gains control of more than 50% of a blockchain network's mining power. This majority control allows them to:
- Double-spend coins
- Prevent new transactions from being confirmed
- Reverse recent transactions
- Potentially fork the blockchain
Such attacks are extremely difficult to execute on established networks due to the massive computational power required.

`Sybil attack`: Sybil attacks refer to individual humans tricking a system into thinking they are multiple people to increase their influence.

`Validator`:
In Proof of Stake, a validator is a network participant who is responsible for creating and validating new blocks. Validators are chosen based on the amount of cryptocurrency they have staked and are willing to lock up as collateral. They earn rewards for honest participation and can lose their stake for malicious behavior.

`Staking`:
Staking refers to the process of locking up cryptocurrency as collateral to participate in block validation in a Proof of Stake network. The staked amount serves as a security deposit and determines the validator's chances of being selected to create blocks. Stakers earn rewards for their participation in network security.

`Slashing`:
Slashing is a penalty mechanism in Proof of Stake networks where validators lose a portion of their staked cryptocurrency for malicious or negligent behavior. Common slashing conditions include:
- Double signing blocks
- Extended downtime
- Network attacks
- Protocol violations

`Delegation`:
Delegation allows cryptocurrency holders to participate in staking without running their own validator node. Token holders can delegate their stake to existing validators, sharing in the rewards while the validator handles the technical aspects of block validation. This makes staking more accessible to average users.

`dApp`:
A decentralized application (dApp) is an application that runs on a blockchain network. Unlike traditional apps, dApps are:
- Open source
- Decentralized
- Use blockchain for data storage
- Use tokens for functionality
- Operate autonomously through smart contracts

`Web3 Wallet`:
A Web3 wallet is a digital tool that allows users to:
- Store and manage cryptocurrencies
- Interact with dApps
- Sign transactions
- Manage digital identities
- Store NFTs and other digital assets
Popular examples include MetaMask, Trust Wallet, and Coinbase Wallet.

`Gas`:
Gas is the unit of measurement for the computational effort required to execute operations on the Ethereum network. It:
- Prevents spam and infinite loops
- Compensates miners/validators
- Price fluctuates based on network demand
- Paid in the network's native cryptocurrency (ETH for Ethereum)

`Smart Contract`:
A smart contract is a self-executing program stored on a blockchain that automatically executes when predetermined conditions are met. They:
- Are immutable once deployed
- Run on all nodes in the network
- Enable trustless transactions
- Can hold and transfer value
- Are written in programming languages like Solidity

`Layer 2`:
Layer 2 solutions are protocols built on top of a blockchain (Layer 1) to improve scalability and reduce transaction costs. They:
- Process transactions off-chain
- Reduce network congestion
- Lower transaction fees
- Maintain security through the main chain
Examples include Optimism, Arbitrum, and Polygon.

`Zero-Knowledge Proof`:
A zero-knowledge proof is a cryptographic method that allows one party to prove to another that they know a value without revealing the value itself. They:
- Enhance privacy
- Enable confidential transactions
- Reduce computational requirements
- Maintain security
Popular implementations include zk-SNARKs and zk-STARKs.