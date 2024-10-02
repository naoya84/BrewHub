import {GetBeerType} from "../models/Beer.ts";
import {useUser} from "../UserContext.ts";

export interface Http {
    post(url: string, body: FormData): Promise<string>
    get(url: string): Promise<Array<GetBeerType>>
}

export default class NetworkHttp implements Http {
    user = useUser()

    async post(url: string, body: FormData): Promise<string> {
        const accessToken = this.user?.accessToken
        const response = await fetch(url, {
            method: "POST",
            headers: {"Content-Type": "application/json", "Authorization": `Bearer ${accessToken}`},
            body: body
        })

        return await response.json() as Promise<string>
    }

    async get(url: string): Promise<Array<GetBeerType>> {
        const accessToken = this.user?.accessToken
        const response = await fetch(url, {
            method: "GET",
            headers: {"Content-Type": "application/json", "Authorization": `Bearer ${accessToken}`},
        })
        return await response.json() as Promise<Array<GetBeerType>>
    }
}