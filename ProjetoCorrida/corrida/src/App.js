import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [participants, setParticipants] = useState([
    { id: 1, name: '', time: 0, running: false },
    { id: 2, name: '', time: 0, running: false },
  ]);

  const startTimer = (id) => {
    setParticipants((prevParticipants) =>
      prevParticipants.map((participant) =>
        participant.id === id
          ? { ...participant, running: true, startTime: Date.now() }
          : participant
      )
    );
  };

  const stopTimer = (id) => {
    setParticipants((prevParticipants) =>
      prevParticipants.map((participant) => {
        if (participant.id === id && participant.running) {
          const currentTime = Date.now();
          const elapsedTime = (currentTime - participant.startTime) / 1000;
          return {
            ...participant,
            running: false,
            time: elapsedTime,
          };
        }
        return participant;
      })
    );
  };

  return (
    <div className="App">
      <h1>Aplicativo de Cronometragem de Corrida em React</h1>
      {participants.map((participant) => (
        <div className="participant" key={participant.id}>
          <label>Participante {participant.id}:</label>
          <input
            type="text"
            placeholder="Nome"
            onChange={(e) =>
              setParticipants((prevParticipants) =>
                prevParticipants.map((p) =>
                  p.id === participant.id
                    ? { ...p, name: e.target.value }
                    : p
                )
              )
            }
          />
          <button onClick={() => startTimer(participant.id)}>Iniciar</button>
          <button onClick={() => stopTimer(participant.id)}>Parar</button>
          <span className="time">Tempo: {participant.time.toFixed(2)}s</span>
        </div>
      ))}
    </div>
  );
}

export default App;
