import {Outlet} from "react-router-dom";
import styled from "styled-components";
import SideBar from "./SideBar.jsx";

const StyledAppLayout = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  height: 100vh;
  overflow: hidden;

   @media screen  and (max-width: 640px) {
      grid-template-columns: 1fr;
      grid-template-rows: auto 1fr;
      display: flex;
      flex-direction: column;
   }
`;

const MContainer = styled.div`
   display: grid;
   grid-template-rows: auto 1fr auto;

   background-color: var(--color-grey-800);
   overflow-y: hidden;
    width: auto;

   @media screen  and (max-width: 984px) {
      grid-template-rows: auto 1fr auto;
      height: 100vh;
      width: 100vw;
      overflow-y: auto;
   }
`;

const AppLayout = () => {
  return (
       <StyledAppLayout>
         <SideBar/>
         <MContainer>
           <Outlet/>
         </MContainer>
       </StyledAppLayout>
  );
};

export default AppLayout;