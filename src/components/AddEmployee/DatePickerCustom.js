/**
 * Created by svs on 10/10/17.
 */
import React from 'react';

import moment from 'moment';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';


class DatePickerCustom extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props.targetName, 'RENDERING DATE TARGET');
    console.log(this.props.value, 'RENDERING DATE');
    const formattedDate = (this.props.value) ? moment(this.props.value).local().format('DD-MMM-YYYY') : '';
    this.state = {
      formattedDate
    };
  }

  modifyDate = (value) => {
    //this.state.target.value = value;
    this.props.onDayChange({
      target: {
        name: this.props.targetName,
        value: moment(value).format('DD-MMM-YYYY')
      }
    });
  };

  render() {
    return (
      <div>
        <DayPickerInput
          className="js-datepicker entry-input"
          placeholder="MM/DD/YYYY"
          onDayChange={this.modifyDate}
          value={this.state.formattedDate}
        />
      </div>
    );
  }

}

export default DatePickerCustom;
