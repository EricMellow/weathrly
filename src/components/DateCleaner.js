import React from 'react';

const DateCleaner = (date) => {
  const dateArray = date.split(" ");

  dateArray.splice(3, 3);
  const day = dateArray.splice(1, 1);

  dateArray.push(day[0]);

  switch (dateArray[0]) {
  case 'Mon,': 
    dateArray[0] = 'Monday, ';
    break;
  case 'Tues,':
    dateArray[0] = 'Tuesday, ';
    break;
  case 'Wed,':
    dateArray[0] = 'Wednesday, ';
    break;
  case 'Thurs,':
    dateArray[0] = 'Thursday, ';
    break;
  case 'Fri,':
    dateArray[0] = 'Friday, ';
    break;
  case 'Sat,':
    dateArray[0] = 'Saturday, ';
    break;
  case 'Sun,':
    dateArray[0] = 'Sunday, ';
    break;
  }

  switch (dateArray[1]) {
  case 'Jan': 
    dateArray[1] = 'January';
    break;
  case 'Feb':
    dateArray[1] = 'February';
    break;
  case 'Mar':
    dateArray[1] = 'March';
    break;
  case 'Apr':
    dateArray[1] = 'April';
    break;
  case 'May':
    dateArray[1] = 'May';
    break;
  case 'Jun':
    dateArray[1] = 'June';
    break;
  case 'Jul': 
    dateArray[1] = 'July';
    break;
  case 'Aug':
    dateArray[1] = 'August';
    break;
  case 'Sept':
    dateArray[1] = 'September';
    break;
  case 'Oct':
    dateArray[1] = 'October';
    break;
  case 'Nov':
    dateArray[1] = 'November';
    break;
  case 'Dec':
    dateArray[1] = 'December';
    break;
  }

  switch (dateArray[2]) {
  case '1':
    dateArray[2] += 'st';
    break;
  case '2':
    dateArray[2] += 'nd';
    break;
  case '3':
    dateArray[2] += 'rd';
    break;  
  case '21':
    dateArray[2] += 'st';
    break;
  case '22':
    dateArray[2] += 'nd';
    break;
  case '23':
    dateArray[2] += 'rd';
    break;
  case '31':
    dateArray[2] += 'st';
    break;
  default:
    dateArray[2] += 'th';
    break;
  }

  const newDate = dateArray.join("  ");

  return newDate;
};

export default DateCleaner;