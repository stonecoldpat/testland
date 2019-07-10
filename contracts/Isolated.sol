pragma solidity ^0.5.8;
pragma experimental ABIEncoderV2;


contract Isolated {

  address public admin;

  function updateAdmin(address _admin) public {
    admin = _admin;
  }

  function fetchAdmin() public returns (address) {
    return admin;
  }
}
