import React from 'react'
import { line, bg } from '../assets';
import styled from 'styled-components';
import { daysLeft } from '../utils';
const FundCard = ({ owner, title, description, target, deadline, amountCollected, image, handleClick }) => {
    const remainingDays = daysLeft(deadline);
    console.log({title})
    
    return (
      <Wrapper >
      <div className="container" onClick={handleClick}>
        <img src={image} alt="fund" className="poster"/>
  
        <div className="box">
          <div className="box1">
            {/* <img src={tagType} alt="tag" className=""/> */}
            <h3 className="title">{title}</h3>

          </div>
  
          
  
          <div className="box2">
            <div className="box11">
              <div className='grey'>{amountCollected}TARGET </div>
              <div className='black'>♦ {target}</div> 
            </div>

            <div className='box-line'><img src={line} className="line" alt="" /></div>
            <div className="box11">
            
              <div className='grey'> DAYS LEFT</div>
              
              <div className='black'>◷ {remainingDays} </div>
            </div>
          </div>

          
  
          {/* <div className="box3">
              <img src={user} alt="user" className="logo"/> 
            <p className="owner">{owner}</p>
          </div> */}
        </div>
      </div>
    </Wrapper>
    )
  }
  
  export default FundCard

const Wrapper = styled.div`
border-style: none;
border-radius: 10px;
background-color: #ffffff;
width: 250px;
height: 310px;
color: #000000;
margin: 30px;
display: flex;
flex-direction: column;
font-family: Arial, Helvetica, sans-serif;
cursor: pointer;
transition: all .3s ease-in-out; 
box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;

:hover{
  transform: scale(1.02) ;
  transition: all .2s ease-in;
  
}

.container{
}
  
  .poster{
    height: 180px;
    width: 240px;
    display: flex;
    border-style: none;
    border-radius: 10px ;
    cursor: pointer;
    padding: 5px;
  }

  .box1{
    display: flex;
    align-items: center;
    
    padding-left: 15px;
    padding-right: 15px;
    /* width: 100%; */
    
  }
  
  .box11{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

  }
  .logo{
    width: 15px;
    height: 15px;
    border-style: none;
    border-radius: 50px;
  }
  
  .box2{
    width: 96%;
    border-width: 0.1vh;
    border-radius: 5px;
    border-color: #dddddd;
    color: #3e3e3e;
    display: grid;
    grid-template-columns: 50fr 20fr 50fr;
    border-style: none;
    background-color: #ececec6b;
    margin: 5px;
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

  .grey{
    font-family: Arial, Helvetica, sans-serif;
    letter-spacing: 0.3px;
    font-weight: bold;
    color: grey;
    margin-bottom: 5px;

  }

  .black{
    letter-spacing: 0.3px;
    font-weight: bold;
    margin-top:5px;

  }
  .title{
    letter-spacing: 1px;
  }
  .line{
    
    width: 100%;
  }
  .box-line{
    display: flex;
  }
  .tag{
   display: flex;
   justify-content: center;
   align-items: center;
  }
  `