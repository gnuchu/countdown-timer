import React, { useEffect, useState } from 'react';
import './App.css';

const targetDate = new Date("2021-04-26T12:00:00Z");

function App() {
  const [daysCount, setDaysCount] = useState(0);
  const [hoursCount, setHoursCount] = useState(0);
  const [minutesCount, setMinutesCount] = useState(0);
  const [secondsCount, setSecondsCount] = useState(0);

  useEffect( () => {
    const daysCounter = setInterval(() => {
      
      var dateDifferenceInSeconds = (targetDate - Date.now()) / (1000);
      const aDayInSeconds = (24*60*60)
      
      var daysFloat = dateDifferenceInSeconds/aDayInSeconds;
      var days = Math.floor(daysFloat);
      
      var hoursPercentage = daysFloat - days;
      var hours = Math.floor(hoursPercentage * 24);
      
      var minutesPercentage = (hoursPercentage * 24) - hours;
      var minutes=Math.floor(minutesPercentage*60);

      var secondsPercentage = (minutesPercentage*60) - minutes;
      var seconds=Math.floor(secondsPercentage*60);

      setDaysCount(days);
      setHoursCount(hours);
      setMinutesCount(minutes);
      setSecondsCount(seconds);
    }, 1000);

    return () => clearInterval(daysCounter);

  }, [daysCount, hoursCount, minutesCount, secondsCount])

  return (
    <div>
      <div className="row">
        <div className="large">🏴󠁧󠁢󠁳󠁣󠁴󠁿</div>
        <div className="large">🍻</div>
        <div className="large">🎉</div>
      </div>
      <div className="row">
        <div className="col large">{daysCount}</div>
        <div className="col large">{hoursCount}</div>
        <div className="col large">{minutesCount}</div>
        <div className="col large">{secondsCount}</div>
      </div>
      <div className="row">
        <div className="col medium">DAYS</div>
        <div className="col medium">HOURS</div>
        <div className="col medium">MINUTES</div>
        <div className="col medium">SECONDS</div>
      </div>
    </div>
  )
}

export default App;
