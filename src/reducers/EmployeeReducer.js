import _ from 'lodash';
import moment from 'moment';
import { EmployeeType } from '../actions/ActionTypes';

const DEFAULT_STATE = {
  currentEmployee: [{ identify: { hireDate: new Date(), company: '', eventReason: '' }, personalInformation: { biographicalInformation: { DOB: new Date(), CountryOfBirth: '', DateOfDeath: new Date() }, personalInformation: { DOB: new Date(), CountryOfBirth: '', DateOfDeath: new Date() } } }]
};

const modifyHireDate = (state, action) => {
  const newCurrentEmployeeState = [];
  Object.assign(newCurrentEmployeeState, state.currentEmployee.identify);
  newCurrentEmployeeState[0].hireDate = action.date;
  const newState = {};
  Object.assign(newState, state, { currentEmployee: newCurrentEmployeeState });
  return newState;
};

const getCurrentEmployee = (state) => {
  console.log('CURRENTSTATE');
  const newCurrentEmployeeState = [];
  Object.assign(newCurrentEmployeeState, state.currentEmployee);
  newCurrentEmployeeState[0].identify.hireDate = new Date();
  newCurrentEmployeeState[0].identify.company = '';
  newCurrentEmployeeState[0].identify.eventReason = '';
  newCurrentEmployeeState[0].personalInformation.biographicalInformation.DOB = new Date();
  newCurrentEmployeeState[0].personalInformation.biographicalInformation.CountryOfBirth = '';
  newCurrentEmployeeState[0].personalInformation.biographicalInformation.DateOfDeath = new Date();
  const newState = {};
  Object.assign(newState, state, { currentEmployee: newCurrentEmployeeState });
  return newState;
};

const setCompanyData = (state, action) => {
  const newCurrentEmployeeState = {};
   Object.assign(newCurrentEmployeeState, state.currentEmployee.identify);
  newCurrentEmployeeState[0].company = action.id;
  const newState = {};
  Object.assign(newState, state, { currentEmployee: newCurrentEmployeeState });
  return newState;
};

const setEventReasonData = (state, action) => {
  const newCurrentEmployeeState = {};
   Object.assign(newCurrentEmployeeState, state.currentEmployee.identify);
  newCurrentEmployeeState[0].eventReason = action.id;
  const newState = {};
  Object.assign(newState, state, { currentEmployee: newCurrentEmployeeState });
  return newState;
};

const modifyDOB = (state, action) => {
  const newCurrentEmployeeState = [];
  Object.assign(newCurrentEmployeeState, state.currentEmployee.personalInformation.biographicalInformation);
  newCurrentEmployeeState[0].DOB = action.date;
  const newState = {};
  Object.assign(newState, state, { currentEmployee: newCurrentEmployeeState });
  return newState;
};

const setCountryOfBirth = (state, action) => {
  const newCurrentEmployeeState = {};
   Object.assign(newCurrentEmployeeState, state.currentEmployee.personalInformation.biographicalInformation);
  newCurrentEmployeeState[0].CountryOfBirth = action.id;
  const newState = {};
  Object.assign(newState, state, { currentEmployee: newCurrentEmployeeState });
  return newState;
};

const modifyDateOfDeath = (state, action) => {
  const newCurrentEmployeeState = [];
  Object.assign(newCurrentEmployeeState, state.currentEmployee.personalInformation.biographicalInformation);
  newCurrentEmployeeState[0].DateOfDeath = action.date;
  const newState = {};
  Object.assign(newState, state, { currentEmployee: newCurrentEmployeeState });
  return newState;
};

const modifyCertificateStartDate = (state, action) => {
  const newCurrentEmployeeState = [];
  Object.assign(newCurrentEmployeeState, state.currentEmployee.personalInformation.personalInformation);
  newCurrentEmployeeState[0].CertificateStartDate = action.date;
  const newState = {};
  Object.assign(newState, state, { currentEmployee: newCurrentEmployeeState });
  return newState;
};

const modifyCertificateEndDate = (state, action) => {
  const newCurrentEmployeeState = [];
  Object.assign(newCurrentEmployeeState, state.currentEmployee.personalInformation.personalInformation);
  newCurrentEmployeeState[0].CertificateEndDate = action.date;
  const newState = {};
  Object.assign(newState, state, { currentEmployee: newCurrentEmployeeState });
  return newState;
};

export default function reducer(state = DEFAULT_STATE, action) {
  console.log('IS IN REDUCER ');
  switch (action.type) {
    case EmployeeType.MODIFY_HIRE_DATE:
      return modifyHireDate(state, action);

    case EmployeeType.GET_CURRENT_EMPLOYEE:
      return getCurrentEmployee(state);

    case EmployeeType.UPDATE_COMPANY_DATA:
      return setCompanyData(state);

    case EmployeeType.UPDATE_EVENT_REASON_DATA:
      return setEventReasonData(state);

    case EmployeeType.MODIFY_DOB:
      return modifyDOB(state, action);

    case EmployeeType.UPDATE_COUNTRY_OF_BIRTH:
      return setCountryOfBirth(state);

    case EmployeeType.MODIFY_DATEOFDEATH:
      return modifyDateOfDeath(state, action);

    case EmployeeType.MODIFY_CERTIFICATE_START_DATE:
      return modifyCertificateStartDate(state, action);

    case EmployeeType.MODIFY_CERTIFICATE_END_DATE:
      return modifyCertificateEndDate(state, action);

    default:
      return state;
  }
}
