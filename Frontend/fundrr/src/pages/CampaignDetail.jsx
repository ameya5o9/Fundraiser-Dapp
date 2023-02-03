import React, { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { ethers } from 'ethers';
import styled from 'styled-components';
import { useStateContext } from '../context';
import { CountBox, CustomButton, Loader } from '../components';
import { calculateBarPercentage, daysLeft } from '../utils';
import { user } from '../assets';

const CampaignDetails = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const { donate, getDonations, contract, address } = useStateContext();

  const [isLoading, setIsLoading] = useState(false);
  const [amount, setAmount] = useState('');
  const [donators, setDonators] = useState([]);

  const remainingDays = daysLeft(state.deadline);

  const fetchDonators = async () => {
    const data = await getDonations(state.pId);

    setDonators(data);
  }

  useEffect(() => {
    if(contract) fetchDonators();
  }, [contract, address])

  const handleDonate = async () => {
    setIsLoading(true);

    await donate(state.pId, amount); 

    navigate('/')
    setIsLoading(false);
  }

  return (
    <Wrapper>
      {isLoading && <Loader />}

      <div className="container">
        <div className="">
          <img src={state.image} alt="campaign" className="coverImg"/>
          <div className="">
            <div className="" style={{ width: `${calculateBarPercentage(state.target, state.amountCollected)}%`, maxWidth: '100%'}}>
            </div>
          </div>
        </div>

        <div className="box1">
          <CountBox title="Days Left" value={remainingDays} />
          <CountBox title={`Raised of ${state.target}`} value={state.amountCollected} />
          <CountBox title="Total Backers" value={donators.length} />
          <div className="subbox1">
          <h4 className="">DONATE</h4>   

              <input 
                type="number"
                placeholder="ETH 0.1"
                step="0.01"
                className="input"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />

              

              <CustomButton 
                btnType="button"
                title="Fund Campaign"
                styles="w-full bg-[#8c6dfd]"
                handleClick={handleDonate}
              />
            </div>
        </div>
      

      <div className="">
        <div className="">
          <div>
            <h4 className="">CREATOR</h4>

            <div className="creatorbox">
             
                <img src={user} alt="user" className="user"/>
             
              
                <h4 className="">{state.owner}</h4>
              
            </div>
          </div>

          <div>
            <h4 className="">STORY</h4>

              <div className="">
                <p className="">{state.description}</p>
              </div>
          </div>

          <div>
            <h4 className="">DONATORS</h4>

              <div className="donars">
                {donators.length > 0 ? donators.map((item, index) => (
                  <div key={`${item.donator}-${index}`} className="">
                    <p className="">{index + 1}. {item.donator}</p>
                    <p className="">{item.donation} ETH</p>
                  </div>
                )) : (
                  <p className="">No donators yet. Be the first one!</p>
                )}
              </div>
          </div>
        </div>

                </div>
      </div>
    </Wrapper>
  )
}

export default CampaignDetails

const Wrapper = styled.div`
font-family: Arial, Helvetica, sans-serif;
border-style: none;
border-radius: 5px; 
box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
 
.container{
  display: flex;
  justify-content: space-evenly;
}

.coverImg{
  width: 400px;
  height: 400px;
  border-style: none;
  border-radius: 5px;
}

.box1{
  border-style: none;
  border-radius: 5px;

}

.creatorbox{
  display: flex;
  align-items: center;

}
.user{
  width: 20px;
  height: 20px;

}
.input{
  outline: none;
    background-color: #ffffffc2;
    border-style: none;
    border-radius: 5px;
    width: 65%;
    margin-top: 8px;
    padding: 7px;
}

.donars{
  font-size: 12px  ;
}

.subbox1{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
`