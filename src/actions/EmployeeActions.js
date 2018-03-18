import { EMPLOYEE_UPDATE } from './types';

export const employeeUpdate = ({ props, value }) => ({
  type: EMPLOYEE_UPDATE,
  payload: { props, value }
});

export const employeeCreate = ({ name, phone, shift }) => {
  console.log('employeeCreate');
  console.log(name, phone, shift);
};
