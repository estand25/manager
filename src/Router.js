import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import EmplyeeCreate from './components/EmployeeCreate';

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
          onRight={() => { Actions.emplyeeCreate(null); }}
          key="employeeList"
          component={EmployeeList}
          titleStyle={{ alignSelf: 'center' }}
          title="Employees"
          initial
        />
        <Scene
          key="emplyeeCreate"
          component={EmplyeeCreate}
          title="Create Employee"
          titleStyle={{ alignSelf: 'center' }}
        />
    </Scene>
  </Scene>
  </Router>
);

export default RouterComponent;
