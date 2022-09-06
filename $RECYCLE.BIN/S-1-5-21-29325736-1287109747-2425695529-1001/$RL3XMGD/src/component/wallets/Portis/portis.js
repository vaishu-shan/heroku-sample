import React from 'react';
import "../style.css"
import PortisImg from "../../../assests/imgs/portis.png";
import Portis from '@portis/web3';
import Web3 from 'web3';


function PortisWallet(props) {


    const pthandler = () => {
        const portis = new Portis('9b0a2448-de26-42e9-8d47-d8ce12d87109', 'mainnet');
    const web3 = new Web3(portis.provider); 
    web3.eth
    .getAccounts()
    .then(accounts => console.log(accounts))
    .catch(error => console.log(error));
    }

    

    return (
        <>
         <div className=" wrapper-box ">
                    <div className=" provider-cont " onClick={()=> pthandler()}>
                      <div className=" w-icon ">
                        <img src={PortisImg} alt="Portis" width={50} height={50}/>
                      </div>
                      <div className=" p-name ">
                        Portis
                      </div>
                    </div>
                  </div>   
        </>
    );
}

export default PortisWallet;