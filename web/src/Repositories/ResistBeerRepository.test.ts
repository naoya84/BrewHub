import {describe, expect, it, vi} from "vitest";
import NetworkHttp, {Http} from "../Https/NetworkHttp.ts";
import {ResistBeerRepository, ResistBeerRepositoryImpl} from "./ResistBeerRepository.ts";
import {buildResistBeerContent} from "../Pages/ResistBeerPage.tsx";

describe('ResistBeerRepository', () => {
    it('postを呼ぶとNetworkHttpのpostが正しく呼ばれる', () => {
        const http: Http = new NetworkHttp()
        const spyPost = vi.spyOn(http, "post")

        const repository: ResistBeerRepository = new ResistBeerRepositoryImpl(http)
        repository.post(buildResistBeerContent(), null)

        expect(spyPost).toHaveBeenCalledWith(
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
});