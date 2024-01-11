import { render, screen } from "@testing-library/react"
import { describe, it, expect } from "vitest"
import Home from "./Home"
import { BrowserRouter } from "react-router-dom"

describe("Home Component", () => {
    it("should render", () => {
        render(
            <BrowserRouter>
                <Home />
            </BrowserRouter>
        );
        expect(screen.getByText("Home Page")).toBeInTheDocument()
    })
})