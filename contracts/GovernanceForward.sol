pragma solidity ^0.6.0;

import "./EnumerableMap.sol";

contract GovernaceForward {
    using EnumerableMap for EnumerableMap.AddressToAddressMap;

    EnumerableMap.AddressToAddressMap private _map;

    event ForwardTo(address indexed from, address indexed to );
    
    function forwardTo(address to) public {
        _map.set(msg.sender, to);
        emit ForwardTo(msg.sender, to);
    }
    
    function cancel() public {
        _map.remove(msg.sender);
    }
    
    function getVoterByAddress(address _addr) external view returns(address result) {
        result = _map.get(_addr);
    }
    
    function getVotesByRange(uint start, uint count) external view returns( address[] memory fromAddrs, address [] memory toAddrs) {
        if( start + count > _map.length()){
            return (fromAddrs, toAddrs);
        }
        fromAddrs = new address[](count);
        toAddrs = new address[](count);
        for (uint i = start; i < start + count; i++){
            (address from, address to) = _map.at(i);
            fromAddrs[i-start] = from;
            toAddrs[i-start] = to;
        }
    }
}