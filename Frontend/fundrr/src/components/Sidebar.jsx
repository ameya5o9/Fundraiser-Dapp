import React from 'react'
import { Link, useNavigate } from "react-router-dom";
import styled from 'styled-components'
import {logo, sun} from '../assets';
import { navlinks } from '../constants';
import  {  useState } from "react";

const Icon = ({  name, imgURL, isActive, disabled, handleClick }) => (
  <div onClick={handleClick} className='iconDiv'>
    {!isActive ? (
      <img src={imgURL} alt="fund_logo" className="active" />
    ) : (
      <img src={imgURL} alt="fund_logo" className='inactive' />
    )}    
  </div>
)


const Sidebar = () => {
  const navigate = useNavigate();
  const [isActive, setIsActive] = useState('dashboard');
  return (
    <Wrapper>

        

        <div className='box1'>
            <div className="box2">

              {navlinks.map((link) =>(
                <Icon
                key={link.name}
                {...link}
                isActive={isActive}
                handleClick={() => {
                  if(!link.disabled) {
                    setIsActive(link.name);
                    navigate(link.link)
                  }
                }}/>
              ))}

            </div>
           

        </div>

    </Wrapper>
  )
}

export default Sidebar
const Wrapper =styled.div`
  /* background-color: black; */
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  position : absolute;
  margin: 0px;
  padding: 0px;
  width: 60px;
  height: 109vh;
  justify-content: center;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;

  .iconDiv{
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 15px 6px;
    border-style: none;
    border-radius: 10px;
    cursor: pointer;
  }

  .iconDiv:hover{
    background-color: #d2d2d2;
    animation-duration: 2000ms;
  }
  .iconDiv:target{
    background-color: purple;outline:0;
  }

  .box1{
    display: flex;
    background-color: #ffffff;
    border-style: none;
    border-radius: 10px;


  }
`

