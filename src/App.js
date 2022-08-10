import logo from './logo.svg';
import './App.css';
import React from 'react';

import Nav from './components/stable/Nav';
import ClientsDisplay from './components/clients/ClientsDisplay';
import Footer from './components/stable/Footer';
import ClientUpdateForml from './components/clients/ClientUpdateForml';
import ClientInfo from './components/clients/ClientInfo';
//20 Routes element will ensure that only one component will render at us at the same time
//20 Route to create route element  and route has attribute for example path and component name that will called
//20 Router: we never we want to render we first go insude our browser router
import {BrowserRouter as  Router,Route,Routes } from 'react-router-dom';
import Card from './components/stable/Card';
import ClientAddForm from './components/clients/ClientAddForm';
const App=()=>{
return (
    <div className="App">
      <Router>
        <Nav/>
              <Card>             
                <Routes>
                      <Route  path="/users" exact element={<ClientsDisplay/>}/>      
                      <Route  path="/adduser" exact element={<ClientAddForm/>}/>      
                      <Route  path="/update-client/:id" exact element={<ClientUpdateForml/>}/>    
                      <Route  path="/display-client/:id" exact element={<ClientInfo/>}/>    
                </Routes> 
              </Card>
        <Footer/>
      </Router>
    </div>
  );
}
  


export default App;
