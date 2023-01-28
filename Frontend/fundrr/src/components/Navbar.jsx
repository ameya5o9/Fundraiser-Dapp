import React, {useState} from 'react'
import { Link, useNavigate } from "react-router-dom";
import styled from 'styled-components'
import { logo, search, thirdweb } from '../assets';
import { navlinks } from '../constants';
import CustomButton from './CustomButton'
import { useStateContext } from '../context';


const Navbar = () => {
  const navigate = useNavigate();
  const [isActive, setIsActive] = useState('dashboard');
  const [toggleDrawer, setToggleDrawer] = useState(false);
  const { connect, address } = useStateContext();

  return (
    <Wrapper>
      <div className="box1">
        <input type="text" />

        <div className='imgDiv'>
          <img src={search} alt="" id='searchIcon'/>
        </div>

      </div>

      <div className="box2">
      <CustomButton 
              btnType="button"
              title={address ? 'Create a campaign' : 'Connect'}
             
              handleClick={() => {
                if(address) navigate('create-campaign')
                else connect();
              }} />

       
      

       <Link to ='/profile'>
        <div className='user'>
          <img src={thirdweb} alt="" className='userImg'/>
        </div>
       </Link>
      </div>
    </Wrapper>

  )
}

export default Navbar


const Wrapper = styled.div`
background-color: #000000;
display: grid;
grid-template-columns: 2fr 2fr;
width: 100%;
height: 58px;
justify-content: center;
align-items: center;
font-family: Arial, Helvetica, sans-serif;
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
  height: 30px;
  width: 30px;
  padding: 2px;
  border-radius: 10px;
  border-style:none;
  background-color: #241a32;
}

.userImg{
  height: 30px;
  align-items: center;
  
  display: flex;
  

}

`