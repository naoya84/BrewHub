import {describe, expect, it} from "vitest";
import {render, screen} from "@testing-library/react";
import ResistBeerPage from "./ResistBeerPage.tsx";

describe('render', () => {
    it('正しく要素が表示される', () => {
        render(<ResistBeerPage/>)
        expect(screen.getByText("ビールを登録")).toBeInTheDocument()
    });
});