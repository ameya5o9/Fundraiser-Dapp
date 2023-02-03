import React from 'react'
import styled from 'styled-components'
import { loader } from '../assets'
const Address = () => {
  return (
    <Wrapper>

      <img src={loader} alt="" />
    </Wrapper>
  )
}

export default Address

const Wrapper = styled.div` 
        display: flex;
        align-items: center;
        justify-content: center;
    img{
        width: 50px;
       
    }
`