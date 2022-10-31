export type  BoardType = {
     
    name: 'top' | 'bottom'
        items: Array < ItemType >
}

export type ItemType = { id: number, content: string } 
