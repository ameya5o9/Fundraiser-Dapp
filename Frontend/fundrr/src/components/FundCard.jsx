import React from 'react'
import { tagType, user } from '../assets';
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
  
          
  
          <div className="box2">
            <div className="box1">
              <h4 className="">{amountCollected}Target : {target} ETH</h4>
            </div>
            <div className="box1">
              <h4 className="">Days Left : {remainingDays} </h4>
            </div>
          </div>
  
          <div className="box3">
              <img src={user} alt="user" className="logo"/> 
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
background-color: #ffffffed;
width: 250px;
height: 400px;
color: #000000;
margin: 20px;
display: flex;
flex-direction: column;
box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;.box{
padding-left: 10px;
font-family: Arial, Helvetica, sans-serif;
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
    align-items: center;
    padding-left: 5px;
    
  }

  .logo{
    width: 15px;
    height: 15px;
    border-style: none;
    border-radius: 50px;
  }
  
  .box2{
    border-style: solid;
    width: 95%;
    border-width: 0.1vh;
    border-radius: 5px;
    border-color: #dddddd;
    color: #3e3e3e;
  }

  .box3{
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 95%;
    white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  }
  .owner{
    font-size: 10px;
    margin-left: 5px;
  }
  `