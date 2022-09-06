import React from 'react';
import LeftSidebar from '../Leftpannel/leftbar';
import "./network.css"
import FadeIn from 'react-fade-in';
import { FloatingLabel, Form } from "react-bootstrap";

function AddNetwork(props) {
    return (
        <div >
           <div className='add-network'>
               <LeftSidebar/>
           
          <div className="add-container">
              <FadeIn>
              <h3 className='center-align'>Add New Network</h3>
            <div className="small-text cont-network mt-5">
              <Form>
                <Form.Group className="mb-4">
                  <Form.Label>Chain Id</Form.Label>
                  <Form.Control type="text" placeholder="1" />
                </Form.Group>

                <Form.Group className="mb-4">
                  <Form.Label>Chain Name</Form.Label>
                  <Form.Control type="text" placeholder="Ethereum" />
                </Form.Group>

                <Form.Group className="mb-4">
                  <Form.Label>HTTP RPC URL</Form.Label>
                  <Form.Control type="text" placeholder="eg: https://rpc-url/" />
                </Form.Group>

                <Form.Group className="mb-4">
                  <Form.Label>Web Socket RPC URL</Form.Label>
                  <Form.Control type="text" placeholder="eg: wss://ws-url/" />
                </Form.Group>

                <Form.Group className="mb-4">
                  <Form.Label>Chain Explorer</Form.Label>
                  <Form.Control type="text" placeholder="eg: https://etherscan.io/" />
                </Form.Group>

                <Form.Group controlId="formFile" className="mb-3">
                          <Form.Label>Logo Image</Form.Label>
                          <Form.Control type="file" />
                        </Form.Group>
              </Form>
            </div>
             <button className=" add-btn open-sans cursor-pointer">
             Add Network
            </button>  
            </FadeIn>
          </div>

           </div> 
        </div>
    );
}

export default AddNetwork;