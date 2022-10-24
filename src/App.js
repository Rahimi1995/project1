import Home from '../src/components/Home';
import {BrowserRouter as Router,Route,Switch,Redirect} from "react-router-dom"
// import Maparea from './components/Maparea'
import Addproject from '../src/components/DesktopOrLaptoparea/Addproject'
// import Categorypage from './components/Categorypage'
// import viewproject from './components/viewproject'
// import viewproject2 from './components/viewproject2';
import Test from '../src/Test';
import Loginarea from '../src/components/DesktopOrLaptoparea/Loginarea';
// import Singlehome from './components/Singlehome';
import Carouselsimilerhome from './components/Carousel/Carouselsimilerhome'
// import Carousel from '../src/components/Carousel/Carousel'
// import Pricebar from './components/Pricebar'
import Homeinput from '../src/components/DesktopOrLaptoparea/Homeinput'
import Homeequipment from '../src/components/DesktopOrLaptoparea/Homeequipment';
import Homefacilies from '../src/components/DesktopOrLaptoparea/Homefacilies';
import Homeinformation from '../src/components/DesktopOrLaptoparea/Homeinformation'
import Homeupload from '../src/components/DesktopOrLaptoparea/Homeupload.js'




function App() {
  return (
    
    <Router>
     
  
     {/* <div className="App"> */}
     
     
      <Switch>
      <Route  path="/" component={Home}/>
      {/* <Route exact path="/Addproject" component={Addproject}/> */}
      <Route path="/Loginarea" component={Loginarea}/>
      <Redirect from="/Loginarea" to="/Addproject"/>



      </Switch>
      
       {/* </div>  */}
  
      </Router>
  
  );
}

export default App;

