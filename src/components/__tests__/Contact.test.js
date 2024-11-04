import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom"

describe("contact us page testing group", () => {
    test("should load contact us page", () => {
        render(<Contact />);
        const heading = screen.getByRole("heading"); 
        expect(heading).toBeInTheDocument();
    });

    test("should load contact us page", () => {
        render(<Contact />);
        const inputBoxes = screen.getAllByRole("textbox"); 
        expect(inputBoxes.length).toBe(2);
    });
});