import React from "react";
import { Home } from "../components";
import renderer from "react-test-renderer";

describe("<Home />", () => {
    it("renders correctly", () => {
        const tree = renderer.create(<Home />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
