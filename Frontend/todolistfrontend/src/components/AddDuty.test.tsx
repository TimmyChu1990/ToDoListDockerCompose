import { render } from "@testing-library/react";
import AddDuty from "./AddDuty";
import { dutyType } from "./ContentsTypes";

describe("AddDuty", () => {
    it("should render an AddDuty", () => {
        function Test (duty: dutyType){
            console.log("Hello Again!");;
        }
        const { getByTestId }  = render(<AddDuty addDuty={Test} />);
        const content = getByTestId("label").textContent;
        expect(content).toBe("Name");
    });
});