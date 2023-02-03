import React, {useState} from 'react'
import { Link, useNavigate } from "react-router-dom";
import styled from 'styled-components'
import { logo, search, user, loader } from '../assets';
import { navlinks } from '../constants';
import CustomButton from './CustomButton'
import { useStateContext } from '../context';
import Address from './Address'

const Navbar = (isLoading) => {
  const navigate = useNavigate();
  const [isActive, setIsActive] = useState('dashboard');
  const [toggleDrawer, setToggleDrawer] = useState(false);
  const { connect, address } = useStateContext();

  return (
    <Wrapper>

      <div className="box">
        <div className="main">
                <img src={logo} alt="" id='logomain'/>
  
        </div>
      </div>
      
      

      <div className="box1">
      <CustomButton 
              btnType="button"
              title={address ? 'Create Campaign' : 'Connect Wallet'}
             
              handleClick={() => {
                if(address) navigate('create-campaign')
                else connect();
              }} 
              />

       
      </div>
       <div className="box2">

       {/* <Link to ='/profile'> */}
        <div className='user'>
       <img src={address ? `${user}` : `${loader}`} alt="" className='userImg' />
          <div className="user2">{address}</div>
        </div>
       
       {/* </Link> */} 
       <div className="walletDetail">
        jhbh
       </div>
       </div>

       
      
    </Wrapper>

  )
}

export default Navbar


const Wrapper = styled.div`
background: transparent;
display: grid;
grid-template-columns: 2fr 2fr 2fr ;
width: 100%;
height: 54px;
justify-content: center;
align-items: center;
font-family: Arial, Helvetica, sans-serif;
text-decoration: none;

.walletDetail{
  position: absolute;
  border-style: solid;
  right: 50px;
  opacity: 0;
}

.walletDetail:hover{
opacity: 1;
}

.box{
 display: flex;
 justify-content: center;
}
.main{
  width: 20px;
  height: 20px;
  border-radius: 5px;
  padding: 10px;
  background: #ffffff;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
}
#logomain{
  width: 20px;
  height: 20px;
}
.box1{
  display: flex;
  justify-content: center;
}

input{
  background-color: #2c2c2c;
  border-style:none;
  border-radius: 5px;
  outline: none;

 
}

.imgDiv{
  background-color: #4c863b;
  border-style:none;
  border-radius: 5px;
  display: flex;
  align-items: center;

}

#searchIcon{
  height: 15px;
  padding: 5px 10px 5px 10px;
}
.box2{
  display: flex;
  justify-content: center;
}

.user{
  display: flex;
  align-items:center ;
  cursor: pointer;
  font-size: 15px;
  text-decoration: none;
  height: 30px;
  width: 150px;
  padding: 5px;
  border-radius: 10px;
  border-style:none;
  background-color: #ffffff;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
}

.userImg{
  height: 30px;
  
  display: flex;
  
}

.user2{
}

`
