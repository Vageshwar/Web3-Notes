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