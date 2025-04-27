### What is ERC20

ERC20 is a standard interface for tokens.
If you create a token and want it to work with wallets, exchanges, etc, you must follow this standard.

Function | Purpose
<HR/>
totalSupply() | Total number of tokens
balanceOf(address) | Get token balance of an address
transfer(address to, uint amount) | Send tokens
approve(address spender, uint amount) | Allow someone to spend tokens on your behalf
transferFrom(address from, address to, uint amount) | Spend from another account
allowance(address owner, address spender) | How much spender can spend

And these events:
- Transfer
- Approval


### What is token in ERC20 ? 
- Toekn is a digital assets that is created on top of blockchain like etherum
- It can represent
  - Money
  - Shares
  - Points
  - Tickets
  - or Anything digital

so ERC20 Token just means a Fungible (interchangable) token that follows the ERC20 standard rules.



