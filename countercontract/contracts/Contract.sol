// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract MyContract {
    uint256 public count = 0;

    function increment() public{
        count+=1;
    }
    function decrement() public  {
        require(count >0,"Count cannot be less than 0");
        count -= 1;
    }
    function getCount() public view returns(uint256){
        return count;
    }
}


//4NktijD77AjKHDGyzObe3254fOIhzi0hiYGc--Zpm_Dv9nd8KLiJSGMoBUJcX3epqQmyXUo_GIvPp0UsmFmVyg :- secret key for this project
