import { render } from "@testing-library/react";
import Duty from "./Duty";

describe("Duty", () => {
    it("should render a duty", () => {
        const { getByTestId }  = render(<Duty id="2468" name="1357" />);
        const content = getByTestId("name").textContent;
        expect(content).toBe("1357");
    });
});