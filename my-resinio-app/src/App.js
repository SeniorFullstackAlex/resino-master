import React, { Component } from 'react';
import { Button, Box, Navbar, Provider, Link, Brand, Flex, DropDownButton, Txt } from 'rendition';
import logo from './logo.svg';
import './App.css';
import Time from 'react-time';
import Dashboard from './components/Dashboard';

class App extends Component {

  render() {
    let now = new Date()
    return (
      <Provider>
        <Box m={3}>
        <Flex>
          <Txt.span align='left' color='white'>
              <Time value={now} format="dddd D MMMM, YYYY" />
          </Txt.span>
          <Txt.span align='left' color='white'>
              <Time value={now} format="hh:mm A" />
          </Txt.span>
          <DropDownButton mx={2} tertiary label={<div>Name Surname NS</div>}>
              <Link href={'/docs/'}>
                Docs
              </Link>
              <Link href={'/changelog/'}>
                changelog
              </Link>
              <Link href={'/gitter/'}>
                gitter
              </Link>
          </DropDownButton>
        </Flex>
        </Box>
         <Dashboard/>
      </Provider>

    );
  }
}

export default App;
