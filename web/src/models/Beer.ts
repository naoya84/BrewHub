export type ResistBeerContentType = {
    name: string
    manufacturer: string
    abv: number
    ibu: number
    review: number
    comment: string
}

export const buildResistBeerContent = (): ResistBeerContentType => {
    return {
        name: '',
        manufacturer: '',
        abv: 5,
        ibu: 5,
        review: 0,
        comment: ''
    }
}

export type GetBeerContentType = {
    id: number
    name: string
    manufacturer: string
    abv: number
    ibu: number
    review: number
    comment: string
    // image: File
}