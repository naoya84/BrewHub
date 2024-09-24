import NetworkHttp, {Http} from "../Https/NetworkHttp.ts";
import {GetBeerType, ResistBeerContentType} from "../models/Beer.ts";

export interface BeerRepository {
    post(url: string, formContent: ResistBeerContentType, imageFile: File | null): Promise<string>
    get(url: string): Promise<Array<GetBeerType>>
    getById(url: string): Promise<Array<GetBeerType>>
}

export class BeerRepositoryImpl implements BeerRepository {
    http: Http

    constructor(http: Http = new NetworkHttp()) {
        this.http = http
    }

    post(url: string, formContent: ResistBeerContentType, imageFile: File | null): Promise<string> {
        this.http.post(url, formContent, imageFile)
        return Promise.resolve("")
    }

    get(url: string): Promise<Array<GetBeerType>> {
        return this.http.get(url)
    }

    getById(url: string): Promise<Array<GetBeerType>> {
        return this.http.get(url)
    }
}