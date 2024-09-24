import {describe, expect, it, vi} from "vitest";
import NetworkHttp, {Http} from "../Https/NetworkHttp.ts";
import {BeerRepository, BeerRepositoryImpl} from "./BeerRepository.ts";
import {buildResistBeerContent, GetBeerType} from "../models/Beer.ts";

describe('BeerRepository', () => {
    const baseUrl = "http://localhost:8080"

    it('postを呼ぶとNetworkHttpのpostが正しく呼ばれる', () => {
        const http: Http = new NetworkHttp()
        const spyPost = vi.spyOn(http, "post")

        const repository: BeerRepository = new BeerRepositoryImpl(http)
        repository.post(baseUrl, buildResistBeerContent(), null)

        expect(spyPost).toHaveBeenCalledWith(
            baseUrl,
            {
                "abv": 5,
                "bitter": 5,
                "comment": "",
                "country": "",
                "deeply": 5,
                "name": "",
                "price": "",
                "store": "",
                "style": "",
            },
            null,
        )
    });

    it('getを呼ぶとNetworkHttpのgetが正しく呼ばれる', async () => {
        const http: Http = new NetworkHttp()
        const spyGet = vi.spyOn(http, "get").mockResolvedValue([
            {
                id: 1,
                name: "mya-brew",
                comment: "some string",
                store: "some string",
                abv: 5.5,
                bitter: 4,
                deeply: 4,
                style: "some string",
                country: "some string",
                price: "some string",
                image: {} as File,
            } as GetBeerType
        ])

        const repository = new BeerRepositoryImpl(http)
        const returnContent = await repository.get(baseUrl)

        expect(spyGet).toHaveBeenCalled()
        expect(returnContent[0].name).toEqual("mya-brew")
    });
});