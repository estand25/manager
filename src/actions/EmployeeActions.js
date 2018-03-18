import firebase from 'firebase';
import { EMPLOYEE_UPDATE } from './types';

export const employeeUpdate = ({ props, value }) => ({
  type: EMPLOYEE_UPDATE,
  payload: { props, value }
});

export const employeeCreate = ({ name, phone, shift }) => {
  console.log('employeeCreate');
  const { currentUser } = firebase.auth();

  firebase.database().ref(`/users/${currentUser.uid}/employees`)
    .push({ name, phone, shift });
};
