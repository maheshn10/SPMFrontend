
import { EmployeeType } from '../actions/ActionType';

const DEFAULT_STATE = {
  currentEmployee: [
    { identify: {
      hireDate: new Date(),
      company: '',
      eventReason: ''
    },
      personalInformation: {
        biographicalInformation: {
          DOB: new Date(),
          CountryOfBirth: '',
          DateOfDeath: new Date()
        },
        personalInformation: {
          personalInformation: {
            DOB: new Date(),
            CountryOfBirth: '',
            DateOfDeath: new Date(),
            firstName: '',
            middleName: '',
            lastName: '',
            suffix: '',
            displayName: '',
            formalName: '',
            title: '',
            birthName: '',
            initials: '',
            prefix: '',
            gender: '',
            maritalStatus: '',
            maritalStatusSinceDate: new Date(),
            secondNationality: '',
            thirdNationality: '',
            preferredLanguage: '',
            challengeStatus: ''
          },
          countrySpecificFields: {
            us: {
              ethnicGroup: '',
              veteran: '',
              challengedVeteran: ''
            }
          }

        },
        nationalIdInformation: {
          country1: {
            country: '',
            nationalIdCardType: '',
            nationalId: '',
            isPrimary: 'no'
          },
          country2: {
            country: '',
            nationalIdCardType: '',
            nationalId: '',
            isPrimary: 'no'
          }
        },
        addressInformation: {
          homeAddress: {
            addressType: '',
            country: '',
            line1: '',
            line2: '',
            city: '',
            state: '',
            zip: ''
          },
          mailingAddress: {
            addressType: '',
            country: '',
            line1: '',
            line2: '',
            city: '',
            state: '',
            zip: ''
          }
        },
        workPermitInformation: {
          permit1: {
            country: '',
            documentType: '',
            documentTitle: '',
            documentNumber: '',
            issueDate: '',
            issuePlace: '',
            issuingAuthority: '',
            expirationDate: '',
            validated: '',
            attachments: ''
          }
        },
        contactInformation: {
          emailInformation: {
            emailType: '',
            emailAddress: '',
            isPrimary: ''
          },
          phoneInformation: {
            phoneType: '',
            number: '',
            extension: '',
            isPrimary: ''
          }
        }

      },
      jobInformation: {
        employmentDetail: {
          keyJobAttribute: {
            jobCode: '',
            position: ''
          },
          organizationalInformation: {
            company: '',
            businessUnit: '',
            division: '',
            department: '',
            location: '',
            timeZone: '',
            costCenter: ''
          },
          jobInformation: {
            employmentStatus: '',
            supervisor: '',
            jobClassification: '',
            jobTitle: '',
            localJobTitle: '',
            payGrade: '',
            regularOrTemporary: '',
            standardWeeklyHours: '',
            fte: ''
          },
          timeInformation: {
            holidayCalendar: '',
            workSchedule: '',
            timeProfile: ''
          },
          countrySpecificFields: {
            us: {
              isFullTime: '',
              notes: '',
              employeeClass: '',
              flsaStatus: '',
              isShiftEmployee: '',
              shiftCode: '',
              shiftRate: '',
              shiftPercent: '',
              isCrossBorderWorker: '',
              eeoJobGroup: '',
              contractType: '',
              continuedSicknessPayPeriod: '',
              continuedSicknessPayMeasure: '',
              noticePeriod: '',
              initialEntry: '',
              entryIntoGroup: '',
              corporation: '',
              eeoCategory1: '',
              eeoCategory2: '',
              eeoCategory3: '',
              eeoCategory4: '',
              eeoCategory5: '',
              eeoCategory6: ''
            }
          }
        },
        jobRelationships: {
          globalFields: {
            relationshipType: '',
            name: ''
          }
        },
        employmentDetails: {
          globalFields: {
            hireDate: '',
            originalStartDate: '',
            seniorityStartDate: '',
            serviceDate: '',
            professionalServiceDate: '',
            retireDate: ''
          }
        }
      },
      compensationInformation: {
        compensationInformation: {
          compensationGroup: {
            payType: '',
            payGroup: '',
            isEligibleForBenefit: '',
            isEligibleForCar: '',
            benefitRate: '',
            compaRatio: '',
            rangePenetration: '',
            annualizedSalary: '',
            teo: ''
          },
          compensation: {
            payComponent: '',
            amount: '',
            currency: '',
            frequency: ''
          }
        },
        oneTimePayment: {
          oneTimePayment: {
            payComponent: '',
            amount: '',
            currency: '',
            paymentDate: ''
          }
        },
        recurringPayment: {
          recurringPayment: {
            payComponent: '',
            amount: '',
            currency: '',
            startDate: '',
            endDate: ''
          }
        }
      }
    }
  ]
};

const modifyHireDate = (state, action) => {
  const newCurrentEmployeeState = [];
  Object.assign(newCurrentEmployeeState, state.currentEmployee);
  newCurrentEmployeeState[0].identify.hireDate = action.date;
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
  Object.assign(newCurrentEmployeeState, state.currentEmployee);
  newCurrentEmployeeState[0].personalInformation.biographicalInformation.DOB = action.date;
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
  Object.assign(newCurrentEmployeeState, state.currentEmployee);
  newCurrentEmployeeState[0].personalInformation.biographicalInformation.DateOfDeath = action.date;
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

const updateData = (state, action) => {
  console.log('updating employee data');
  console.log(action);

  const newCurrentEmployeeState = [];
  Object.assign(newCurrentEmployeeState, state.currentEmployee);
  const fieldArr = action.data.field.split('.');
  const step = fieldArr[0];
  const section = fieldArr[1];
  const subSection = fieldArr[2];
  const field = fieldArr[3];
  if (subSection === 'countrySpecificFields') {
    const country = field;
    const countryField = fieldArr[4];
    newCurrentEmployeeState[0][step][section][subSection][country][countryField] = action.data.value;
  } else {
    newCurrentEmployeeState[0][step][section][subSection][field] = action.data.value;
  }

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

    case EmployeeType.UPDATE_EMPLOYEE_DATA:
      return updateData(state, action);

    default:
      return state;
  }
}
