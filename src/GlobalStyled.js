import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalStyled = createGlobalStyle`
${reset}
    a{
        color: black;
        text-decoration: none;
    }
`;
