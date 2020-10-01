import React, { useState } from 'react'
import '../styles/MainMenu.css'
import NewGamePopUp from './NewGamePopUp'
import LoadGamePopUp from './LoadGamePopUp'
import { SavedGameManager } from 'types'
import gameRepo from 'gameRepo'

interface MainMenuProps {
    savedGameManager: SavedGameManager
}

export default function MainMenu(props: MainMenuProps){
    const [newGamePopUpVisible, setNewGamePopIpVisible] = useState(false)
    const [loadGamePopUpVisible, setLoadGamePopUpVisible] = useState(false)

    const newGamePopUpManager = newPopUpManager(setNewGamePopIpVisible)
    const loadGamePopUpManager = newPopUpManager(setLoadGamePopUpVisible)

    const newGamePopup = () => {
        if (newGamePopUpVisible) {
            return <NewGamePopUp 
                hide={newGamePopUpManager.hide} 
                savedGameManager={props.savedGameManager}/>
        }
    }

    const loadGamePopUp = () => {
        if (loadGamePopUpVisible) {
            return <LoadGamePopUp hide={loadGamePopUpManager.hide}/>
        }
    }

    const loadGameButton = () => {
        if (gameRepo.savedGamesExist()) {
            return <button 
                className='main-button' 
                onClick={loadGamePopUpManager.show}>
                Load
            </button>
        }
    }

    return (
        <div className='main-menu'>
            <h1>
                Procedual Biomes
            </h1>

            <button className='main-button' onClick={newGamePopUpManager.show}>
                New
            </button>

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
