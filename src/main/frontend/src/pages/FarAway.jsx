import React from 'react';
import FormItems from "../components/far-away/FormItems.jsx";
import {FarawayProvider} from "../context/FarawayContext.jsx";
import ItemList from "../components/far-away/ItemList.jsx";
import Header from "../main/Header.jsx";
import FarAwayFooter from "../components/far-away/FarAwayFooter.jsx";
import ContentFrame from "../main/ContentFrame.jsx";

const FarAway = () => {

  return (
    <>
      <FarawayProvider>
        <Header  fontFamily='roboto' weight='600'>Far Away</Header>
        <ContentFrame padding='2rem 0'>
          <FormItems/>
          <ItemList/>
        </ContentFrame>
        <FarAwayFooter/>
      </FarawayProvider>
    </>
  );
};

export default FarAway;