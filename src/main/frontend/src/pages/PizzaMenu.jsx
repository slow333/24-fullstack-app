import React from 'react';
import Header from "../main/Header.jsx";
import '../styles/pizza-index.css'
import Title from "../ui/Title.jsx";
import getPizza from "../data/pizzaData.js";
import Pizza from "../components/pizza-menu/Pizza.jsx";
import ContentFrame from "../main/ContentFrame.jsx";
import PizzaFooter from "../components/pizza-menu/PizzaFooter.jsx";
import Button from "../ui/Button.jsx";

const PizzaMenu = () => {
  const pizzas = getPizza();

  const time = new Date().toTimeString()
  // const cTime = 10
  const cTime = time.split(':')[0]

  return (
    <>
      <Header family='roboto' weight='600'>Pizza Menu</Header>
      <ContentFrame padding="1rem 2rem">
          <Title margin='3rem 1rem'>OUr Menu</Title>
          <div className='text-3xl text-center mt-14'>
            안녕하세요. 돌로 구운 유기농 재료로 만든 피자입니다.
          </div>
          <div className='pizzas mt-12'>
            {pizzas.map(pizza => <Pizza key={pizza.name} pizza={pizza}/>)}
          </div>
          {(cTime >= 10 && cTime <= 20) && <Button className='mt-14'>주문하세요</Button>}
      </ContentFrame>
      <PizzaFooter cTime={cTime}/>
    </>
  );
};

export default PizzaMenu;