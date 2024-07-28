// import LoginScreen from './Components/Screens/Login/LoginScreen';
import ForgotPassword from './Components/Screens/ForgotPassword/ForgotPassword';

import NavAndRouters from './Components/Screens/NavAndRoutersContainer/NavAndRouters';
import RegisterScreen from './Components/Screens/Register/RegisterScreen';
import './App.css';
import LoginScreen from './Components/Screens/Login/LoginScreen'
import {
  BrowserRouter,
  Switch,
  Route,
  Link,
  useRouteMatch
} from "react-router-dom";

import AddEventsScreen from './Components/Screens/NavMenuScreens/AddEvents/AddEventsScreen';
import SocietyMembersScreen from './Components/Screens/NavMenuScreens/SocietyMembers/SocietyMembersScreen';

import AccountScreen from './Components/Screens/NavMenuScreens/Account/AccountScreen';

import AboutSociety from './Components/Screens/NavMenuScreens/AboutSociety/AboutSociety';
import ReportScreen from './Components/Screens/NavMenuScreens/Reports/ReportScreen';

import { AuthProvider } from './contexts/AuthContext';
import { auth } from './firebase';
import { useState } from 'react';
import ManageEvents from './Components/Screens/NavMenuScreens/EventsNavScreens/ManageEventsScreen/ManageEvents';
import EventReports from './Components/Screens/NavMenuScreens/EventsNavScreens/EventsReportsScreen/EventReports';
import CreateEvents from './Components/Screens/NavMenuScreens/EventsNavScreens/CreateEventsScreen/CreateEvents';
function App() {
  const [signedin, setSignedin] = useState(false)
    auth.onAuthStateChanged((user)=>{
      if(user){
        setSignedin(true);
        //  console.log(user, 'dfghjj')
      }else{

        setSignedin(false);
      }
  });

  // const [visible,setVisible] = useState(false);
  return (
    <AuthProvider>
      <BrowserRouter>
        <div className="App">
          <Switch>
            {
              !signedin ? (
                <>
                  <Route exact path="/">
                    <LoginScreen />
                  </Route>
                  <Route exact path="/RegisterScreen">
                    <RegisterScreen />

                  </Route>
                  <Route exact path="/Forgotpassword">
                    <ForgotPassword />
                  </Route>
                </>
              ) : (
                <>
                  <NavAndRouters>
                    {/* <Route path='/societyMembers'><SocietyMembersScreen /></Route>
                    <Route  path='/reports' ><ReportScreen /></Route>
                    <Route  path='/about' ><AboutSociety /></Route> */}
                    <Route  path='/account'><AccountScreen /></Route>
                    {/* <Route exact path='/events'><AddEventsScreen /></Route>
                    <Route  path="/manage"><ManageEvents/></Route> 
                    <Route  path="/eventReport" ><EventReports/></Route>
                    <Route  path="/createEvents"><CreateEvents/></Route> */}
                  </NavAndRouters>

                  {/* <Route exact path='/societyMembers'><SocietyMembersScreen /></Route>
                  <Route exact path='/reports' ><ReportScreen /></Route>
                  <Route exact path='/about' ><AboutSociety /></Route>
                  <Route exact path='/account'><AccountScreen /></Route>
                  <Route exact path='/events'><AddEventsScreen /></Route> */}
                  {/* <Route exact path="/manage"><ManageEvents/></Route> 
                  <Route exact path="/eventReport" ><EventReports/></Route>
                  <Route exact path="/createEvents"><CreateEvents/></Route> */}
                </>
              )
            }
            {/* <LoginScreen/> */}

            {/* <ForgotPassword/> */}
            {/* <NavAndRouters/> */}
          </Switch>
        </div>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
