import React, { useState , useEffect} from "react";
import { Input, Modal } from "antd";
import "antd/dist/antd.css";
import "./scbtn.css";
import FadeIn from "react-fade-in";
import {
  TransferOwnership,
  StakefeePercentage,
  FeeCollector,
  EarlyWithdraw,
  WithdrawCollectedFees,
  WithdrawLiquidity,
  InjectLiquidity,
} from "./ScBtnintegration";
import { useMoralis } from "react-moralis";


const SCbtn =() => {
  const {transferOwnerHash} = TransferOwnership();
  console.log(transferOwnerHash, "transferOwnerHash");
  const [isOwnership, setIsOwnership] = useState(false);
  const [isFeeamount, setIsFeeamount] = useState(false);
  const [isWithdrawLiquidity, setIsWithdrawLiquidity] = useState(false);
  const [isCollectorAddress, setIsColletoraddress] = useState(false);
  const [isEarlyWithdraw, setIsEarlyWithdraw] = useState(false);
  const [isInjectLiquidity, setIsInjectLiquidity] = useState(false);
  const [isWithdrawAllowed, setIsWithdrawAllowed] = useState(false);
  // ----------------------
  const [newOwner, setNewOwner] = useState();
  const [_stakeFeePercent, setStakeFeePercent] = useState();
  const [WithdrawFees, setWithdrawFees] = useState();
  const [FeeCollectorSet, setFeeCollector] = useState();
  const [IsEarlyWithdrawAllowedSet, setIsEarlyWithdrawAllowedSet] = useState();
  const [_amount, setAmount] = useState();
  // ----------------------
  const [isOwner, SetIsOwner] = useState();

  const { account } = useMoralis();

  const AdminOrClient = (event) => {
    SetIsOwner(event.target.value);
    console.log(isOwner);
  };
const TransferOwnerPostEvent = async() => {
    const data = {
      functionName: "transferOwnership",
      transactionHash:
        "0xdf352faa19ebdea3cf2da17fe1131d3f33f4747e5ec208999c11f601d4503ba7",
      chainId: "97",
    };
    const url =
      "https://staking-app-backend-deploy.herokuapp.com/events/transfer-ownership";
    
     try{
        const response = await fetch(url, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
          });
          console.log("response.status:", response.status);
          console.log(response);
          if (response.state == 200) {
            alert("success");
          }
     } catch (err){
        console.log(err);
     }

  };


  //ownership
  const ownerUpdate = (event) => {
    event.preventDefault();
    setNewOwner(event.target.value);
  };
  const showModal1 = () => {
    setIsOwnership(true);
  };
  const handleOk1 = () => {
    setIsOwnership(false);
    TransferOwnership(newOwner, account);
  };

  //Stake Fee Percent
  const updateStakefee = (event) => {
    event.preventDefault();
    setStakeFeePercent(event.target.value);
  };
  const showModal2 = () => {
    setIsFeeamount(true);
  };
  const handleOk2 = () => {
    setIsFeeamount(false);
    StakefeePercentage(_stakeFeePercent, account);
  };

  //Fee collector Address
  const updateFeeCollector = (event) => {
    event.preventDefault();
    setFeeCollector(event.target.value);
  };
  const showModal6 = () => {
    setIsColletoraddress(true);
  };
  const handleOk6 = () => {
    setIsColletoraddress(false);
    FeeCollector(FeeCollectorSet, account);
  };

  //early widthdraw
  const earlywithdrawUpdate = (event) => {
    event.preventDefault();
    setIsEarlyWithdrawAllowedSet(event.target.value);
  };
  const showModal7 = () => {
    setIsEarlyWithdraw(true);
  };
  const handleOk7 = () => {
    setIsEarlyWithdraw(false);
    EarlyWithdraw(IsEarlyWithdrawAllowedSet, account);
  };

  // widthdraw Liquidity
   const withdrawLiquidityUpdate = (event) => {
    event.preventDefault();
    setAmount(event.target.value);
  };
  const showModal8 = () => {
    setIsWithdrawLiquidity(true);
  };
  const handleOk8 = () => {
    setIsWithdrawLiquidity(false);
    WithdrawLiquidity(_amount,account)
  };

  // Early withdraw Allowed
   const withdrawAllowedUpdate = (event) => {
    event.preventDefault();
    setWithdrawFees(event.target.value);
  };
  const showModal9 = () => {
    setIsWithdrawAllowed(true);
  };
  const handleOk9 = () => {
    setIsWithdrawAllowed(false);
    WithdrawCollectedFees(WithdrawFees,account)
  };

  //Liquidity Injected
  const LiquidityUpdate = (event) => {
    event.preventDefault();
    setAmount(event.target.value);
  };
  const showModal10 = () => {
    setIsInjectLiquidity(true);
  };
  const handleOk10 = () => {
    setIsInjectLiquidity(false);
    InjectLiquidity(_amount, account);
  };

  

  return (
    <>
      <div className="">
        <FadeIn>
          <div
            className="container-box mb-50"
            style={{ border: "2px solid lightgrey" }}
          >
            <div className="large-text mb-3"> Update Fee Attributes</div>
            <button className="green-btn" onClick={showModal2}>
              {" "}
              Stake Fee Percent{" "}
            </button>
            <Modal
              title="Stake Fee Percent"
              visible={isFeeamount}
              onOk={handleOk2}
              okText="Submit &amp; Approve"
            >
              <p className="center-align mb-3">Current Value : $$$$$</p>
              <Input
                placeholder="Enter the Stake fee percentage"
                onChange={updateStakefee}
              />
            </Modal>

            <button className="green-btn" onClick={showModal6}>
              {" "}
              Fee Collector Address
            </button>
            <Modal
              title="Address of Fee collector"
              visible={isCollectorAddress}
              onOk={handleOk6}
              okText="Submit &amp; Approve"
            >
              <p className="center-align mb-3">Current Value : $$$$$</p>
              <Input
                placeholder="Enter the address of fee collector"
                onChange={updateFeeCollector}
              />
            </Modal>
          </div>
        </FadeIn>
        <FadeIn>
          <div
            className=" container-box mb-50"
            style={{ border: "2px solid lightgrey" }}
          >
            <div className="large-text mb-3"> Transact Token</div>
            <div className="">
            <button className="green-btn" onClick={showModal7}>
              {" "}
               Withdraw Fees{" "}
            </button>
            <Modal
              title="early widthdraw"
              visible={isEarlyWithdraw}
              onOk={handleOk7}
              okText="Submit &amp; Approve"
            >
              <p className="center-align mb-3">Current Value : $$$$$</p>
              <Input
                placeholder="Enter the early widthdraw"
                onChange={earlywithdrawUpdate}
              />
            </Modal>
           
            <button className="green-btn" onClick={showModal10}>
              {" "}
              Inject Liquidity{" "}
            </button>
            <Modal
              title=" Inject Liquidity"
              visible={isInjectLiquidity}
              onOk={handleOk10}
              okText="Submit &amp; Approve"
            >
              <p className="center-align mb-3">Current Value :</p>
              <Input
                placeholder="enter the amount of liquidity"
                onChange={LiquidityUpdate}
              />
            </Modal>

            <button className="green-btn" onClick={showModal8}>
              {" "}
              Withdraw Liquidity{" "}
            </button>
            <Modal
              title="Withdraw Liquidity"
              visible={isWithdrawLiquidity}
              onOk={handleOk8}
              okText="Submit &amp; Approve"
            >
              <p className="center-align mb-3">Current Value :</p>
              <Input
                placeholder="enter the amount of liquidity"
                onChange={withdrawLiquidityUpdate}
              />
            </Modal>
            </div>
          </div>
        </FadeIn>
        <FadeIn>
          <div
            className=" container-box mb-50"
            style={{ border: "2px solid lightgrey" }}
          >
            <div className="large-text mb-3"> Danger Zone</div>

            <button className="red-btn" onClick={()=>{showModal1(); TransferOwnerPostEvent() }}>
              {/* ;TransferOwnerPostEvent() */}
              {" "}
              Transfer Ownership{" "}
            </button>

            <Modal
              title="Transfer Ownership"
              visible={isOwnership}
              onOk={handleOk1}
              okText="Submit &amp; Approve"
            >
              <p style={{ marginBottom: "0.5rem" }}>Who is the owner ?</p>
              <select className="ac-dropdown" onChange={AdminOrClient}>
                <option disabled selected="true">
                  -- Select Owner --
                </option>
                <option value="admin">Admin</option>
                <option value="client">Client</option>
              </select>
              <p style={{ marginBottom: "0.5rem" }}>Enter new owner address</p>
              <Input placeholder="enter the address" onChange={ownerUpdate} />
            </Modal>

            <button className="red-btn" onClick={()=>{showModal9()}}>
              {" "}
              Early Withdraw Allowed{" "}
            </button>

            <Modal
              title=" Early Withdraw Allowed"
              visible={isWithdrawAllowed}
              onOk={handleOk9}
              okText="Submit &amp; Approve"
            >
              <Input placeholder="enter the address" onChange={withdrawAllowedUpdate} />
            </Modal>

          </div>
        </FadeIn>
      </div>
    </>
  );
}

export default SCbtn;
