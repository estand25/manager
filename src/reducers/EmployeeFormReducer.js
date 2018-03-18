import {
  EMPLOYEE_UPDATE,
  EMPLOYEE_CREATE
} from '../actions/types';

const INITIAL_STATE = {
  name: '',
  phone: '',
  shift: ''
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EMPLOYEE_UPDATE:
      // action.payload === { props: 'name', value: 'jane' }
      return { ...state, [action.payload.props]: action.payload.value };
    case EMPLOYEE_CREATE:
      return { ...state, ...INITIAL_STATE };
    default:
      return state;
  }
};
