import { createGlobalStyle } from "styled-components";
import * as theme from "./theme";

export const GlobalStyle = createGlobalStyle`

body {
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  font-family: monospace;
  overflow-x: hidden;
  margin: 0;
  padding:0
}
// theme buttons color
.light {
  background-color: ${theme.light.colors.header};
}
.dark {
  background-color: ${theme.dark.colors.header};
}
.blue {
  background-color: ${theme.blue.colors.header};
}
.green {
  background-color: ${theme.green.colors.header};
}
.brown {
  background-color: ${theme.brown.colors.header};
}
.pink {
  background-color: ${theme.pink.colors.header};
}

// active theme
/* .active{
    border: 3px solid ${({ theme }) => theme.colors.border};
} */
`;
