import React, { Component } from 'react';

import './App.scss';
import { TestDashboard } from './components/TestDashboard/TestDashboard';

export default class App extends React.Component {
  render(){
      return <TestDashboard></TestDashboard>
  }
}