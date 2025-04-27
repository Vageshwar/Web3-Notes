// SPDX-License-Identifier: MIT
pragma solidity ^0.8.28;

contract MyToken {
    string public name = "Vageshwar Dev";
    string public symbol = "VDEV";
    uint public decimals = 18;
    uint public totalSuppy = 1000000 * 10 ** uint(decimals);

    mapping(address => uint) public balaceOf;

    mapping(address => mapping(address => uint256)) public _allowance;

    constructor(){
        balaceOf[msg.sender] = totalSuppy;
    }

    event Transfer(address indexed from, address indexed to, uint256 value);
    event Approval(address indexed owner, address indexed spender, uint256 value);

    function transfer(address _to, uint _amount) external returns (bool){
        require(balaceOf[msg.sender] >= _amount, "Not enought tokens");
        balaceOf[msg.sender] -= _amount;
        balaceOf[_to] += _amount;

        emit Transfer(msg.sender, _to, _amount);
        return true;
    }

    function approve(address spender, uint256 amount) external returns(bool){
        _allowance[msg.sender][spender] = amount;
        emit Approval(msg.sender, spender, amount);
        return true;
    }

    function allowance(address owner, address spender) public view returns (uint256){
        return _allowance[owner][spender];
    }

    function transferFrom(address sender, address recipient, uint256 amount) external returns(bool) {
        require(_allowance[sender][msg.sender] >= amount, "Not enough allowance");
        require(balaceOf[sender] >= amount, "Not enough balance");
        
        balaceOf[sender] -= amount;
        balaceOf[recipient] += amount;
        _allowance[sender][msg.sender] -= amount;
        
        emit Transfer(sender, recipient, amount);
        return true;
    }

}