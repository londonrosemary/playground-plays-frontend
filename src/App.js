import React from 'react';
import { useState } from 'react';
import AppRoutes from './Routes.js';
import AppHeader from './Components/AppHeader/AppHeader.js';

import AuthenticatedApp from "./AuthenticatedApp.js"
import UnauthenticatedApp from './UnauthenticatedApp';

import {
  Routes,
  Route,
} from "react-router-dom";

import './App.css';


function App() {
// did this work?
const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem("user"))

// if (isLoggedIn === false) {
//   return(
//     <Routes>
//       <Route exact path="/" element={<UnauthenticatedApp />}/>
//     </Routes>
//   )}
// else {
//   return(
//     <Route>
//       <Route exact path="/" element={<AuthenticatedApp />}/>
//     </Route>
//   )}

  return (
    // <Layout>
   <div>
    
  {/* <Row gutter={[0, 32]}> */}
        {/* <Col span={24}> */}
          {/* <Header> */}
            <AppHeader />
          {/* </Header> */}
        {/* </Col> */}
        {/* <Col span={22} offset={1}> */}
          {/* <Content> */}
            <AppRoutes />
          {/* </Content> */}
        {/* </Col> */}
      {/* </Row> */}
    {/* </Layout> */}
    </div> 
  );
}





export default App;
