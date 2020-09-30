import React from 'react'
import './Game.css'
import { SavedGameManager } from 'types'


interface GameProps {
    savedGameManager: SavedGameManager
}


export default function Game(props: GameProps){
    return (
        <div>
            <button onClick={props.savedGameManager.quit}>Quit</button>
        </div>
    )
}