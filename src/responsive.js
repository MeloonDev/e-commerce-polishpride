import { css } from "styled-components";

export const mobile = (props) => {
  return css`
    @media screen and (max-width: 446px) {
      ${props}
    }
  `;
};

export const medium = (props) => {
  return css`
    @media screen and (max-width: 700px) {
      ${props}
    }
  `;
};
