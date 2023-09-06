import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import Login from "../Login";
import appStore from "../../utils/appStore";

test("should load inputBox inside Login Component", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Login />
      </Provider>
    </BrowserRouter>
  );

  const inputBox = screen.getByRole("textbox");
  expect(inputBox).toBeInTheDocument();
});
