import React, { useState } from 'react';
import './App.css';
import MainMenu from 'modules/main-menu'
import Game from 'modules/game'
import { SavedGameManager } from 'types'

export default function App()  {
  const [loadedGame, loadGame] = useState('')

  const savedGameManager: SavedGameManager = {
    load: (serializedGame: string) => {loadGame(serializedGame)},
    quit: () => {loadGame('')},
    get: () => loadedGame,
  }

  const main = () => loadedGame ? game : mainMenu

  const game = <Game savedGameManager={savedGameManager}/>
  const mainMenu = <MainMenu savedGameManager={savedGameManager}/>

  return (
    <div className='App'>
        {main()}
    </div>
  );
}

