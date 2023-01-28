// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract MyContract {
    struct Campaign {
        address owner;
        string title;
        string description;
        uint256 target;
        uint256 deadline;
        uint256 amtCollected;
        string image;
        address[] donaters;
        uint256[] donations;
    }
    
    mapping(uint=> Campaign) public campaigns;
    uint256 public numberofCampaigns = 0;

    function createCampaign(address _owner, string memory _title, string memory _description, uint256 _target, uint256 _deadline, string memory _image) public returns (uint256){
        Campaign storage campaign = campaigns[numberofCampaigns];
        require(campaign.deadline < block.timestamp);

        campaign.owner = _owner;
        campaign.title = _title;
        campaign.description = _description;
        campaign.target = _target;
        campaign.deadline = _deadline;
        campaign.amtCollected = 0;  
        campaign.image = _image;

        numberofCampaigns++;
        return numberofCampaigns - 1;
    }

    function donateToCampaign(uint256 _id) public payable{

        uint256 amount = msg.value;
        Campaign storage campaign = campaigns[_id];

        campaign.donaters.push(msg.sender);
        campaign.donations.push(amount);

        (bool sent, ) = payable(campaign.owner).call{value: amount}("");

        if(sent){
            campaign.amtCollected = campaign.amtCollected + amount;
        }

    }

    function getDenators(uint256 _id) view public returns (address[] memory , uint256[] memory){
        return (campaigns[_id].donaters, campaigns[_id].donations);
    }

    function getCampaign() public view returns (Campaign[] memory){
        Campaign[] memory allCampaigns = new Campaign[](numberofCampaigns);

        for(uint i = 0; i < numberofCampaigns; i++){
            Campaign storage item = campaigns[i];
            allCampaigns[i] =item;
        }
        return allCampaigns;
    }



}