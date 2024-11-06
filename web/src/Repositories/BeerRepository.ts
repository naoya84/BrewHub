import NetworkHttp, {Http} from "../Https/NetworkHttp.ts";
import {GetBeerContentType, ResistBeerContentType} from "../models/Beer.ts";

export interface BeerRepository {
    post(formContent: ResistBeerContentType, imageFile: File): Promise<string>
    get(): Promise<Array<GetBeerContentType>>
}

export class BeerRepositoryImpl implements BeerRepository {
    http: Http

    constructor(http: Http = new NetworkHttp()) {
        this.http = http
    }

    post(formContent: ResistBeerContentType, imageFile: File): Promise<string> {
        const formData = new FormData()
        formData.append("name", formContent.name)
        formData.append("manufacturer", formContent.manufacturer)
        formData.append("abv", formContent.abv.toString())
        formData.append("ibu", formContent.ibu.toString())
        formData.append("review", formContent.review.toString())
        formData.append("comment", formContent.comment)
        console.log(imageFile)
        // formData.append("image", imageFile)
        return this.http.post("api/beer", formData)
    }

    get(): Promise<Array<GetBeerContentType>> {
        return this.http.get("api/beer")
    }
}