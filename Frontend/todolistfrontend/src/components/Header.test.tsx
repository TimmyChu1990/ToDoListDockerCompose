import { render } from "@testing-library/react";
import Header from "./Header";

describe("Header", () => {
    it("should render a Header", () => {
        const { getByTestId }  = render(<Header title="Hello Again" />);
        const content = getByTestId("header1").textContent;
        expect(content).toBe("Hello Again");
    });
});