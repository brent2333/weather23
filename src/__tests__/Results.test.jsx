import { expect, test } from "vitest";
import { render } from "@testing-library/react";
import { StaticRouter } from "react-router-dom/server";
import Results from "../Results";
import currentWeather from "../mocks/currentWeather.json";

test("renders the correct image for current condition", async () => {
    const results = render(
        <Results current={currentWeather} />
    );
    const condImg = await results.findByTestId("condimg");
    expect(condImg.src).toEqual("https://cdn.weatherapi.com/weather/64x64/night/113.png");
    results.unmount();
  });

  test("renders correctly with weather data", () => {
  const { asFragment } = render(
    <StaticRouter>
      <Results current={currentWeather} />
    </StaticRouter>
  );
  expect(asFragment()).toMatchSnapshot();
});
