import React, {useState, useEffect} from 'react'
import { sun } from '../assets'
import styled from 'styled-components'
const Darkmode = () => {
    const [background, setBackground] = useState("white")

    const handleClick = ()=>{
        setBackground(background === "white" ? "black" : "white")
      }
      

      useEffect(()=>{
        const element = document.querySelector("  .search")
        element.style.background = background
      }, [background]);  


  return (

    <Wrapper> 
     <button id='btn' onClick={handleClick}><img src={sun} alt="" /></button>              
    </Wrapper>
  
  )
}

export default Darkmode

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    cursor: pointer;
#btn{
    border-style: none;
    cursor: pointer;
    background-color: #ffffff;
}
`
