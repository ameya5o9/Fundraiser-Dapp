import React from 'react'
import { Link, useNavigate } from "react-router-dom";
import styled from 'styled-components'
import {logo, sun} from '../assets';
import { navlinks } from '../constants';
import  {  useState, useEffect } from "react";
import Darkmode from './Darkmode';


const Icon = ({  name, imgURL, isActive, disabled, handleClick }) => (
  <div onClick={handleClick} className='iconDiv' >
    {!isActive ? (
      <img src={imgURL} alt="fund_logo" className="active" />
    ) : (
      <img src={imgURL} alt="fund_logo" className={`${isActive !== name && 'grayscale'}`} />
    )}    
  </div>
)
   

const Sidebar = () => {
  const navigate = useNavigate();
  const [isActive, setIsActive] = useState('dashboard');
  // const [glow, setGlow] =useState("white")

// useEffect(()=>{
//   const element = document.querySelector(".iconDiv")
//   element.style.background = glow
// }, [glow]);

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
                  // setGlow(glow === "white" ? "black" : "white")
                }}/>
              ))}

              {/* <Darkmode/> */}

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
  height: 100vh;
  position: fixed;
  overflow: auto;
  justify-content: center;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;  
  .active{
    background-color: black;
  }
  .iconDiv{
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 15px 6px;
    border-style: none;
    border-radius: 10px;
    cursor: pointer;
    background-color: #ffffff;
  }

  .iconDiv:hover{
    background-color: #f3f3f3;
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

