import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import EmployeeCreate from './components/EmployeeCreate';
import EmployeeEdit from './components/EmployeeEdit';

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
          onRight={() => { Actions.employeeCreate(null); }}
          key="employeeList"
          component={EmployeeList}
          titleStyle={{ alignSelf: 'center' }}
          title="Employees"
          initial
        />
        <Scene
          key="employeeCreate"
          component={EmployeeCreate}
          title="Create Employee"
          titleStyle={{ alignSelf: 'center' }}
        />
        <Scene
          key="employeeEdit"
          component={EmployeeEdit}
          title="Edit Employee"
          titleStyle={{ alignSelf: 'center' }}
        />
    </Scene>
  </Scene>
  </Router>
);

export default RouterComponent;
