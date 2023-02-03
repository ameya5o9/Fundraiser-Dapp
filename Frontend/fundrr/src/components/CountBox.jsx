import React from 'react'
import styled from 'styled-components'
const CountBox = ({ title, value }) => {
  return (
    <Wrapper>
    <div className="box1">
      <h4 className="">{value}</h4>
      <p className="">{title}</p>
    </div>
    </Wrapper>
  )
}

export default CountBox

const Wrapper = styled.div`
.box1{
border-style: none;
border-radius: 5px;
box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}
h4{
  display: flex;
  justify-content: center;
  align-items: center;
  color: black;
  font-weight: 400;
  background-color: white;
}

p{
  display: flex;
  justify-content: center;
  align-items: center;
  color: #181818c7;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 200;
  background-color: #eaeaea;
}
`