import {describe, expect, it, vi} from "vitest";
import {render, screen} from "@testing-library/react";
import ResistBeerPage from "./ResistBeerPage.tsx";
import userEvent from "@testing-library/user-event";
import {ResistBeerRepositoryImpl} from "../Repositories/ResistBeerRepository.ts";

describe('post', () => {
    it('NetworkHttpのpostメソッドが正しく呼ばれる', async () => {
        const repository = new ResistBeerRepositoryImpl()
        const spyRepository = vi.spyOn(repository, "post")

        render(<ResistBeerPage resistBeerRepository={repository}/>)

        const commentForm = screen.getByLabelText("コメント")
        await userEvent.type(commentForm, "aiueo")

        const sendButton = screen.getByRole("button", {name: "登録"});
        await userEvent.click(sendButton);

        expect(spyRepository).toHaveBeenCalledWith(
            {
                "abv": 5,
                "bitter": 5,
                "comment": "aiueo",
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


    it('NetworkHttpのpostメソッドが正しく値を返す', () => {});

    it('全ての項目が空だったらアラートが表示され送信できない', () => {

    });
});
