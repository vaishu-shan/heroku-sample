import React from 'react';
import moment from 'moment';

class DateTime extends React.Component {
    // Format Date and Time with Moment, then manually increment
    state = {      
      startDate: moment().format('MM/DD/YYYY'),
      endDate: moment().add(7,'days').format('MM/DD/YYYY'),    
      startTime: moment().format('hh:mm a'),
      endTime: moment().add(7, 'hours').format('hh:mm: a'),
    }
  
    render() {let increment = 10;
        // Original System DATE and TIME
        let originalSystemDateTime = new Date(); 
        console.log(`Original System Time :: ${originalSystemDateTime}`);
        
        // Formatted System DATE
        let momentDateObj = moment(originalSystemDateTime, 'MM/DD/YYYY');
        let formattedDate = momentDateObj.format('MM/DD/YYYY');
          console.log(`Formatted Date :: ${formattedDate}`);
        
        // Formatted System TIME
        let momentTimeObj = moment(originalSystemDateTime, 'hh:mm a')
        let formattedTime = momentTimeObj.format('hh:mm a')
          console.log(`Formatted Time :: ${formattedTime}`);
        
      return (
        <React.Fragment>
          <div class="row">
            <div class="col-md-12 center-align mt-4 bold-500" style={{fontSize:"15px"}}><p>{formattedDate} {formattedTime}</p></div>
          </div>
                   
        
        </ React.Fragment>
      );
    }
  }
  
export default DateTime;