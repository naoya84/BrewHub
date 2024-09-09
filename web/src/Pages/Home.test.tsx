import {describe, expect, it} from "vitest";
import {render, screen} from "@testing-library/react";
import Home from "./Home.tsx";

describe('render', () => {
    it('正しく要素が表示される', () => {
        render(<Home/>)
        expect(screen.getByText("BEER MAP")).toBeInTheDocument()
    });
});