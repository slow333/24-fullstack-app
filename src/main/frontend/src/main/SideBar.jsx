import styled from "styled-components";
import StyledNavLink from "../ui/StyledNavLink.jsx";
import {HiDocumentPlus, HiHome, HiMiniCalendarDays, HiOutlineBookOpen} from "react-icons/hi2";
import {SiYourtraveldottv} from "react-icons/si";
import { BiMoneyWithdraw } from "react-icons/bi";
import { LuSplitSquareHorizontal } from "react-icons/lu";
import {PiPizza} from "react-icons/pi";

const StyledSideBar = styled.aside`
   display: flex;
   flex-direction: column;
   gap: 3rem;
   grid-row: 1/-1;
   padding: 2rem 1rem 0 1rem;
   background-color: var(--color-grey-600);
   border-right: 1px solid var(--color-grey-100);
   color: var(--color-grey-100);
   font-family: "Sono", sans-serif;
   font-weight: bold;
   list-style: none;

   @media screen and (max-width: 984px) {
      display: flex;
      flex-direction: row;
      justify-content: center;
      //justify-items: center;
      align-items: center;
      grid-column: 1/-1;
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
      <StyledNavLink to='advice'><HiDocumentPlus/>advice</StyledNavLink>
      <StyledNavLink to='faraway'><SiYourtraveldottv/>FarAway</StyledNavLink>
      <StyledNavLink to='pizza-menu'><PiPizza/>Pizza Menu</StyledNavLink>
      <StyledNavLink to='books'><HiOutlineBookOpen/>Books</StyledNavLink>
      <StyledNavLink to='date-count'><HiMiniCalendarDays />Date Count</StyledNavLink>
      <StyledNavLink to='accordions'>📃 Accordions</StyledNavLink>
      <StyledNavLink to='tip-calc'><BiMoneyWithdraw/> Tip Calc</StyledNavLink>
      <StyledNavLink to='split'><LuSplitSquareHorizontal/> Split</StyledNavLink>
    </StyledSideBar>
  );
}

export default SideBar