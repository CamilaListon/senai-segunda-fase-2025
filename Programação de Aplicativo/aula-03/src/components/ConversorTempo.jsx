import { useState } from 'react'
import './ConversorTempo.css'

const TimeConverter = () => {
  const [hours, setHours] = useState('');
  const [minutes, setMinutes] = useState('');
  const [seconds, setSeconds] = useState('');

  const convertHours = (hours) => {
    const totalMinutes = hours * 60;
    const totalSeconds = totalMinutes * 60;
    setMinutes(totalMinutes);
    setSeconds(totalSeconds);
  };

  const convertMinutes = (minutes) => {
    const totalHours = minutes / 60;
    const totalSeconds = minutes * 60;
    setHours(totalHours);
    setSeconds(totalSeconds);
  };

  const convertSeconds = (seconds) => {
    const totalHours = seconds / 3600;
    const totalMinutes = (seconds % 3600) / 60;
    setHours(totalHours);
    setMinutes(totalMinutes);
  };

  return (
    <div className="container-conversor-tempo">
      <h2>Conversor de Tempo</h2>

      <div>
        <label>Horas:</label>
        <input
          type="number"
          value={hours}
          onChange={(e) => {
            const value = e.target.value;
            setHours(value);
            if (value) convertHours(value);
            else {
              setMinutes('');
              setSeconds('');
            }
          }}
        />
      </div>

      <div>
        <label>Minutos:</label>
        <input
          type="number"
          value={minutes}
          onChange={(e) => {
            const value = e.target.value;
            setMinutes(value);
            if (value) convertMinutes(value);
            else {
              setHours('');
              setSeconds('');
            }
          }}
        />
      </div>

      <div>
        <label>Segundos:</label>
        <input
          type="number"
          value={seconds}
          onChange={(e) => {
            const value = e.target.value;
            setSeconds(value);
            if (value) convertSeconds(value);
            else {
              setHours('');
              setMinutes('');
            }
          }}
        />
      </div>
    </div>
  );
};

export default TimeConverter;
