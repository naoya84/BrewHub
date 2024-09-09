import {describe, expect, it, vi} from "vitest";
import {render, screen, waitFor} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import {Link} from "react-router-dom";
import App from "./App.tsx";

vi.mock('./Pages/Header.tsx', () => ({
    default: () => <div data-testid="Header"/>,
}))

vi.mock('./Pages/Sidebar.tsx', () => ({
    default: () => (
        <div data-testid="Sidebar">
            <Link to={"/resist"}>登録ページへ</Link>
        </div>
    ),
}))

vi.mock('./Pages/Home.tsx', () => ({
    default: () => <div data-testid="Home"/>,
}))

vi.mock('./Pages/ResistBeerPage.tsx', () => ({
    default: () => <div data-testid="ResistBeerPage"/>,
}))

describe('render App', () => {
    it('正しいコンポーネントがレンダリングされる', () => {
        render(
            <App/>
        )

        expect(screen.getByTestId('Header')).toBeInTheDocument();
        expect(screen.getByTestId('Sidebar')).toBeInTheDocument();
        expect(screen.getByTestId('Home')).toBeInTheDocument();
        expect(screen.queryByTestId('ResistBeerPage')).toBeNull();
    });

    it('pathにresistが指定されるとResistBeerPageがレンダリングされる', async () => {
        render(
            <App/>
        )

        expect(screen.getByTestId('Home')).toBeInTheDocument();

        userEvent.click(screen.getByText("登録ページへ"))

        await waitFor(()=>{
            expect(screen.queryByTestId('Home')).toBeNull();
            expect(screen.getByTestId('ResistBeerPage')).toBeInTheDocument();
        })
    });
});