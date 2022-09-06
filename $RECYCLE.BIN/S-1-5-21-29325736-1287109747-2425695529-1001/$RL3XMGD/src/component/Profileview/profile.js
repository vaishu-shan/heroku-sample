import React from 'react';
import LeftSidebar from '../Leftpannel/leftbar';
import "./profile.css"
import { FloatingLabel, Form } from "react-bootstrap";
import Collapsible from "react-collapsible";

function ProfileView(props) {
    return (
        <div className='flex '>
            <LeftSidebar/>
            <div className='profile-pannel'>
            <div className='detail-box'>
               <h3 className='center-align'>Your Profile</h3>
                <div className="flex justify-center align-center">
                  <div className="small-text cont2 mt-5">
                    <Form>
                      <Form.Group className="mb-4">
                        <Form.Label>Username</Form.Label>
                        <Form.Control type="text" placeholder="David" readOnly />
                      </Form.Group>
                      <Form.Group className="mb-4">
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control type="email" placeholder="david@gmail.com" readOnly />
                      </Form.Group>
                      <Form.Group className="mb-4">
                        <Form.Label>Country Code</Form.Label>
                        <Form.Control type="number" placeholder="+91" readOnly />
                      </Form.Group>
                      <Form.Group className="mb-4">
                        <Form.Label>Mobile Number</Form.Label>
                        <Form.Control type="number" placeholder="9876543210" readOnly />
                      </Form.Group>
                      <Form.Group className="mb-4">
                        <Form.Label>Telegram</Form.Label>
                        <Form.Control type="text" placeholder="https://tlegram.me.id/" readOnly />
                      </Form.Group>
                    </Form>
                  </div>
                </div>
           
            </div>
            </div>
      
            
        </div>
    );
}

export default ProfileView;