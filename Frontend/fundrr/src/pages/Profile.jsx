import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import { copy } from '../assets';
import { useStateContext } from '../context';

 


const Profile = () => {
  const { connect, address } = useStateContext();
  const [show, setShow] = useState(false)



  useEffect(()=>{
    const timer = setTimeout(()=>setShow(false), 2000)
    return()=>clearTimeout(timer)
  },[show])

  const text = `${address}`
  const handleCopy = () =>{
    navigator.clipboard.writeText(text)
    .then(()=>  setShow(true))
    .catch((error)=> console.log(error))
  }
  



  return (
    <Wrapper>
 
      <Box>
        <div className="user">
          <div className="account">Account</div>
          <div className="address" onClick={handleCopy}>  
                    
          {text.length > 5 ? `${text.slice(0, 6)}...${text.slice(-2)}` : text}
          <img src={copy} alt="" id='copy'/> 
          {show && (<div className='copy'>Copied</div>)}

          </div>

        </div>

        <div className="balance">
          Wallet Balance-
        </div>
        

      </Box>
    </Wrapper>
  )   
}

export default Profile

const Wrapper = styled.div`
display: flex;
align-items: center;
justify-content: center;

`

const Box = styled.div`
display:flex;
flex-direction: column;
align-items: center;
background-color: #d6d6d6;
height: 500px;
margin: 50px 200px 0px 200px;
width: 1000px;

.user{
  display: flex;
  flex-direction: column;
  height: 120px;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  font-weight: bold;
  letter-spacing: 0.2px;
  align-content: center;
  margin-bottom: 2px;
  width: 100%;
}

.account{
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-weight: 500;
  
}

.address{
  font-size: 10px;
  font-weight: lighter;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  overflow: hidden; 
  cursor: pointer;
}
.balance{
  height: 200px;
  background-color: #ffffff;
  width: 100%;
  display: flex;
  justify-content: center;
  
}

#copy{
  width: 10px;
  height: 10px;
}
`