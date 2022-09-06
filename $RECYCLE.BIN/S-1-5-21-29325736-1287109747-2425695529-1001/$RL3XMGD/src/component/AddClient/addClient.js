import React from 'react';
import FadeIn from 'react-fade-in';
import { FloatingLabel, Form } from "react-bootstrap";
import LeftSidebar from '../Leftpannel/leftbar';
import "./client.css"

function AddClient(props) {
    return (
        <div>
              <div className='add-client'>
               <LeftSidebar/>
           
          <div className="add-container">
              <FadeIn>
                <h3 className='center-align'>Add New Client</h3>
            <div className="small-text cont-network mt-5">
              <Form>
                <Form.Group className="mb-4">
                  <Form.Label>Client Name</Form.Label>
                  <Form.Control type="text" placeholder="Client1" />
                </Form.Group>

                <Form.Group className="mb-4">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder="client1@mail.com" />
                </Form.Group>

                <Form.Group className="mb-4">
                  <Form.Label>Telegram</Form.Label>
                  <Form.Control type="text" placeholder="https://t.me/client1" />
                </Form.Group>

                <Form.Group className="mb-4">
                  <Form.Label>Country code</Form.Label>
                  <Form.Control type="number" placeholder="(+)" />
                </Form.Group>

                <Form.Group className="mb-4">
                  <Form.Label>Mobile Number</Form.Label>
                  <Form.Control type="text" placeholder="0123456789" />
                </Form.Group>
              </Form>
            </div>
             <button className=" add-btn open-sans cursor-pointer">
             Add Client
            </button>  
            </FadeIn>
          </div>

           </div> 
        </div>
    );
}

export default AddClient;