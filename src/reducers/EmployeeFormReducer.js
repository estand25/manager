import {
  EMPLOYEE_UPDATE,
  EMPLOYEE_CREATE,
  EMPLOYEES_FETCH_SUCCESS
} from '../actions/types';

const INITIAL_STATE = {
  name: '',
  phone: '',
  shift: ''
};

export default (state = INITIAL_STATE, action) => {
  console.log(action);

  switch (action.type) {
    case EMPLOYEE_UPDATE:
      // action.payload === { props: 'name', value: 'jane' }
      return { ...state, [action.payload.props]: action.payload.value };
    case EMPLOYEE_CREATE:
    default:
      return state;
  }
};
