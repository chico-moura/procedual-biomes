import React, { FormEvent, useState } from 'react'
import '../styles/NewSavePopUp.css'
import ExitButton from 'modules/shared/exit-button'
import newSaveErrors from '../newSaveErrors'
import { SavedGameManager, PopUpManager } from 'types'
import gameRepo from 'gameRepo'

interface NewSavePopUpProps {
    hide: () => void,
    savedGameManager: SavedGameManager
}

export default function NewGamePopUp(props: NewSavePopUpProps) {
    const [name, setName] = useState('')
    const [errorMsg, setErrorMsg] = useState('')
    let validName = false

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        validateName(name)
        if (validName) { 
            createNewGame()
        } else {}
    }

    const validateName = (newSaveName: string) => {
        if (!newSaveName) {
            setErrorMsg(newSaveErrors.blankName)
        } else {
            validName = true
        }
    }

    const createNewGame = () => {
        gameRepo.addGameName(name)
        props.hide()
    }

    return (
        <div className='new-save pop-up'>
            <form onSubmit={handleSubmit}>
                <label>
                    Name your save
                    <p className='error-message'>{errorMsg}</p>
                    <input 
                        type='text' 
                        value={name} 
                        maxLength={22}
                        onChange={e => setName(e.target.value)}/>
                </label>

                <button 
                    type='submit' 
                    value='Submit' 
                    className='create-button'>
                    Create
                </button>
            </form>
            <ExitButton onClick={props.hide}/>
        </div>
    )
}
