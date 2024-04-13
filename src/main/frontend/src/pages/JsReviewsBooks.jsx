import React, {useState} from 'react';
import {getBook, getBooks} from "../data/bookData.js";
import Header from "../main/Header.jsx";
import styled from "styled-components";
import Title from "../ui/Title.jsx";

const BookContainer = styled.div`
  padding: 2rem;
  border: 2px solid var(--color-grey-500);
`
const JsReviewsBooks = () => {
  const books = getBooks();
  const [book, setBook] = useState();

  function handleChange(e) {
    e.preventDefault();
    console.log(e.target.value)
    const book = getBook(+e.target.value);
    setBook(book)
  }

  return (
       <>
           <Header  fontFamily='roboto' weight='600'>Book Data</Header>
           <div>
             <Title>책 고르기</Title>
             <div>{books.reduce((acc, book) => acc + book.pages, 0)} 페이지 by reduce</div>
             <select onChange={handleChange} className='text-stone-600'>
               <option value=''>book id</option>
               {Array.from({length:5},(_, idx) =>
                    <option key={idx+1} value={idx+1}>{idx+1}</option>)}
             </select>
             {book && <Book book={book}/>}
             {/*{books.map(book => <Book key={book.id} book={book}/>)}*/}
           </div>
       </>
  );
};

function Book({book}) {
  const {title, publicationDate, author, genres, pages} = book;

  return (
       <BookContainer>
         <div>제목 : {title}</div>
         <div>작가 : {author}</div>
         <div>페이지 : {pages}</div>
         <div>출간일 : {publicationDate}</div>
         <div  className='flex gap-3'>
           Genres :
           {genres.map(gn => <div key={gn}>{gn}</div>)}</div>
       </BookContainer>
  )
}

export default JsReviewsBooks;