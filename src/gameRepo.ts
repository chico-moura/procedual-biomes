enum Enum {
    savedGames = 'savedGames'
}

const addGameName = (newGameName: string) => {
    const gameNames = names()
    gameNames.push(newGameName)
    saveGameNames(gameNames)
}

const deleteGameName = (gameName: string) => {
    if (confirmDeletion(gameName)) {
        const gameNames = names()
        const index = gameNames.indexOf(gameName)
        gameNames.splice(index, 1)
        saveGameNames(gameNames)
    }
}
const confirmDeletion = (gameName: string) => window.confirm(`Delete ${gameName}?`)

const names = () => {
    const data = localStorage.getItem(Enum.savedGames)
    const gameNames: string[] =  data ? JSON.parse(data) : []
    return gameNames
}

const saveGameNames = (gameNames: string[]) => {
    const serialized = JSON.stringify(gameNames)
    localStorage.setItem(Enum.savedGames, serialized)
}

const gameRepo = {
    names,
    addGameName,
    deleteGameName,
}

export default gameRepo