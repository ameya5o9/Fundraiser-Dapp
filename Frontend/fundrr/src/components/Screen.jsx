import React from 'react'
import styled from 'styled-components'
import { logo } from '../assets'

const Screen = () => {
  return (
    <Wrapper>
      <div>
        <img src={logo} alt="" />
        <h1>FUNDRAISER    DAPP .</h1>
      </div>
    </Wrapper>
  )
}

export default Screen


const Wrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: #aae0aa;
  background: rgb(69,131,81);
  background: radial-gradient(circle, rgba(69,131,81,1) 0%, rgba(146,200,133,1) 100%);
  transition: all .3s ease-in-out; 
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  color: white;
  letter-spacing: 0.4px;
   animation: fadeIn 3s forwards;
  div{
    animation: fadeInOut 3s ease-in-out ;
    display: flex;
  }

  img{
    margin-right: 5px;
    
  }

  h1{
  }
  
  @keyframes fadeIn {
  0% {
    transform: translateY(-100%);
    opacity: 0;

  }

  20%{
    opacity: 0.2;
    transform: translateY(0%);

  }

 

  80%{
    transform: translateY(0%);
    opacity: 1;
  }
  
  100% {
    transform: translateY(-100%);
    opacity: 1;


  }
  
  }


  @keyframes fadeInOut {
  0% {
    opacity: 0;
  }
  70% {
    opacity: 1;
  }
  100% {
    opacity: 1;
  }
}
`


