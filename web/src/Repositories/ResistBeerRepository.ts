import {ResistBeerContentType} from "../Pages/ResistBeerPage.tsx";
import NetworkHttp, {Http} from "../Https/NetworkHttp.ts";

export interface ResistBeerRepository {
    post(formContent: ResistBeerContentType, imageFile: File | null): Promise<string>
}

export class ResistBeerRepositoryImpl implements ResistBeerRepository {
    http: Http

    constructor(http: Http = new NetworkHttp()) {
        this.http = http
    }

    post(formContent: ResistBeerContentType, imageFile: File | null): Promise<string> {
        this.http.post(formContent, imageFile)
        return Promise.resolve("")
    }
}