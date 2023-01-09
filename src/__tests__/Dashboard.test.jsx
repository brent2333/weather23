import { expect, test } from "vitest";
import { render } from "@testing-library/react";
import store from "../store";
import { Provider } from "react-redux";
import Dashboard from "../Dashboard";

test("dashboard renders on load", async () => {
    const { asFragment } = render(<Provider store={store}><Dashboard /></Provider>);
    expect(asFragment()).toMatchSnapshot();
})