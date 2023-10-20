//  SPDX-License-Identifier: MIT

pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract DeflationToken is ERC20 {
    uint private lastRebaseTS;
    uint public ONE = 1e18;
    uint private factor = ONE;

    constructor() ERC20("new USD", "$") {
        _mint(msg.sender, 10000000 * ONE); // 10 million
        lastRebaseTS = block.timestamp;
    }

    // total
    function totalSupply() public view override returns (uint256) {
        return (super.totalSupply() * factor) / ONE;
    }

    // balance
    function balanceOf(address account) public view override returns (uint256) {
        return (super.balanceOf(account) * factor) / ONE;
    }

    // rebase
    function rebase() public {
        if (block.timestamp - lastRebaseTS >= 365 days) {
            factor = (factor * 99) / 100;
        }
    }

    // transfer
    function transfer(
        address to,
        uint256 amount
    ) public override returns (bool) {
        rebase();

        uint256 rebaseAmount = (amount * factor) / ONE;
        super._transfer(msg.sender, to, rebaseAmount);
        return true;
    }

    function faucet(uint256 amount) public returns (bool) {
        require(
            balanceOf(address(this)) >= amount,
            "Insufficient balance in faucet for withdraw request"
        );
        _transfer(address(this), msg.sender, amount);
        return true;
    }
}
