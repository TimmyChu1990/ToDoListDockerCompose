import { render } from "@testing-library/react";
import Button from "./Button";

describe("Button", () => {
    it("should render a button", () => {
        const { getByTestId }  = render(<Button colour="red" 
                                                text="Hello" 
                                                onClick={() => {console.log("Hello!");}} />);
        const content = getByTestId("top-button").textContent;
        expect(content).toBe("Hello");
    });
});