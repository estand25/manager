import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';

const RouterComponent = () => (
  <Router>
    <Scene key="root" hideNavBar >
      <Scene key="auth">
        <Scene
          key="login"
          component={LoginForm}
          title="Please Login"
          titleStyle={{ alignSelf: 'center' }}
          initial
        />
      </Scene>
      <Scene key="main">
        <Scene
          rightTitle="Add"
          onRight={() => { console.log('right!!'); }}
          key="employeeList"
          component={EmployeeList}
          titleStyle={{ alignSelf: 'center' }}
          title="Employees"
        />
    </Scene>
  </Scene>
  </Router>
);

export default RouterComponent;
