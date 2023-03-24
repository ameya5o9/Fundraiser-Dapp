import React from 'react'
import { DisplayCampaigns, Navbar, Sidebar } from '../components';
import { useStateContext } from '../context'
import { useEffect, useState } from "react";
const Home = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [campaigns, setCampaigns] = useState([]);
    const { address, contract, getCampaigns } = useStateContext();

    const fetchCampaigns = async () => {
        setIsLoading(true);
        const data = await getCampaigns();
        setCampaigns(data);
        setIsLoading(false);}

        useEffect(() => {
            if(contract) fetchCampaigns();
          }, [address, contract]);
  return (
    <div>
    <Sidebar/>
    <Navbar/>
    <DisplayCampaigns 
    title="All Campaigns"
    isLoading={isLoading}
    campaigns={campaigns}
  /></div>
  )
}

export default Home
