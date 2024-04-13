import Header from "../main/Header.jsx";
import ContentFrame from "../main/ContentFrame.jsx";
import {useState} from "react";
import ButtonRound from "../ui/ButtonRound.jsx";

const DateCount = () => {

  const [count, setCount] = useState(0);

  const date = new Date()
  date.setDate(date.getDate() + count);

  const dateStr = date.toISOString().split('T')[0];

  return (
    <>
      <Header fontFamily='roboto' weight='600'>date count</Header>
      <ContentFrame>
        <div className='flex gap-4 items-center'>
          <ButtonRound onClick={() => setCount(s => s -1)}>-</ButtonRound>
          <div>{dateStr}</div>
          <ButtonRound onClick={() => setCount(s => s +1)}>+</ButtonRound>
        </div>
        <div>current date : {new Date().toLocaleDateString()}</div>

      </ContentFrame>

    </>
  );
};

export default DateCount;