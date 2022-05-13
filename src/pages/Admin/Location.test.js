import {getAllByPlaceholderText, queryByRole, render} from "@testing-library/react";
import Location from "../Admin/Location";

describe("Location component", ()=>{
    it("rendered radio buttons", ()=>{
        const {getByTestId} = render(<Location/>);
        const input = getByTestId("radio1-verify");
        expect(input).toBeTruthy();
    });
    it("radio button-2", ()=>{
        const {getByTestId} = render(<Location/>);
        const input2 = getByTestId("radio2-verify");
        expect(input2).toBeTruthy();
    });
    it("radio button 3", ()=>{
        const {queryByRole} = render(<Location/>);
        const input3 = queryByRole("radio3-verify");
        expect(input3).toBeFalsy();
    })
})