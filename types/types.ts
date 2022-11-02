export type  BoardType = {
    name: 'top' | 'bottom'
        items: Array < ItemType >
}

export type ItemType = { id: number, content: string } 

export type GameModeType = 'high' | 'low' 





export type GameDataType = {
    mainParams: {
        quantity: number | null
        valuesRange: number | null
        order: 'high' | 'low' | null
    } // параметры введенные при начале игры
    gameValues: Array<string> | null // рандомно расставленные игровые значения
    gameProgress: Array<string> | null // игровой прогресс: последняя сохраненная расстановка фишек
}