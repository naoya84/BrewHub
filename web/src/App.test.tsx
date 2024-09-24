import {describe, expect, it, vi} from "vitest";
import {render, screen, waitFor} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App.tsx";

vi.mock('./Pages/Header.tsx', () => ({
    default: () => <div data-testid="Header"/>,
}))

vi.mock('./Pages/Home.tsx', () => ({
    default: () => <div data-testid="Home"/>
}))

vi.mock('./Pages/ResistBeerPage.tsx', () => ({
    default: () => <div data-testid="ResistBeerPage"/>
}))

vi.mock('./Pages/CraftBeerPage.tsx', () => ({
    default: () => <div data-testid="CraftBeerPage"></div>
}))

describe('render App', () => {
    it('正しいコンポーネントがレンダリングされる', () => {
        render(
            <App/>
        )

        expect(screen.getByTestId('Header')).toBeInTheDocument();
        expect(screen.getByText('Home')).toBeInTheDocument();
        expect(screen.getByTestId('Home')).toBeInTheDocument();
        expect(screen.queryByTestId('ResistBeerPage')).toBeNull();
    });

    it('pathにresistが指定されるとResistBeerPageがレンダリングされる', async () => {
        render(
            <App/>
        )

        expect(screen.getByTestId('Home')).toBeInTheDocument();

        userEvent.click(screen.getByText("ビールを登録"))

        await waitFor(() => {
            expect(screen.queryByTestId('Home')).toBeNull();
            expect(screen.getByTestId('ResistBeerPage')).toBeInTheDocument();
        })
    });

    it('pathにcraftbeersが指定されるとCraftBeerPageがレンダリングされる', async () => {
        render(<App/>)

        userEvent.click(screen.getByText("ビール図鑑を見る"))

        await waitFor(() => {
            expect(screen.getByTestId("CraftBeerPage"))
        })

    });
});