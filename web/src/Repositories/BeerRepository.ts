import NetworkHttp, {Http} from "../Https/NetworkHttp.ts";
import {GetBeerType, ResistBeerContentType} from "../models/Beer.ts";

export interface BeerRepository {
    post(formContent: ResistBeerContentType, imageFile: File | null): Promise<string>
    get(): Promise<Array<GetBeerType>>
    getById(): Promise<Array<GetBeerType>>
}

export class BeerRepositoryImpl implements BeerRepository {
    http: Http

    constructor(http: Http = new NetworkHttp()) {
        this.http = http
    }

    post(formContent: ResistBeerContentType, imageFile: File | null): Promise<string> {
        const formData = new FormData()
        formData.append("form", JSON.stringify(formContent))
        if (imageFile !== null) {
            formData.append("image", imageFile)
        }

        this.http.post("api/beer", formData)
        return Promise.resolve("")
    }

    get(): Promise<Array<GetBeerType>> {
        return this.http.get("api/beer")
    }

    getById(): Promise<Array<GetBeerType>> {
        return this.http.get("api/beer")
    }
}