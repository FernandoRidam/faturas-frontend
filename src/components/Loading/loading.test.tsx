import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import "@testing-library/jest-dom";

import { Loading } from "./index";
import theme from "../../config/theme";
import { StateProvider } from "../../store";

describe("Loading testes", () => {
  test("Teste de renderização", () => {
    const text = "Aguarde...";

    render(
      <StateProvider>
        <ThemeProvider theme={theme}>
          <Loading />
        </ThemeProvider>
      </StateProvider>
    );

    expect( screen.getByText( text )).toBeInTheDocument();
  });
});
