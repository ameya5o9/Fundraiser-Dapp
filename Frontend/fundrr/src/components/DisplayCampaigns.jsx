import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { loader } from "../assets";
import FundCard from './FundCard';
const DisplayCampaigns = ({title, isLoading, campaigns}) => {
    const navigate = useNavigate();

    const handleNavigate =(campaign)=>{
        navigate(`/campaign-details/${campaign.title}`, { state: campaign })

    }

  return (
    <Wrapper>
    <h1 className="">{title} ({campaigns.length})</h1>

    <div className="box1">
      {isLoading && (
        <img src={loader} alt="loader" className="" />
      )}

      {!isLoading && campaigns.length === 0 && (
        <p className="description">
          no campaign bfvfhjrbsv
        </p>
      )}

      {!isLoading && campaigns.length > 0 && campaigns.map((campaign) => 
      <FundCard 
        key={campaign.id}
        {...campaign}
        handleClick={() => handleNavigate(campaign)}
      />)}
    </div>
  </Wrapper>
  )
}

export default DisplayCampaigns

const Wrapper = styled.div`
color: #1c1c1cce;
font-family: Arial, Helvetica, sans-serif;
font-size: 12px;
margin-left : 60px;
padding: 20px 30px;

h1{
  margin-left: 20px;
  letter-spacing: 0.2px;

}
.box1{
  display: flex;

}
`