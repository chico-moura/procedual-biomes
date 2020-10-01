import React from 'react'
import '../styles/LoadButtonRow.css'
import gameRepo from 'gameRepo'

interface LoadButtonRowProps {
    gameName: string 
    key: string
    resetGameNames: () => void
}

export default function LoadButtonRow(props: LoadButtonRowProps) {
    const deleteGame = () => {
        gameRepo.deleteGame(props.gameName)
        props.resetGameNames()
    }

    return (
        <div>
            
            <button className='load-button'>
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