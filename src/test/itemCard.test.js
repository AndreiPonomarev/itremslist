import "@babel/polyfill";
import React from "react";
import { ItemCard } from "../components";
import renderer from "react-test-renderer";

describe("<ItemCard />", () => {
    const item = {
        id: "203387821",
        title: "Idealny IPHONE 5S GOLD + Gratisy",
        created: "dzisiaj 14:51",
        description:
            "Witam dziś mam na sprzedaż idealnego iphona 5s w kolorze złotym .  Jego stan oceniam na idealny. Wygląda jak nowy. Kolor złoty. Wersja 16 GB.  Na gwarancji Jeszcze z 3- miesiące.  Od początku szkło. Ostatnio nałożone nowe szkło z 3MK( flexible Glass 3D które chroni cały telefon z każdej strony)  dodatkowo jeszcze  w zapasie jedna sztuka na tyl). Pełen zestaw. Dodatkowo 2 oryginalne case z Apple i 2 z innych firm.  Zestaw marzenie. Interesuje mnie tylko sprzedaż, więc proszę nie piszcie mi innych ofert. Pozdrawiam.",
        params: [["Marka", "iPhone"], ["Stan", "Używane"]],
        city_label: "Katowice Śródmieście"
    };
    const match = {
        isExact: false,
        path: "/items",
        url: "/items"
    };

    it("renders correctly", () => {
        const tree = renderer
            .create(
                <BrowserRouter>
                    <ItemCard item={item} match={match} />
                </BrowserRouter>
            )
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
});
