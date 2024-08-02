import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Routes, Route,Switch} from 'react-router-dom';
import SideNavBar from '../SideNavBar/SideNavBar';
import AddEventsScreen from '../NavMenuScreens/AddEvents/AddEventsScreen';
import SocietyMembersScreen from '../NavMenuScreens/SocietyMembers/SocietyMembersScreen';
import AccountScreen from '../NavMenuScreens/Account/AccountScreen';
import AboutSociety from '../NavMenuScreens/AboutSociety/AboutSociety';
import ReportScreen from '../NavMenuScreens/Reports/ReportScreen';
import ManageEvents from '../NavMenuScreens/EventsNavScreens/ManageEventsScreen/ManageEvents';
import CreateEvents from '../NavMenuScreens/EventsNavScreens/CreateEventsScreen/CreateEvents';
import EventReports from '../NavMenuScreens/EventsNavScreens/EventsReportsScreen/EventReports';
import NewPaymentScreen from '../NavMenuScreens/Payments/NewPaymentScreen';
import '../../Styles/NavAndRouters.css';

const NavAndRouters = ({otherNavRouters}) => {
  return <>
      <div className="container-fluid main-con-nav m-0 p-0">
					<div className="row p-3 m-2">

							<div className="col col-md-4 d-inline p-0 m-0 d-inline-block navigation-styled">
									<SideNavBar/>
							</div>

							<div className="col p-3 ms-3 me-3 info-container">
							
									<div className="container-fluid info-con w-100 h-100 p-2">
                  <Switch>
                      {/* <Route path='/' element={<AddEventsScreen/>} exact="true"/> */}
                      <Route  path='/societyMembers'><SocietyMembersScreen/></Route>
                      <Route path='/reports' ><ReportScreen/></Route>
                      <Route  path='/about' ><AboutSociety/></Route>
                      <Route path='/account'><AccountScreen/></Route>
                      {/* <Route exact path='/' ><AddEventsScreen/></Route>
                      <Route path='/events' ><AddEventsScreen/></Route> */}
                      <Route path='/manage'><ManageEvents/></Route>
                      <Route path='/createEvents'><CreateEvents/></Route>
                      <Route path='/eventReports'><EventReports/></Route>
                      <Route path='/newPayments'><NewPaymentScreen/></Route>
                  </Switch>
									
									</div>
							
							</div>
					</div>
				</div>
  </>;
};

export default NavAndRouters;
