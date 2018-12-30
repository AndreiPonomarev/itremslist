import React from "react";
import { Header } from "../components";
import renderer from "react-test-renderer";

const match = {
    isExact: false,
    path: "/",
    url: "/"
};
const location = {
    pathName: "/"
};
describe("<Header />", () => {
    it("renders correctly", () => {
        const tree = renderer
            .create(
                <BrowserRouter>
                    <Header match={match} location={location} />
                </BrowserRouter>
            )
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
});
