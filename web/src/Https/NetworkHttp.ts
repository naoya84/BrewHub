import {GetBeerContentType} from "../models/Beer.ts";
import {useUser} from "../UserContext.ts";

export interface Http {
    post(url: string, body: FormData): Promise<string>
    get(url: string): Promise<Array<GetBeerContentType>>
}

export default class NetworkHttp implements Http {
    user = useUser()

    async post(url: string, body: FormData): Promise<string> {
        const accessToken = this.user?.accessToken
        const response = await fetch(url, {
            method: "POST",
            headers: {"Authorization": `Bearer ${accessToken}`},
            body: body
        })

        return await response.text()
    }

    async get(url: string): Promise<Array<GetBeerContentType>> {
        const accessToken = this.user?.accessToken
        const response = await fetch(url, {
            method: "GET",
            headers: {"Authorization": `Bearer ${accessToken}`},
        })
        return await response.json() as Promise<Array<GetBeerContentType>>
    }
}