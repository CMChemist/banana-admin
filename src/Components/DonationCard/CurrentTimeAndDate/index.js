import React, { useState, useEffect} from 'react';

function CurrentTimeAndDate() {
  const [clockText, setClockText] = useState('');
  const monthArray = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  const getClock = () => {
    const d = new Date();
    const month = d.getMonth();
    const date = d.getDate();
    const year = d.getFullYear();

    let hour = d.getHours();
    let min = d.getMinutes();
    let sec = d.getSeconds();
    let ap;

    if (hour === 0) {
      ap = ' am'; hour = 12;
    } else if (hour < 12) {
      ap = ' am';
    } else if (hour === 12) {
      ap = ' pm';
    } else if (hour > 12) {
      ap = ' pm';
      hour -= 12;
    }

    if (min <= 9) min = '0' + min;
    if (sec <= 9) sec = '0' + sec;

    const timeAndDate = '' + hour + ':' + min + ':' + ap + ' ' + monthArray[month] + ' ' + date + ', ' + year;
    setClockText(timeAndDate);
  };

  useEffect(() => {
    setInterval(() => getClock(), 1000);
  });

  return (
    <div>
      {clockText}
    </div>
  );
}

export default CurrentTimeAndDate;
