export type SavedGameManager = {
    load: (serializedGame: string) => void
    quit: () => void
    get: () => string
}

export type PopUpManager = {
    show: () => void
    hide: () => void
}