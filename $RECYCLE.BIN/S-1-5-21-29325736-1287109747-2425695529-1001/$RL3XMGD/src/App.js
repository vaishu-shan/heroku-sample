
import './App.css';
import HomePage from './pages/Home/home';
import {
	Route,
	Routes,  useRoutes 
} from "react-router-dom";
import {BrowserRouter as Router} from "react-router-dom";
import LoginPage from './component/LoginPage/login';
import CreateProgram from './component/NewProgram/program';
import ResetPassword from './component/ResetPassword/reset';
import AddNetwork from './component/AddNetwork/addNetwork';
import AddClient from './component/AddClient/addClient';
import DetailPage from './component/DetailPage/detailPage';
import ProfileView from './component/Profileview/profile';
import Footer from './component/Footer/footer';
import Viewclients from './component/Allclients/viewClients';

function App() {
  const client = true;
  return (
    <div className="App">
      <Routes>
      <Route path="*" element={<LoginPage />} />
      <Route path="/home" element={<Home/>} />
      <Route path="/create-program" element={<CreateProgram />} />
      <Route path="/reset-password" element={<ResetPassword />} />
      {client ?   <Route path="/add-network" element={<AddNetwork />} />: "" }
    {client ?  <Route path="/add-client" element={<AddClient />} /> : ""}     
      <Route path="/all-clients" element={<Viewclients />} />
      <Route path="/detail-page" element={<DetailPage />} />
      <Route path="/profile-view" element={<ProfileView />} />
     
      </Routes>
    
    <Footer/>
    </div>
  );
}

export default App;
