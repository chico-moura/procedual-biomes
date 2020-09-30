import React from 'react'
import './ExitButton.css'

interface ExitButtonProps {
    onClick: () => void
}

export default function ExitButton(props: ExitButtonProps) {
    return (
        <button onClick={props.onClick} className='exit-button'>
            x
        </button>
    )
}