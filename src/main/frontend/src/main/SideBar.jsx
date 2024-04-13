import styled from "styled-components";
import StyledNavLink from "../ui/StyledNavLink.jsx";
import { HiHome} from "react-icons/hi2";

const StyledSideBar = styled.aside`
   display: flex;
   flex-direction: column;
   gap: 1rem;
   grid-row: 1/-1;
   padding: 2rem 0.2rem 0 1rem;
   background-color: var(--color-grey-600);
   border-right: 1px solid var(--color-grey-100);
   color: var(--color-grey-100);
   font-family: "Sono", sans-serif;
   font-weight: bold;
   list-style: none;

   @media screen and (max-width: 640px) {
      display: flex;
      flex-direction: row;
      justify-content: center;
      //justify-items: center;
      align-items: center;
      grid-row: 1/-1;
      gap: 1rem;
      padding: 0;
      border-bottom: 1px solid var(--color-grey-100);
      height: auto;
      flex-wrap: wrap;
   }
`;

function SideBar() {
  return (
    <StyledSideBar>
      <StyledNavLink to='/'><HiHome/>Home</StyledNavLink>
      <StyledNavLink to='ch01-getMapping'>01-getMapping</StyledNavLink>
      <StyledNavLink to='ch02-postApi'>02-postApi</StyledNavLink>
      <StyledNavLink to='ch03-putApi'>03-putApi</StyledNavLink>
      <StyledNavLink to='ch09-swagger'>09-swagger</StyledNavLink>
      <StyledNavLink to='ch04_persistence_product'>04_persistence_product</StyledNavLink>
      <StyledNavLink to='accordions'>Accordions</StyledNavLink>
      <StyledNavLink to='tip-calc'> Tip Calc</StyledNavLink>
      <StyledNavLink to='split'> Split</StyledNavLink>
    </StyledSideBar>
  );
}

export default SideBar