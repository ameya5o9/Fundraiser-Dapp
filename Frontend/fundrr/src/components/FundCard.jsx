import React from 'react'
import { tagType, thirdweb } from '../assets';
import styled from 'styled-components';
import { daysLeft } from '../utils';
const FundCard = ({ owner, title, description, target, deadline, amountCollected, image, handleClick }) => {
    const remainingDays = daysLeft(deadline);
    
    return (
      <Wrapper>
      <div className="container" onClick={handleClick}>
        <img src={image} alt="fund" className="poster"/>
  
        <div className="box">
          <div className="box1">
            <img src={tagType} alt="tag" className=""/>
            <h3 className="">{title}</h3>

          </div>
  
          
  
          <div className="">
            <div className="">
              <h4 className="">{amountCollected} Target of {target}</h4>
            </div>
            <div className="box1">
              <h4 className="">{remainingDays} Days Left</h4>
            </div>
          </div>
  
          <div className="box3">
              <img src={thirdweb} alt="user" className="logo"/> 
            <p className="owner">{owner}</p>
          </div>
        </div>
      </div>
    </Wrapper>
    )
  }
  
  export default FundCard

const Wrapper = styled.div`
border-style: none;
border-radius: 10px;
background-color: #131313;
width: 250px;
height: 400px;
color: white;
margin: 20px;
display: flex;
flex-direction: column;
box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;

.box{
  padding-left: 10px;
}
    

  
  .poster{
    height: 180px;
    width: 250px;
    display: flex;
    border-style: none;
    border-radius: 10px 10px 0px 0px;
    
  }

  .box1{
    display: flex;
  }

  .logo{
    width: 15px;
    height: 15px;
    border-style: none;
    border-radius: 50px;
  }

  .box3{
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  .owner{
    font-size: 10px;
    margin-left: 5px;
  }
  `