import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './app/components/Header';
import SideBar from './app/components/SideBar';
import Chat from './app/components/Chat';
import Login from './app/components/Login';
import styled from 'styled-components';
import { auth } from './firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import Spinner from "react-spinkit";

import './App.css';

function App() {
  const [user, loading] = useAuthState(auth);
  console.log(loading);
  if (loading) {
    return (
      <AppLoading>
        <AppLoadingContents>
          <img 
            src="https://cdn.mos.cms.futurecdn.net/SDDw7CnuoUGax6x9mT07dd.jpg" 
            alt=""
          />
          <Spinner 
            name="ball-spin-fade-loader"
            color="purple"
            fadeIn="none"
          />
        </AppLoadingContents>
      </AppLoading>
    )
  }
  return (
    <div className="App">
      <Router>
        {!user? (
          <Login />
        ) : (
          <>
            <Header />  
            <AppBody>
              <SideBar />
              <Switch>
                <Route path="/">    
                  <Chat />    
                </Route>
              </Switch>
            </AppBody>
          </>
        )}
      </Router>
    </div>
  );
}

export default App;

const AppBody = styled.div `
  display: flex;
  height: 100vh;
`;

const AppLoading = styled.div `
  display: grid;
  place-items: center;
  height: 100vh;
  width: 100%
`;

const AppLoadingContents = styled.div `
  text-align: center;
  padding-bottom: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  > img {
    height: 100px;
    padding: 20px;
    margin-bottom: 40px;
  }
`;