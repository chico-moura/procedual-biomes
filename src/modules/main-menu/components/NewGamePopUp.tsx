import React, { FormEvent, useState } from 'react'
import '../styles/NewSavePopUp.css'
import ExitButton from 'modules/shared/exit-button'
import newSaveErrors from '../newSaveErrors'
import gameRepo from 'gameRepo'

interface NewSavePopUpProps {
    hide: () => void,
    loadGame: (serializedGame: string) => void,
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
        } 
    }

    const validateName = (newSaveName: string) => {
        if (!newSaveName) {
            setErrorMsg(newSaveErrors.blankName)
        } else if (nameAlreadyExists(newSaveName)){
            setErrorMsg(newSaveErrors.nameTaken)
        } else {
            validName = true
        }
    }

    const createNewGame = () => {
        gameRepo.create(name)
        props.loadGame(name)
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

const nameAlreadyExists = (newSaveName: string) => {
    const existingNames = gameRepo.names()
    return existingNames.includes(newSaveName)
}