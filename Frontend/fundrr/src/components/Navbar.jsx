import React, {useState} from 'react'
import { Link, useNavigate } from "react-router-dom";
import styled from 'styled-components'
import { logo, search, user, loader } from '../assets';
import { navlinks } from '../constants';
import CustomButton from './CustomButton'
import { useStateContext } from '../context';
import Search from './Search'


const Navbar = (isLoading, campaigns, campaign, title ) => {
  const navigate = useNavigate();
  const [isActive, setIsActive] = useState('dashboard');
  const [toggleDrawer, setToggleDrawer] = useState(false);
  const { connect, address } = useStateContext();
  const [input, setInput] = useState("")
  const [hover, setHover] = useState(false)
  const addresss = `${address}`

  const handleChange= (e)=>{
    setInput(e.target.value)
    console.log(input)
  }

  return (
    <Wrapper>

      <div className="box">
        <div className="main">
          <input type="text" onChange={handleChange} /> <img src={search} className='search' alt="" />
         
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

       <Link to ='/profile'>
        <div className='user' onMouseEnter={()=>{setHover(true)}} onMouseLeave={()=>{setHover(false)}}>
          <img src={address ? `${user}` : `${loader}`} alt="" className='userImg' />
          <div className="user2">{addresss.length > 5 ? `${addresss.slice(0, 6)}...${addresss.slice(-5)}` : 'addresss'} </div>
          
          
          
        </div>


       </Link>

       {/* {address ? (hover && <div className="walletDetail">
                 <h5>View Balance</h5> 
          </div>) : ("")} */}
       
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
padding-top: 10px;

.walletDetail{
  position: absolute;
  border-style: none;
  border-radius: 10px;
  right: 200px;
  top: 60px;
  opacity: 1;
  visibility: visible;
  height: 80px;
  width: 100px;
  background: #ffffff;
  transition: visibility 0s, opacity 0.2s linear;
  display: flex  ;
  justify-content: center;
}

.walletDetail:hover{
opacity: 1;
visibility: visible;

}

.box{
 display: flex;
 justify-content: center;
}
.main{
  width: 200px;
  height: 20px;
  border-radius: 50px;
  padding: 10px;
  background: #ffffff;
  display: flex;
  align-items: center;
  /* box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px; */
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
  background-color: #ffffff;
  border-style:none;
  border-radius: 5px;
  outline: none;
  

 
}
.search{
  height: 20px;
  width: 20px;
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
  /* box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px; */
}

.user:hover{
}

.userImg{
  height: 30px;
  
  display: flex;
  
}

.user2{
  padding-left: 8px;
  text-decoration: none;
}

a{
  text-decoration: none;
  color: black;
}

`
