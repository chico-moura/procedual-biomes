import React, { useState } from 'react'
import '../styles/MainMenu.css'
import NewGamePopUp from './NewGamePopUp'
import LoadGamePopUp from './LoadGamePopUp'
import gameRepo from 'gameRepo'

interface MainMenuProps {
    loadGame: (serializedGame: string) => void 
}

export default function MainMenu(props: MainMenuProps){
    const [newGamePopUpVisible, setNewGamePopIpVisible] = useState(false)
    const [loadGamePopUpVisible, setLoadGamePopUpVisible] = useState(false)

    const newGamePopUpManager = newPopUpManager(setNewGamePopIpVisible)
    const loadGamePopUpManager = newPopUpManager(setLoadGamePopUpVisible)

    const newGameButton = () => 
        <button className='main-button' onClick={newGamePopUpManager.show}>
            New
        </button>

    const loadGameButton = () => {
        if (gameRepo.savedGamesExist()) {
            return <button 
                className='main-button' 
                onClick={loadGamePopUpManager.show}>
                Load
            </button>
        }
    }

    const newGamePopup = () => {
        if (newGamePopUpVisible) {
            return <NewGamePopUp 
                hide={newGamePopUpManager.hide} 
                loadGame={props.loadGame}/>
        }
    }

    const loadGamePopUp = () => {
        if (loadGamePopUpVisible) {
            return <LoadGamePopUp 
                hide={loadGamePopUpManager.hide}
                loadGame={props.loadGame}/>
        }
    }

    return (
        <div className='main-menu'>
            <h1>
                Procedual Biomes
            </h1>

            {newGameButton()}
            {loadGameButton()}

            {newGamePopup()}
            {loadGamePopUp()}
        </div>
    )
}

const newPopUpManager = (setter: Function) => {
    return {
        show: () => setter(true),
        hide: () => setter(false),
    }
}
