import {render} from "@testing-library/react";
import Office from "../Admin/Office";

describe("Office component", ()=>{
    it("rendered Office button", ()=>{
        const {getByTestId} = render(<Office/>);
        const button = getByTestId("btnVerify");
        expect(button).toBeTruthy();
    });
    it("check the title", ()=>{
        const {getByTestId} = render(<Office/>);
        const strong = getByTestId("para");
        expect(strong).toBeTruthy();
    })
})