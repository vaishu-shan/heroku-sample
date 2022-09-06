import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import { MoralisProvider } from "react-moralis";
import { Web3ReactProvider } from "@web3-react/core";
import Web3 from 'web3'
// import { Web3Provider } from "@ethersproject/providers";
import 'antd/dist/antd.css';
import "./assests/css/global.css";

function getLibrary(provider) {
  return new Web3(provider);
}
const moralisAppId = "GsT2avuHqrdmXaDNXbQFfqvPilZPlVTDMwnHfbeb";
const moralisServerURL = "https://ibwchg8ndnq1.usemoralis.com:2053/server";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <MoralisProvider appId={moralisAppId} serverUrl={moralisServerURL}>
      <Web3ReactProvider getLibrary={getLibrary}>
      <BrowserRouter>  
                <App />
           </BrowserRouter>
      </Web3ReactProvider>
    </MoralisProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
