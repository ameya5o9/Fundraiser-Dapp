import React, {useState} from 'react'
import { Link, useNavigate } from "react-router-dom";
import styled from 'styled-components'
import { navlinks } from '../constants';

const CustomButton = ({handleClick, title, btnType}) => {
  return (
    <Wrapper>
      <button onClick={handleClick} type={btnType}>
      {title}  
      
    </button>
    </Wrapper>
    
  )
}

export default CustomButton

const Wrapper = styled.div`
display: flex;

  button{
    background-color: #007000a8;
    border-style: none;
    border-radius: 5px;
    color: white;
    cursor: pointer;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-weight: 500;
    letter-spacing: 0.2px;
    padding: 10px 15px;
    /* box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px; */
  }
`