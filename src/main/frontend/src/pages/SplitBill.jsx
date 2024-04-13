import Header from "../main/Header.jsx";
import ContentFrame from "../main/ContentFrame.jsx";
import styled from "styled-components";
import SidebarFriends from "../components/eat-and-split/SidebarFriends.jsx";
import Button from "../ui/Button.jsx";
import Input from "../ui/Input.jsx";

const ContainerEatAndSplit = styled.div`
   display: grid;
   grid-template-columns: 1fr 1fr;
   gap: 1rem;
`;


const SplitBill = () => {
  return (
    <>
      <Header>split bill</Header>
      <ContentFrame padding="2rem 3rem">
        <ContainerEatAndSplit>
          <SidebarFriends/>
          <FormBill/>
        </ContainerEatAndSplit>
      </ContentFrame>
    </>
  );
};

export default SplitBill;

const FormEatAndSplit = styled.form`
   display: grid;
   grid-template-rows: auto 1fr;
   //align-items: center;
   row-gap: 1.2rem;

   padding: 1.2rem;
   border-radius: 7px;
   transition: 0.5s;
   background-color: #fafafa;
   color: #1f2937;
   width: 42rem;
   &::selection {
      background-color: #fff4e6;
   }
`
const Heading = styled.div`
   //grid-row: 1/-1;
   text-align: center;
   font-size: 2.3rem;
`
const FormInput = styled.form`
   display: grid;
   grid-template-columns: auto 180px;
   //justify-content: start;
   //justify-items: start;
   align-items: start;
   align-content: start;
   row-gap: 2rem;
   column-gap: 1rem;
`;

function FormBill() {
  return (
    <>
      <FormEatAndSplit>
        <Heading>Split bill with Sarah</Heading>
        <FormInput>
          <div>bill value</div>
          <Input type='number'/>
          <div>Your expense</div>
          <Input type='number'/>
          <div>Sarah's expense</div>
          <Input type='number'/>
          <div>Who is paying the bill</div>
          <Input type='number'/>
          <Button>Split Bill</Button>
        </FormInput>
      </FormEatAndSplit>
    </>
  )
}