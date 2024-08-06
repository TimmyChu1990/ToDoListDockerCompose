import { getDutiesAPI, createDutyAPI, updateDutyAPI, deleteDutyAPI } from "./App";

const id = (Math.floor(Math.random() * 10000) + 1).toString();
const TestName1 = 'Test Name1';
const TestName2 = 'Test Name2';

describe("Test backend API is working or not", () => {
    it("Get duties", async() => {
        const response = await getDutiesAPI();
    });
    it("Create duty", async() => {
        const duty = {id: id, name: TestName1}
        const response = await createDutyAPI(duty);
        expect(duty).toEqual(response);
    });
    it("Update duty", async() => {
        const duty = {id: id, name: TestName2}
        const response = await updateDutyAPI(duty);
        expect(duty).toEqual(response);
    });
    it("Delete duty", async() => {
        const response = await deleteDutyAPI(id);
    });
});