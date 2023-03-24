import { ConnectWallet } from "@thirdweb-dev/react";
import "./index.css";
import React, { useState, useEffect } from "react";
import {Routes, Route} from 'react-router-dom'
import { Sidebar, Navbar, Screen } from './components';
import CampaignDetail from "./pages/CampaignDetail";
import CreateCampaign  from "./pages/CreateCampaign";
import Home from "./pages/Home";
import Profile from "./pages/Profile";


export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // simulate some loading time
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  return (
    <div>
      {isLoading? <Screen/> : ""}

      
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/create-campaign" element={<CreateCampaign />} />
          <Route path="/campaign-details/:id" element={<CampaignDetail />} />
        </Routes>
    </div>
  );
}
