import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";
import "./styles/globals.css";
import { BrowserRouter } from "react-router-dom";
import { StateContextProvider } from "./context";

// This is the chainId your dApp will work on.

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <BrowserRouter>
    <ThirdwebProvider desiredChainId={ChainId.Goerli}>
      <StateContextProvider>
         <App />
     
      </StateContextProvider>
    </ThirdwebProvider>

    </BrowserRouter>,

);
