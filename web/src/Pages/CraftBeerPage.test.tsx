import {act, render, screen, waitFor} from "@testing-library/react";
import CraftBeerPage from "./CraftBeerPage";
import {beforeEach, describe, expect, it, vi} from "vitest";
import {BeerRepositoryImpl} from "../Repositories/BeerRepository";
import {GetBeerType} from "../models/Beer";
import userEvent from "@testing-library/user-event";
import {MemoryRouter, Route, Routes} from "react-router-dom";
import CraftBeerDetailPage from "./CraftBeerDetailPage";

const returnContent: [GetBeerType] = [{
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
}]

describe('render', () => {
    it('タイトルが表示される', async () => {
        await renderPage()
        expect(screen.getByText("図鑑を見る"))
    });

    it('BeerRepositoryのgetを呼ぶ', async () => {
        const repository = new BeerRepositoryImpl()
        const spyGet = vi.spyOn(repository, "get")

        await renderPage(repository)

        expect(spyGet).toHaveBeenCalled()
    });

    it('画像とビール名が表示される', async () => {
        const repository = new BeerRepositoryImpl()
        vi.spyOn(repository, "get").mockResolvedValue(returnContent)

        await renderPage(repository)

        expect(screen.getByText("mya-brew"))
        expect(screen.getByRole("img"))
    });

    it('BeerRepositoryのgetを呼ぶとビールの一覧が表示される', async () => {
        const repository = new BeerRepositoryImpl()
        vi.spyOn(repository, "get").mockResolvedValue(returnContent)

        await renderPage(repository)

        expect(screen.getByText("mya-brew")).toBeInTheDocument()
    });
});

describe('tap image', () => {
    it('詳細ページに遷移する', async () => {
        const repository = new BeerRepositoryImpl()
        vi.spyOn(repository, "get").mockResolvedValue(returnContent)
        vi.spyOn(repository, "getById").mockResolvedValue(returnContent)

        await renderPage(repository);

        const img = screen.getByRole("img")
        await userEvent.click(img)

        await waitFor(()=>{
            expect(screen.getByText("mya-brew")).toBeInTheDocument()
        })
    });

    it('BeerRepositoryのgetByIdを正しく呼ぶ', async () => {
        const repository = new BeerRepositoryImpl()
        vi.spyOn(repository, "get").mockResolvedValue(returnContent)
        const spyGetById = vi.spyOn(repository, "getById").mockResolvedValue(returnContent)

        await renderPage(repository)

        const img = screen.getByRole("img")
        await userEvent.click(img)

        await waitFor(()=>{
            expect(spyGetById).toHaveBeenCalledWith("http://localhost:8080/1")
        })
    });
});

async function renderPage(repository?: BeerRepositoryImpl) {
    await act(async () => {
        render(
            <MemoryRouter initialEntries={["/craftbeers"]}>
                <Routes>
                    <Route path="/craftbeers" element={<CraftBeerPage beerRepository={repository}/>}/>
                    <Route path="/craftbeers/:id" element={<CraftBeerDetailPage beerRepository={repository}/>}/>
                </Routes>
            </MemoryRouter>
        )
    })
}
