import React, {useState} from 'react'
import '../styles/LoadGamePopUp.css'
import ExitButton from 'modules/shared/exit-button'
import gameRepo from 'gameRepo'
import LoadButtonRow from './LoadButtonRow'


interface LoadGamePopUpProps {
    hide: () => void
    loadGame: (serializedGame: string) => void
}


export default function LoadGamePopUp(props: LoadGamePopUpProps) {
    const [gamesNames, setGamesNames] = useState(gameRepo.names())
    const refreshGameNames = () => setGamesNames(gameRepo.names())

    const loadButtonRow = () =>
        gamesNames.map(gameName => 
            <LoadButtonRow 
                gameName={gameName}
                key={gameName}
                refreshGameNames={refreshGameNames}
                loadGame={props.loadGame}/>
        )

    if (!gameRepo.savedGamesExist()) {
        props.hide()
    }

    return (
        <div className='pop-up'>
            <div>Load game</div>
            <div className='saves-container'>
                {loadButtonRow()}
            </div>
            <ExitButton onClick={props.hide}/>
        </div>
    )
}




