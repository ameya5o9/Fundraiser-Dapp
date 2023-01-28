import { ConnectWallet } from "@thirdweb-dev/react";
import "./styles/Home.css";
import {Routes, Route} from 'react-router-dom'
import { Sidebar, Navbar } from './components';
import CampaignDetail from "./pages/CampaignDetail";
import CreateCampaign  from "./pages/CreateCampaign";
import Home from "./pages/Home";
import Profile from "./pages/Profile";

export default function App() {
  return (
    <div>
      <Sidebar />
      <Navbar />
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/create-campaign" element={<CreateCampaign />} />
          <Route path="/campaign-details/:id" element={<CampaignDetail />} />
        </Routes>
    </div>
  );
}
