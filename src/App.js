import { BrowserRouter as Router, Route,Routes } from "react-router-dom";
import Footer from './componant/footer'
import Header from "./componant/Header";
import Home from './componant/Home';
import Contact from './componant/Contact';
import Services from './componant/Services';

import './styles/mediaquery.scss';
import './styles/App.scss';

function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path ='/' element ={<Home/>}/>
        <Route path ='/contact' element ={<Contact/>}/>
        <Route path ='/services' element ={<Services/>}/>
      </Routes>
      <Footer/>
    </Router>
    
  );
}

export default App;
