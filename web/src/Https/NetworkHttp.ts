import {GetBeerType, ResistBeerContentType} from "../models/Beer.ts";

export interface Http {
    post(url: string, formContents: ResistBeerContentType, imageFile: File | null): Promise<string>
    get(url: string): Promise<Array<GetBeerType>>
}

export default class NetworkHttp implements Http {
    post(url: string, formContents: ResistBeerContentType, imageFile: File | null): Promise<string> {
        const formData = new FormData()
        formData.append("form", JSON.stringify(formContents))
        if (imageFile !== null) {
            formData.append("image", imageFile)
        }

        // fetch___then__

        return Promise.resolve("")
    }

    get(url: string): Promise<Array<GetBeerType>> {
        return Promise.resolve([
            {
                id: 1,
                name: "mya-brew1",
                comment: "some string",
                store: "Aショップ",
                abv: 5.5,
                bitter: 4,
                deeply: 6,
                style: "IPA",
                country: "スコットランド",
                price: "800",
                image: {} as File,
            },
            // {
            //     id: 2,
            //     name: "mya-brew2",
            //     comment: "some string",
            //     store: "some string",
            //     abv: 5.5,
            //     bitter: 4,
            //     deeply: 4,
            //     style: "some string",
            //     country: "some string",
            //     price: "some string",
            //     image: {} as File,
            // },
            // {
            //     id: 3,
            //     name: "mya-brew3",
            //     comment: "some string",
            //     store: "some string",
            //     abv: 5.5,
            //     bitter: 4,
            //     deeply: 4,
            //     style: "some string",
            //     country: "some string",
            //     price: "some string",
            //     image: {} as File,
            // },
            // {
            //     id: 4,
            //     name: "mya-brew4",
            //     comment: "some string",
            //     store: "some string",
            //     abv: 5.5,
            //     bitter: 4,
            //     deeply: 4,
            //     style: "some string",
            //     country: "some string",
            //     price: "some string",
            //     image: {} as File,
            // },
        ]);
    }
}