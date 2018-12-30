import "@babel/polyfill";
import React from "react";
import { ItemsPage } from "../components";
import renderer from "react-test-renderer";


describe('<ItemsPage />', () => {

      const match = {
        isExact: false,
        path: "/items",
        url: "/items"
    };

    it("renders correctly", () => {
        const tree = renderer
            .create(<BrowserRouter><ItemsPage match={match} /></BrowserRouter>)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });


})

