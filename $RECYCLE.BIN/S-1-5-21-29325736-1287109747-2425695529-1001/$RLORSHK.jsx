import React from "react";
import "./App.scss";
import {
	Navigate,
	Route,
	Routes, useNavigate
} from "react-router-dom";
import AuthenticationPage from "./pages/AuthenticationPages";
import Dashboard from "./pages/Dashboard";

class App extends React.Component {
  render() {

    return (
   <>
   
<Routes>
  <Route path="*" element={<AuthenticationPage/>} exact/>
<Route path="/dashboard" element={<Dashboard/>} />
</Routes>
   </>

    );
  }
}

export default App;
