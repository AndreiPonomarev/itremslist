import "@babel/polyfill";
import React from "react";
import { ItemsList } from "../components";
import renderer from "react-test-renderer";
import fetch, { Response } from "node-fetch";
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

jest.mock("node-fetch");

describe("<ItemsList />", () => {
    const match = {
        isExact: false,
        path: "/items",
        url: "/items"
    };

    it("renders correctly", () => {
        const tree = renderer
            .create(
                <BrowserRouter>
                    <ItemsList match={match} />
                </BrowserRouter>
            )
            .toJSON();
        expect(tree).toMatchSnapshot();
    });

    xit("calls fetch with the right args and returns response", async () => {
        // https://github.com/facebook/react/issues/14050#issuecomment-435658377
        const itemsList = require("../../stub/ads.json");

        fetch.mockReturnValue(Promise.resolve(new Response(itemsList[0])));

        const tree = renderer.create(
            <BrowserRouter>
                <ItemsList match={match} />
            </BrowserRouter>
        );

        expect(fetch).toHaveBeenCalledTimes(1);
        expect(fetch).toHaveBeenCalledWith("/api/item?id=203387821");
    });

});
