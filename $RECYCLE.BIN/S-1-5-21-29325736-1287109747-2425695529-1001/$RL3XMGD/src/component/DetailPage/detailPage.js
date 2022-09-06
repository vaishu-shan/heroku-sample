import React from 'react';
import { FloatingLabel, Form } from "react-bootstrap";
import {BiArrowBack} from "react-icons/bi"
import LeftSidebar from "../Leftpannel/leftbar";
import FadeIn from 'react-fade-in';
import Collapsible from 'react-collapsible';
import SCbtn from '../SCButton/SCbtn';
import DetailDashboard from '../Dashboard/detailDashboard';
import { IconContext } from "react-icons";
import { useNavigate } from 'react-router-dom';
import "./detail.css"
function DetailPage(props) {

  const navigate = useNavigate();
  
  const moveHome = () =>{
    navigate("/home")
  }

    return (
        <div>
             <div className="detail-page ">
        <LeftSidebar />
    
        <div className="detail-page-cont justify-center ">
        <FadeIn>
          <div className='flex align-center cursor-pointer mb-3' onClick={moveHome}>
        <IconContext.Provider value={{ size:"2em",color: "black",style:{marginRight:"10px"}, className: "global-class-name" }}>
  <div>
    <BiArrowBack />
  </div>
</IconContext.Provider>
<div className='large-text'>Back to home</div>
</div>
</FadeIn>
      <FadeIn>
        <DetailDashboard/>
      </FadeIn>
          <FadeIn>
          <div className="header container-box mb-50">
            <div className="large-text mb-3">
                {" "}
                Client's Contact Information
              </div>
            <Collapsible
                trigger="Click here to view data"
                className="mt-2 text-blue"
              >
                    <div className="flex  align-center">
                    <div className="small-text container-inner mt-5">
                   
                <Form>
                <Form.Group className="mb-4" controlId="formBasicEmail">
                          <FloatingLabel
                            controlId="floatingSelect"
                            label="Client email"
                          >
                            <Form.Select aria-label="Floating label select example">
                              <option>Client email id</option>
                              <option value="1">example1@gmail.com</option>
                              <option value="2">example2@gmail.com</option>
                              <option value="3">example3@gmail.com</option>
                              <option value="4">example4@gmail.com</option>
                            </Form.Select>
                          </FloatingLabel>
                        </Form.Group>
                </Form>
              </div>
              </div>

              <div className="flex  align-center">
                    <div className="small-text container-inner mt-5">
                    <Form>
                <Form.Group className="mb-4">
                  <Form.Label>Client Name</Form.Label>
                  <Form.Control type="text" placeholder="-" readOnly/>
                </Form.Group>

                <Form.Group className="mb-4">
                  <Form.Label>Telegram</Form.Label>
                  <Form.Control type="text" placeholder="-" readOnly/>
                </Form.Group>

                <Form.Group className="mb-4">
                  <Form.Label>Mobile Number</Form.Label>
                  <Form.Control type="number" placeholder="-" readOnly/>
                </Form.Group>
              </Form>
                      </div>
                      </div>

              </Collapsible>
            </div>
            <div className="header container-box mb-50">
              <div className="large-text mb-3">
                {" "}
                Staking Program's Generic Data
              </div>
              <Collapsible
                trigger="Click here to view data"
                className="mt-2 text-blue"
              >
                {/* name */}
                <FadeIn>
                  <div className="flex  align-center">
                    <div className="small-text container-inner mt-5">
                      <div className="flex justify-between mt-2 mb-3">
                        <div className="small-text">
                          Is this the first staking program for this token ?
                        </div>
                        
                      </div>
                      <Form>
                        <Form.Group className="mb-4">
                          <Form.Label>
                            Program's Stake token name                          </Form.Label>
                          <Form.Control
                            type="text"
                            placeholder=" Program's stake token name"
                            readOnly
                          />
                        </Form.Group>
                      </Form>
                    </div>
                  </div>
                </FadeIn>

                {/* website */}
                <FadeIn>
                  <div className="flex  align-center">
                    <div className="small-text container-inner mt-5">
                      <Form>
                        <Form.Group className="mb-4">
                          <Form.Label>Program Name</Form.Label>
                          <Form.Control type="text" placeholder="DAVID" readOnly/>
                      </Form.Group>

                        <Form.Group className="mb-4">
                          <Form.Label>Website URL</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="https://example.david.com/"
                            readOnly
                          />
                        </Form.Group>

                        <Form.Group className="mb-4">
                          <Form.Label>Social Media Links</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Website"
                            className="mb-2"
                            readOnly
                          />
                          <Form.Control
                            type="text"
                            placeholder="Twitter"
                            className="mb-2"
                            readOnly
                          />
                          <Form.Control
                            type="text"
                            placeholder="Telegram"
                            className="mb-2"
                            readOnly
                          />
                          <Form.Control
                            type="text"
                            placeholder="Discord"
                            className="mb-2"
                            readOnly
                          />
                          <Form.Control
                            type="text"
                            placeholder="Medium"
                            className="mb-2"
                            readOnly
                          />
                        </Form.Group>

                        <Form.Group className="mb-4">
                          <Form.Label>Program's Description</Form.Label>
                          <FloatingLabel
                            controlId="floatingTextarea2"
                            label="Enter your program's description here."
                          >
                            <Form.Control
                              as="textarea"
                              placeholder="Leave a comment here"
                              style={{ height: "100px" }}
                              readOnly
                            />
                          </FloatingLabel>
                        </Form.Group>
                      </Form>
                    </div>
                  </div>
                </FadeIn>
      
                <FadeIn>
                <div className="flex  align-center">
                    <div className="small-text container-inner mt-5">
                    <Form.Group className="mb-4">
                          <Form.Label>Stake Token Symbol</Form.Label>
                          <Form.Control type="text" placeholder="DAVID" readOnly />
                        </Form.Group>

                        <Form.Group className="mb-4">
                          <Form.Label>Stake Token Decimals</Form.Label>
                          <Form.Control type="text" placeholder="18" readOnly/>
                        </Form.Group>

                        <Form.Group className="mb-4">
                          <Form.Label>Stake Token Contract Address</Form.Label>
                          <Form.Control type="text" placeholder="0xfa...7Gs" readOnly/>
                        </Form.Group> 
                         
                        <Form.Group controlId="formFile" className="mb-3">
                          <Form.Label>Stake Token Contract ABI </Form.Label>
                          <Form.Control type="file" readOnly/>
                        </Form.Group>

                      </div>
                      </div>
                </FadeIn>
            
              </Collapsible>
            </div>

            <div className="header container-box mb-50">
              <div className="large-text mb-3">
                {" "}
                Staking Program's Specific Data
              </div>
              <Collapsible
                trigger="Click here to view data"
                className="mt-2 text-blue"
              >
                {/* specific data */}
                <FadeIn>
                  <div className="flex  align-center">
                    <div className="small-text container-inner mt-5">
                      <Form>
                        <Form.Group className="mb-4" controlId="formBasicEmail">
                          <FloatingLabel
                            controlId="floatingSelect"
                            label="Chain Name"                        
                          >
                            <Form.Select aria-label="Floating label select example">
                              <option>Select Chain Name </option>
                              <option value="1">Etherum</option>
                              <option value="2">Binance</option>
                              <option value="3">Polygon</option>
                              <option value="4">Avalance</option>
                            </Form.Select>
                          </FloatingLabel>
                        </Form.Group>
                        
                        <Form.Group className="mb-4">
                          <Form.Label>
                            <div className="flex"> 
                            <div className="small-text">Program's Start Date </div>
                            <div className="ml-2"><a target="_blank" href="https://www.epochconverter.com/">(https://www.epochconverter.com/)</a></div>
                            </div>
                             </Form.Label>
                          {/* hyperlink important*/}
                          <Form.Control
                            type="text"
                            placeholder="Enter Epoch time in GMT"
                            readOnly
                          />
                        </Form.Group>

                        <Form.Group className="mb-4">
                          <Form.Label>Program's Duration</Form.Label>
                          <Form.Control
                            type="number"
                            placeholder="Enter the number of days the program will be live"
                            readOnly
                          />
                        </Form.Group>

                        <Form.Group className="mb-4">
                          <Form.Label>Program's End Date </Form.Label>
                          <Form.Control
                            type="number"
                            placeholder="- "
                            readOnly
                          />
                        </Form.Group>
                        <Form.Group className="mb-4">
                          <Form.Label>Minimum Staking Days </Form.Label>
                          <Form.Control
                            type="number"
                            placeholder="Enter the locking period "
                            readOnly
                          />
                        </Form.Group>


                        <Form.Group className="mb-4">
                          <Form.Label>Penalities</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Enter Penalties"
                            readOnly
                          />
                        </Form.Group>
                      </Form>
                    </div>
                  </div>
                </FadeIn> 

                <FadeIn>
                  <div className="flex  align-center">
                    <div className="small-text container-inner mt-5">
                      <Form> 
                        <Form.Group className="mb-4">
                          <Form.Label>Reward Token Contract Address</Form.Label>
                          <Form.Control
                            type="number"
                            placeholder="0Xf...9rT"
                            readOnly
                          />
                        </Form.Group>

                        <Form.Group className="mb-4">
                          <Form.Label>Reward Token Name</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Reward token"
                            readOnly
                          />

                        </Form.Group>
                        <Form.Group className="mb-4">
                          <Form.Label>Reward Token Symbol </Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="RWD"
                            readOnly
                          />
                        </Form.Group>


                        <Form.Group className="mb-4">
                          <Form.Label>Reward Token Decimal</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="18"
                            readOnly
                          />
                        </Form.Group>
                        <Form.Group className="mb-4">
                          <Form.Label>No. of Reward Tokens Allocated</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="100,000"
                            readOnly
                          />
                        </Form.Group>

                        <Form.Group controlId="formFile" className="mb-3">
                          <Form.Label>Reward Token Contract ABI</Form.Label>
                          <Form.Control type="file" readOnly/>
                        </Form.Group>

                      </Form>
                    </div>
                  </div>
                </FadeIn>
              </Collapsible>
            </div>


{/* If lp staking --> otherwise no need */}
            <div className="header container-box mb-50">
            <div className="large-text mb-3">
                {" "}
               LP Staking Program's Data
              </div>
            <Collapsible
                trigger="Click here to view data"
                className="mt-2 text-blue"
              >
                {/* LP */}
                <FadeIn>
                  <div className="flex  align-center">
                    <div className="small-text container-inner mt-5">                    
                         <Form>
                          <Form.Group className="mb-4">
                              <Form.Label>LP Pair Name</Form.Label>
                              <Form.Control
                                type="text"
                                placeholder="DAVID-ETH"
                                readOnly
                              />
                            </Form.Group>                            
                            <Form.Group className="mb-4">
                              <Form.Label>DEX Name</Form.Label>
                              <Form.Control
                                type="text"
                                placeholder="eg: Uniswap"
                                readOnly
                              />
                            </Form.Group>

                            <Form.Group className="mb-4">
                              <Form.Label>Link to Pool Info</Form.Label>
                              <Form.Control
                                type="text"
                                placeholder="eg: https://info.uniswap.org/#/pools/0xac4b3dacb91461209ae9d41ec517c2b9cb1b7daf"
                                readOnly/>
                            </Form.Group>

                            <Form.Group className="mb-4">
                              <Form.Label>Swapping URL</Form.Label>
                              <Form.Control
                                type="text"
                                placeholder="eg: https://app.uniswap.org/#/swap?chain=mainnet"
                                readOnly/>
                            </Form.Group>

                            <Form.Group className="mb-4">
                              <Form.Label>Liquidity URL</Form.Label>
                              <Form.Control
                                type="text"
                                placeholder="eg: https://app.uniswap.org/#/pool?chain=mainnet"
                                readOnly/>
                            </Form.Group>
                          </Form>
                       
                    </div>
                  </div>
                </FadeIn>
              </Collapsible>
            </div>

            <div className="header container-box mb-50">
            <div className="large-text mb-3">
                {" "}
                Bridged Token Data
              </div>
            <Collapsible
                trigger="Click here to view data"
                className="mt-2 text-blue"
              >
              {/* bridge */}
                <FadeIn>
                  <div className="flex  align-center">
                    <div className="small-text container-inner mt-5">
                          <Form>
                            <Form.Group className="mb-4">
                              <Form.Label>Original Token Name</Form.Label>
                              <Form.Control
                                type="text"
                                placeholder="-"
                                disabled
                                readOnly
                              />
                            </Form.Group>

                            <Form.Group className="mb-4">
                              <Form.Label>Original Token Address </Form.Label>
                              <Form.Control
                                type="text"
                                placeholder="-"
                                disabled
                                readOnly
                              />
                            </Form.Group>

                            <Form.Group className="mb-4">
                              <Form.Label>Original Token Chain</Form.Label>
                              <Form.Control
                                type="text"
                                placeholder="-"
                                disabled
                                readOnly
                              />
                            </Form.Group>
                          </Form>
                    </div>
                  </div>
                </FadeIn>
              </Collapsible>
            </div>

          </FadeIn>


          <FadeIn>
              <SCbtn/>
            </FadeIn>
        </div>

      </div>
        </div>
    );
}

export default DetailPage;