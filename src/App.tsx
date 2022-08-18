import React from 'react';
import './App.css';
import Board from './components/Board';
import FormNames from './components/Forms/FormNames';
import FormWinner from './components/Forms/FormWinner';
import Header from './components/Header';
import Modal from './components/Modal';
import Scoreboard from './components/Scoreboard';

function App() {
  return (<>
    <Header />
    <main className='main'>
      <Scoreboard />
      <Board size={5} />
    </main>
    <Modal>
      {/* <FormNames /> */}
      <FormWinner playerName='Алексей'/>
    </Modal>
  </>
  );
}

export default App;
