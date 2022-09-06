import React from 'react';
import LeftSidebar from '../Leftpannel/leftbar.js';
import "./viewclient.css"
import FadeIn from "react-fade-in";
import Collapsible from "react-collapsible";
import { FloatingLabel, Form } from "react-bootstrap";


function Viewclients(props) {
    return (
        <div>
                  <div className="view-client ">
        <LeftSidebar/>

        <div className="create-cont justify-center">
          <FadeIn>
        <h3 className='center-align mb-5'>View All Clients</h3>
          </FadeIn>

          <FadeIn>
          <div className="header cont3 mb-50">
              <div className="large-text mb-3">
                {" "}
                David Milan
              </div>
              <Collapsible
                trigger="Click here to view data"
                className="mt-2 text-blue"
              >
                <div className="flex  align-center">
                  <div className="small-text cont2 mt-5">
                    <Form>
                      <Form.Group className="mb-4">
                        <Form.Label>Client email</Form.Label>
                        <Form.Control type="email" placeholder="david@gmail.com" readOnly />
                      </Form.Group>

                      <Form.Group className="mb-4">
                        <Form.Label>Telegram</Form.Label>
                        <Form.Control type="text" placeholder="https//:teleggram@me.com" readOnly />
                      </Form.Group>

                      <Form.Group className="mb-4">
                        <Form.Label>Mobile Number</Form.Label>
                        <Form.Control type="number" placeholder="9876543210" readOnly />
                      </Form.Group>
                    </Form>
                  </div>
                </div>
              </Collapsible>
            </div>

            <div className="header cont3 mb-50">
              <div className="large-text mb-3">
                {" "}
               Sample Client1
              </div>
              <Collapsible
                trigger="Click here to view data"
                className="mt-2 text-blue"
              >
                <div className="flex  align-center">
                  <div className="small-text cont2 mt-5">
                    <Form>
                      <Form.Group className="mb-4">
                        <Form.Label>Client email</Form.Label>
                        <Form.Control type="email" placeholder="client1@gmail.com" readOnly />
                      </Form.Group>

                      <Form.Group className="mb-4">
                        <Form.Label>Telegram</Form.Label>
                        <Form.Control type="text" placeholder="https//:teleggram@me.com" readOnly />
                      </Form.Group>

                      <Form.Group className="mb-4">
                        <Form.Label>Mobile Number</Form.Label>
                        <Form.Control type="number" placeholder="9876543210" readOnly />
                      </Form.Group>
                    </Form>
                  </div>
                </div>
              </Collapsible>
            </div>

            <div className="header cont3 mb-50">
              <div className="large-text mb-3">
                {" "}
             Sample Client 2
              </div>
              <Collapsible
                trigger="Click here to view data"
                className="mt-2 text-blue"
              >
                <div className="flex  align-center">
                  <div className="small-text cont2 mt-5">
                    <Form>
                      <Form.Group className="mb-4">
                        <Form.Label>Client email</Form.Label>
                        <Form.Control type="email" placeholder="client2@gmail.com" readOnly />
                      </Form.Group>

                      <Form.Group className="mb-4">
                        <Form.Label>Telegram</Form.Label>
                        <Form.Control type="text" placeholder="https//:teleggram@me.com" readOnly />
                      </Form.Group>

                      <Form.Group className="mb-4">
                        <Form.Label>Mobile Number</Form.Label>
                        <Form.Control type="number" placeholder="9876543210" readOnly />
                      </Form.Group>
                    </Form>
                  </div>
                </div>
              </Collapsible>
            </div>
          </FadeIn>
        </div>
        </div>
        </div>
    );
}

export default Viewclients;