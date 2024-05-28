import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import "@testing-library/jest-dom";

import { Button } from "./index";
import theme from "../../config/theme";

describe("Button testes", () => {
  test("Teste de renderização", () => {
    const text = "Teste";

    render(
      <ThemeProvider theme={theme}>
        <Button><span>{ text }</span></Button>
      </ThemeProvider>
    );

    expect( screen.getByText( text )).toBeInTheDocument();
  });
});
