
import './App.css';
import HomePage from './pages/Home/homePage';
import HeaderArea from './components/header';
import Footer from './components/footer';
import { Routes,Route } from 'react-router-dom';
import FarmPage from './pages/Farm/farmPage';
import MyFarms from './components/myFarms';
import Navbar from './components/Navbar/navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="*" element={<HomePage/>}/>
        <Route path="/staking-farm" element={<FarmPage/>}/>
        <Route path="/my-farms" element={<MyFarms/>}/>
      </Routes>
    
    <Footer/>
    </div>
  );
}

export default App;
