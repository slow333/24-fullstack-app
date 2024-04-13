import Footer from "../../main/Footer.js";
import React, {useEffect, useState} from "react";

const PizzaFooter = ({cTime}) => {

  const [time, setTime] = useState();

  useEffect(() => {
    setInterval(() => {
      setTime(new Date().toTimeString().split(' ')[0])
    }, 1000)

  }, [])

  return (
    <Footer>
      <div>10시 부터 8시까지 열어요({time})</div>
      <div>{(cTime > 21 || cTime < 10) ? "문 닫었어요" : "주문 가능합니다."}</div>
    </Footer>
  );
};

export default PizzaFooter;