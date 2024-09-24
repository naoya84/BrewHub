export type ResistBeerContentType = {
    name: string
    comment: string
    store: string
    abv: number
    bitter: number
    deeply: number
    style: string
    country: string
    price: string
}

export const buildResistBeerContent = (): ResistBeerContentType => {
    return {
        name: '',
        comment: '',
        store: '',
        abv: 5.0,
        bitter: 5,
        deeply: 5,
        style: '',
        country: '',
        price: '',
    }
}

export type GetBeerType = {
    id: number
    name: string
    comment: string
    store: string
    abv: number
    bitter: number
    deeply: number
    style: string
    country: string
    price: string
    image: File
}