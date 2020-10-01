import React from 'react'
import '../styles/LoadButtonRow.css'
import gameRepo from 'gameRepo'

interface LoadButtonRowProps {
    gameName: string 
    key: string
    refreshGameNames: () => void
    loadGame: (serializedGame: string) => void
}

export default function LoadButtonRow(props: LoadButtonRowProps) {
    const deleteGame = () => {
        gameRepo.delete(props.gameName)
        props.refreshGameNames()
    }

    const loadGame = () => {
        const game = gameRepo.get(props.gameName)!
        props.loadGame(game)
    }

    return (
        <div>
            
            <button 
                className='load-button'
                onClick={loadGame}>
                {props.gameName}
            </button>

            <button 
                className='erase' 
                onClick={deleteGame}>
                    x
            </button>
        </div>
    )
}