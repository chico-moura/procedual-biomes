enum Enum {
    savedGames = 'savedGames'
}

const names = () => {
    const data = localStorage.getItem(Enum.savedGames)
    const gameNames: string[] =  data ? JSON.parse(data) : []
    return gameNames
}

const create = (newGameName: string) => {
    const game = newGameTemplate()
    saveGame(newGameName, game)
    saveGameName(newGameName)
}

const newGameTemplate = () => {
    return {
        created: new Date(Date.now()).toLocaleString()
    }
}

const saveGame = (name: string, game: object) => {
    const data = JSON.stringify(game)
    localStorage.setItem(name, data)
}

const saveGameName = (newGameName: string) => {
    const gameNames = names()
    gameNames.push(newGameName)
    saveGameNames(gameNames)
}

const delete_ = (gameName: string) => {
    localStorage.removeItem(gameName)
    deleteGameName(gameName)
}

const deleteGameName = (gameName: string) => {
    if (confirmDeletion(gameName)) {
        const gameNames = names()
        const index = gameNames.indexOf(gameName)
        gameNames.splice(index, 1)
        saveGameNames(gameNames)
    }
}

const get = (gameName: string) => localStorage.getItem(gameName)

const confirmDeletion = (gameName: string) => window.confirm(`Delete ${gameName}?`)

const saveGameNames = (gameNames: string[]) => {
    const serialized = JSON.stringify(gameNames)
    localStorage.setItem(Enum.savedGames, serialized)
}

const savedGamesExist = () => names().length > 0

const gameRepo = {
    names,
    create,
    delete: delete_,
    get,
    savedGamesExist,
}

export default gameRepo