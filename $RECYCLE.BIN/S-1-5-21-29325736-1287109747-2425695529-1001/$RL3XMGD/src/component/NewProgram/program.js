import { React, useState } from "react";
import { Radio } from "antd";
import { FloatingLabel, Form } from "react-bootstrap";
import LeftSidebar from "../Leftpannel/leftbar";
import "./program.css";
import FadeIn from "react-fade-in";
import Collapsible from "react-collapsible";

export default function CreateProgram() {
  const [first, setFirst] = useState(1);
  const [lp, setLp] = useState(1);
  const [bridge, setBridge] = useState(1);
  const [design, setDesign] = useState(1);
  //new-program
  const[stakeTokenName, setStakeTokenName]=useState("")

  const onChange1 = (e) => {
    console.log("radio checked", e.target.value);
    setFirst(e.target.value);
  };

  const onChange2 = (e) => {
    console.log("radio checked", e.target.value);
    setLp(e.target.value);
  };

  const onChange3 = (e) => {
    console.log("radio checked", e.target.value);
    setBridge(e.target.value);
  };

  const onChange4 = (e) => {
    console.log("radio checked", e.target.value);
    setDesign(e.target.value);
  };

  return (
    <>
      <div className="new-program ">
        <LeftSidebar />

        <div className="create-cont justify-center">
          <FadeIn>
        <h3 className='center-align mb-5'>Create Staking Program</h3>
          </FadeIn>

      
          <FadeIn>
            {/* ---------- */}
            <div className="header cont3 mb-50">
              <div className="large-text mb-3">
                {" "}
                Client's Contact Information
              </div>
              <Collapsible
                trigger="Click here to enter data"
                className="mt-2 text-blue"
              >
                <Form.Text className="text-muted mb-4">
                  Please enter Client email id to fetch the data.
                </Form.Text>
                <div className="flex  align-center">
                  <div className="small-text cont2 mt-5">
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
                  <div className="small-text cont2 mt-5">
                    <Form>
                      <Form.Group className="mb-4">
                        <Form.Label>Client Name</Form.Label>
                        <Form.Control type="text" placeholder="-" readOnly />
                      </Form.Group>

                      <Form.Group className="mb-4">
                        <Form.Label>Telegram</Form.Label>
                        <Form.Control type="text" placeholder="-" readOnly />
                      </Form.Group>

                      <Form.Group className="mb-4">
                        <Form.Label>Mobile Number</Form.Label>
                        <Form.Control type="number" placeholder="-" readOnly />
                      </Form.Group>
                    </Form>
                  </div>
                </div>
              </Collapsible>
            </div>
            {/* ---------- */}
            <div className="header cont3 mb-50">
              <div className="large-text mb-3">
                {" "}
                Staking Program's Generic Data
              </div>
              <Collapsible
                trigger="Click here to enter data"
                className="mt-2 text-blue"
              >
                {/* name */}
                <FadeIn>
                  <div className="with-btn-cont ">
                    <div className="small-text cont2 mt-5">
                      <div className="radio-btnz justify-between mt-2 mb-3">
                        <div className="small-text">
                          Is this the first staking program for this token ?
                        </div>
                        <div className="radio-alignment">
                          <Radio.Group onChange={onChange1} value={first}>
                            <Radio value={1} style={{ marginRight: "30px" }}>
                              Yes
                            </Radio>
                            <Radio value={2}>No</Radio>
                          </Radio.Group>
                        
                        </div>
                      </div>
                      <Form>
                        <Form.Group className="mb-4">
                          <Form.Label>
                            {first != 1
                              ? " Please enter the progarm's token name to fetch your data."
                              : "Program's Stake token name "}
                          </Form.Label>
                          <Form.Control
                            type="text"
                            placeholder=" Program's stake token name"
                          />
                        </Form.Group>
                      </Form>
                    </div>
                    {first == 1 ? (
                      " "
                    ) : (
                      <button className=" submit-btn open-sans cursor-pointer ml-75" style={{margin:"15px"}}>
                        submit
                      </button>
                    )}
                  </div>
                </FadeIn>

                {/* website */}
                <FadeIn>
                  <div className="flex  align-center">
                    <div className="small-text cont1 mt-5">
                      <Form>
                        <Form.Group className="mb-4">
                          <Form.Label>Program Name</Form.Label>
                          <Form.Control type="text" placeholder="DAVID" />
                          {/* <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text> */}
                        </Form.Group>

                        <Form.Group className="mb-4">
                          <Form.Label>Website URL</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="https://example.david.com/"
                          />
                        </Form.Group>

                        <Form.Group className="mb-4">
                          <Form.Label>Social Media Links</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Website"
                            className="mb-2"
                          />
                          <Form.Control
                            type="text"
                            placeholder="Twitter"
                            className="mb-2"
                          />
                          <Form.Control
                            type="text"
                            placeholder="Telegram"
                            className="mb-2"
                          />
                          <Form.Control
                            type="text"
                            placeholder="Discord"
                            className="mb-2"
                          />
                          <Form.Control
                            type="text"
                            placeholder="Medium"
                            className="mb-2"
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
                            />
                          </FloatingLabel>
                        </Form.Group>
                      </Form>
                    </div>
                  </div>
                </FadeIn>

                <FadeIn>
                  <div className="flex  align-center">
                    <div className="small-text cont1 mt-5">
                      <Form.Group className="mb-4">
                        <Form.Label>Stake Token Symbol</Form.Label>
                        <Form.Control type="text" placeholder="DAVID" />
                      </Form.Group>

                      <Form.Group className="mb-4">
                        <Form.Label>Stake Token Decimals</Form.Label>
                        <Form.Control type="text" placeholder="18" />
                      </Form.Group>

                      <Form.Group className="mb-4">
                        <Form.Label>Stake Token Contract Address</Form.Label>
                        <Form.Control type="text" placeholder="0xfa...7Gs" />
                      </Form.Group>

                      <Form.Group controlId="formFile" className="mb-3">
                        <Form.Label>Stake Token Contract ABI </Form.Label>
                        <Form.Control type="file" />
                      </Form.Group>
                    </div>
                  </div>
                </FadeIn>
              </Collapsible>
            </div>
            {/* ---------- */}
            <div className="header cont3 mb-50">
              <div className="large-text mb-3">
                {" "}
                Staking Program's Specific Data
              </div>
              <Collapsible
                trigger="Click here to enter data"
                className="mt-2 text-blue"
              >
                {/* specific data */}
                <FadeIn>
                  <div className="flex  align-center">
                    <div className="small-text cont2 mt-5">
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
                              <div className="small-text">
                                Program's Start Date{" "}
                              </div>
                              <div className="ml-2">
                                <a
                                  target="_blank"
                                  href="https://www.epochconverter.com/"
                                >
                                  (https://www.epochconverter.com/)
                                </a>
                              </div>
                            </div>
                          </Form.Label>
                          {/* hyperlink important*/}
                          <Form.Control
                            type="text"
                            placeholder="Enter Epoch time in GMT"
                          />
                        </Form.Group>

                        <Form.Group className="mb-4">
                          <Form.Label>Program's Duration</Form.Label>
                          <Form.Control
                            type="number"
                            placeholder="Enter the number of days the program will be live"
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
                          />
                        </Form.Group>

                        <Form.Group className="mb-4">
                          <Form.Label>Penalities</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Enter Penalties"
                          />
                        </Form.Group>
                      </Form>
                    </div>
                  </div>
                </FadeIn>

                <FadeIn>
                  <div className="flex  align-center">
                    <div className="small-text cont2 mt-5">
                      <Form>
                        <Form.Group className="mb-4">
                          <Form.Label>Reward Token Contract Address</Form.Label>
                          <Form.Control type="number" placeholder="0Xf...9rT" />
                        </Form.Group>

                        <Form.Group className="mb-4">
                          <Form.Label>Reward Token Name</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Reward token"
                          />
                        </Form.Group>
                        <Form.Group className="mb-4">
                          <Form.Label>Reward Token Symbol </Form.Label>
                          <Form.Control type="text" placeholder="RWD" />
                        </Form.Group>

                        <Form.Group className="mb-4">
                          <Form.Label>Reward Token Decimal</Form.Label>
                          <Form.Control type="text" placeholder="18" />
                        </Form.Group>
                        <Form.Group className="mb-4">
                          <Form.Label>
                            No. of Reward Tokens Allocated
                          </Form.Label>
                          <Form.Control type="text" placeholder="100,000" />
                        </Form.Group>

                        <Form.Group controlId="formFile" className="mb-3">
                          <Form.Label>Reward Token Contract ABI</Form.Label>
                          <Form.Control type="file" />
                        </Form.Group>
                      </Form>
                    </div>
                  </div>
                </FadeIn>


                <FadeIn>
                  <div className="flex  align-center">
                    <div className="small-text cont2 mt-5">
                    <Form.Group className="mb-4" controlId="formBasicEmail">
                          <FloatingLabel
                            controlId="floatingSelect"
                            label="Who is the owner ?"
                          >
                            <Form.Select aria-label="Floating label select example">
                            
                              <option value="1">Admin</option>
                              <option value="2">Client</option>
                             
                            </Form.Select>
                          </FloatingLabel>
                        </Form.Group>

                    <Form.Group className="mb-4">
                          <Form.Label>Wallet Address of Staking Program's Owner </Form.Label>
                          <Form.Control type="text" placeholder="0hS....fdh56" />
                        </Form.Group>
                        
                      </div>
                      </div>
                      </FadeIn>
              </Collapsible>
            </div>
            {/* ---------- */}
            <div className="header cont3 mb-50">
              <div className="large-text mb-3"> LP Staking Program's Data</div>
              <Collapsible
                trigger="Click here to enter data"
                className="mt-2 text-blue"
              >
                {/* LP */}
                <FadeIn>
                  <div className="with-btn-cont ">
                    <div className="small-text cont1 mt-5">
                      <div className="radio-btnz mt-3">
                        <div className="large-text mt-1 mb-1">
                          Is it an LP staking program ?
                        </div>
                        <div className="radio-alignment">
                        <Radio.Group onChange={onChange2} value={lp}>
                          <Radio value={1} style={{ marginRight: "30px" }}>
                            Yes
                          </Radio>
                          <Radio value={2}>No</Radio>
                        </Radio.Group>
                        </div>
                      </div>
                      {lp == 1 ? (
                        <>
                          <Form>
                            <Form.Group className="mb-4">
                              <Form.Label>LP Pair Name</Form.Label>
                              <Form.Control
                                type="text"
                                placeholder="DAVID-ETH"
                              />
                            </Form.Group>
                            <Form.Group className="mb-4">
                              <Form.Label>DEX Name</Form.Label>
                              <Form.Control
                                type="text"
                                placeholder="eg: Uniswap"
                              />
                            </Form.Group>

                            <Form.Group className="mb-4">
                              <Form.Label>Link to Pool Info</Form.Label>
                              <Form.Control
                                type="text"
                                placeholder="eg: https://info.uniswap.org/#/pools/0xac4b3dacb91461209ae9d41ec517c2b9cb1b7daf"
                              />
                            </Form.Group>

                            <Form.Group className="mb-4">
                              <Form.Label>Swapping URL</Form.Label>
                              <Form.Control
                                type="text"
                                placeholder="eg: https://app.uniswap.org/#/swap?chain=mainnet"
                              />
                            </Form.Group>

                            <Form.Group className="mb-4">
                              <Form.Label>Liquidity URL</Form.Label>
                              <Form.Control
                                type="text"
                                placeholder="eg: https://app.uniswap.org/#/pool?chain=mainnet"
                              />
                            </Form.Group>
                          </Form>
                        </>
                      ) : (
                        <>
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
                                readOnly />
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
                        </>
                      )}
                    </div>
                    {lp == 1 ? (
                      <button className=" submit-btn open-sans cursor-pointer ml-75" style={{margin:"15px"}}>
                        submit
                      </button>
                    ) : (
                      " "
                    )}
                  </div>
                </FadeIn>
              </Collapsible>
            </div>
            {/* ---------- */}
            <div className="header cont3 mb-50">
              <div className="large-text mb-3"> Bridged Token Data</div>
              <Collapsible
                trigger="Click here to enter data"
                className="mt-2 text-blue"
              >
                {/* bridge */}

                <FadeIn>
                  <div className="with-btn-cont   align-center">
                    <div className="small-text cont2 mt-5">
                      <div className="radio-btnz mt-3">
                        <div className="large-text mb-1">
                          Is the token bridged from another chain ?
                        </div>
                        <div className="radio-alignment">
                        <Radio.Group onChange={onChange3} value={bridge}>
                          <Radio value={1} style={{ marginRight: "30px" }}>
                            Yes
                          </Radio>
                          <Radio value={2}>No</Radio>
                        </Radio.Group>
                        </div>
                      </div>
                      {bridge == 1 ? (
                        <>
                          <Form>
                            <Form.Group className="mb-4">
                              <Form.Label>Original Token Name</Form.Label>
                              <Form.Control
                                type="text"
                                placeholder="Enter bridged token name for this program"
                              />
                            </Form.Group>

                            <Form.Group className="mb-4">
                              <Form.Label>Original Token Address </Form.Label>
                              <Form.Control
                                type="text"
                                placeholder="Enter token dddress for the original token"
                              />
                            </Form.Group>

                            <Form.Group className="mb-4">
                              <Form.Label>Original Token Chain</Form.Label>
                              <Form.Control
                                type="text"
                                placeholder="Enter chain name of the original token"
                              />
                            </Form.Group>
                          </Form>
                        </>
                      ) : (
                        <>
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
                        </>
                      )}
                    </div>
                    {bridge == 1 ? (
                      <button className=" submit-btn open-sans cursor-pointer ml-75">
                        submit
                      </button>
                    ) : (
                      " "
                    )}
                  </div>
                </FadeIn>
              </Collapsible>
            </div>
            {/* ---------- */}
            <div className="header cont3 mb-50">
              <div className="large-text mb-3"> Design Details</div>
              <Collapsible
                trigger="Click here to enter data"
                className="mt-2 text-blue"
              >
                <FadeIn>
                  <div className="with-btn-cont">
                    <div className="small-text cont2 mt-5">
                      <div className="radio-btnz justify-between mt-2 mb-3">
                        <div className="large-text">Need design change</div>
                        <div className="radio-alignment">
                          <Radio.Group onChange={onChange4} value={design}>
                            <Radio value={1} style={{ marginRight: "30px" }}>
                              Yes
                            </Radio>
                            <Radio value={2}>No</Radio>
                          </Radio.Group>
                        </div>
                      </div>
                      {design == 2 ? (
                        <Form.Text className="text-muted mb-3">
                          Please enter your pervious project details to fetch
                          the design.
                        </Form.Text>
                      ) : (
                        " "
                      )}
                      {design == 1 ? (
                        <>
                          <Form>
                            <Form.Group className="mb-4">
                              <Form.Label>Program Name</Form.Label>
                              <Form.Control
                                type="text"
                                placeholder="-"
                                disabled
                                readOnly
                              />
                            </Form.Group>

                            <Form.Group className="mb-4">
                              <Form.Label>Chain Name </Form.Label>
                              <Form.Control
                                type="text"
                                placeholder="-"
                                disabled
                                readOnly
                              />
                            </Form.Group>

                            <Form.Group className="mb-4">
                              <Form.Label>Program Type</Form.Label>
                              <Form.Control
                                type="text"
                                placeholder="-"
                                disabled
                                readOnly
                              />
                            </Form.Group>
                          </Form>
                        </>
                      ) : (
                        <>
                          <Form>
                            <Form.Group className="mb-4">
                              <Form.Label>Program Name</Form.Label>
                              <Form.Control
                                type="text"
                                placeholder="Enter the program name"
                              />
                            </Form.Group>

                            <Form.Group className="mb-4">
                              <Form.Label>Chain Name </Form.Label>
                              <Form.Control
                                type="text"
                                placeholder="Enter the chain name"
                              />
                            </Form.Group>

                            <Form.Group className="mb-4">
                              <Form.Label>Program Type</Form.Label>
                              <Form.Control
                                type="text"
                                placeholder="Enter the type of program"
                              />
                            </Form.Group>
                          </Form>
                        </>
                      )}
                    </div>
                    {design == 2 ? (
                      <button className=" submit-btn open-sans cursor-pointer ml-75"  style={{margin:"15px"}}>
                        submit
                      </button>
                    ) : (
                      " "
                    )}
                  </div>
                </FadeIn>

                {/* design detail */}
                {design != 1 ? (
                  <>
                    {" "}
                    <FadeIn>
                      <div className="flex  align-center">
                        <div className="small-text cont2 mt-5">
                          <Form>
                            <Form.Group controlId="formFile" className="mb-3">
                              <Form.Label>Banner Image</Form.Label>
                              <Form.Control type="file" readOnly />
                            </Form.Group>

                            <Form.Group controlId="formFile" className="mb-3">
                              <Form.Label>Logo Image</Form.Label>
                              <Form.Control type="file" readOnly />
                            </Form.Group>

                            <Form.Group controlId="formFile" className="mb-3">
                              <Form.Label>Preview Image</Form.Label>
                              <Form.Control type="file" readOnly />
                            </Form.Group>

                            <Form.Group className="mb-4">
                              <Form.Label>Background colour</Form.Label>
                              <Form.Control
                                type="text"
                                placeholder="Black / White"
                                readOnly
                              />
                            </Form.Group>

                            <Form.Group className="mb-4">
                              <Form.Label>Token Name Color </Form.Label>
                              <Form.Control
                                type="text"
                                placeholder="Token name color"
                                readOnly
                              />
                            </Form.Group>
                          </Form>
                        </div>
                      </div>
                    </FadeIn>
                  </>
                ) : (
                  <>
                    <FadeIn>
                      <div className="flex  align-center">
                        <div className="small-text cont2 mt-5">
                          <Form>
                            <Form.Group controlId="formFile" className="mb-3">
                              <Form.Label>Banner Image</Form.Label>
                              <Form.Control type="file" />
                            </Form.Group>

                            <Form.Group controlId="formFile" className="mb-3">
                              <Form.Label>Logo Image</Form.Label>
                              <Form.Control type="file" />
                            </Form.Group>

                            <Form.Group controlId="formFile" className="mb-3">
                              <Form.Label>Preview Image</Form.Label>
                              <Form.Control type="file" />
                            </Form.Group>

                            <Form.Group className="mb-4">
                              <Form.Label>Background colour</Form.Label>
                              <Form.Control
                                type="text"
                                placeholder="Black / White"
                              />
                            </Form.Group>

                            <Form.Group className="mb-4">
                              <Form.Label>Token Name Color </Form.Label>
                              <Form.Control
                                type="text"
                                placeholder="Token name color"
                              />
                            </Form.Group>
                          </Form>
                        </div>
                      </div>
                    </FadeIn>
                  </>
                )}
              </Collapsible>
            </div>
          </FadeIn>
          <FadeIn>
            <button className="submit-btn-main open-sans cursor-pointer center-align">
              {" "}
              Submit{" "}
            </button>
          </FadeIn>
        </div>
      </div>
    </>
  );
}
