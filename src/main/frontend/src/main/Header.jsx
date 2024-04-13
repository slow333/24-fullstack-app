import styled, {css} from "styled-components";

const fontFamily = {
  roboto : css`
    font-family: "Roboto",sans-serif;
  `,
  bungee: css`
    font-family: "Bungee Spice", sans-serif;
  `,
  noto: css`
    font-family: "noto san KR", sans-serif;
  `,
  poppins: css`
    font-family: "Poppins", sans-serif;
  `
};

const weight = {
  100: css`
    font-weight: 100;
  `,
  200: css`
    font-weight: 200;
  `,
  300: css`
    font-weight: 300;
  `,
  400: css`
    font-weight: 400;
  `,
  500: css`
    font-weight: 500;
  `,
  600: css`
    font-weight: 600;
  `,
  700: css`
    font-weight: 700;
  `,
  800: css`
    font-weight: 800;
  `,
  900: css`
    font-weight: 900;
  `,
}

const Header = styled.header`
  ${props => fontFamily[props.fontFamily]}
  ${props => weight[props.weight]}
  
  width: 100%;
  
   background-color: var(--color-grey-900);
   color: #9ca3af;  
   padding: 1.6rem 0;
   text-align: center;
   font-size: 3rem;
   text-transform: uppercase;
`;

export default Header;