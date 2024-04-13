import Header from "../main/Header.jsx";
import ContentFrame from "../main/ContentFrame.jsx";
import Title from "../ui/Title.jsx";
import Footer from "../main/Footer.js";
import {useForm} from "react-hook-form";
import {useState} from "react";
import StyledSelect from "../ui/StyledSelect.jsx";
import Button from "../ui/Button.jsx";

const TipCalc = () => {
  const [bill, setBill] = useState({
    bill: 0, tip: 0, person: 1,
  })
  const {register, handleSubmit, getValues, formState: {errors}} = useForm(
    {
      defaultValues: {
        price: 0, tip: 0, person: 1,
      }
    }
  );

  const totalPrice = Number(bill.price) + Number(bill.price * bill.tip / 100);
  const perPerson = Number(totalPrice) / Number(bill.person)

  function onSubmit(data) {
    console.log(data)
    setBill({...data})
  }

  return (
    <>
      <Header>Tip Calculator</Header>
      <ContentFrame>
        <Title margin='3rem 2rem'>팁을 계산해보아요.</Title>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label htmlFor='price'>Price : </label>
            <input className='text-amber-800 ms-16 mb-16 p-4' type='number'
                   {...register("price",
                     {
                       required: "Please enter Price",
                       min: {
                         value: 1,
                         message: "1보다 커야함"
                       },
                     })
                   } />
            {errors.price && <span>{errors?.price?.message}</span>}
          </div>

          <div>
            <label htmlFor='tip'>Tip : </label>
            {/*시험용입니다.*/}
            <input className='text-amber-800 mx-16 mb-16 p-4' type='number'
                   {...register("tip", {
                     required: "Please enter tip",
                     validate: (value) => +value <= Number(getValues().price)
                       || "팁이 더크면 안되용.",
                     max: {
                       value: 100,
                       message: "100보다 클수는 없어요..."
                     },
                   })}/>
            {errors.tip && <span>{errors?.tip?.message}</span>}

            <StyledSelect {...register('person')}>
              <option value=''>select</option>
              <option value='1'>1</option>
              <option value='2'>2</option>
              <option value='3'>3</option>
              <option value='4'>4</option>
              <option value='5'>5</option>
            </StyledSelect> persons
          </div>
          <Button type='submit'>입력하기</Button>
        </form>

        <div>price : {bill.price}, tip : {bill.tip}</div>
        <div>total : {totalPrice.toFixed(2)}</div>
        <div>인당 금액 : {perPerson.toFixed(2)}</div>
      </ContentFrame>
      <Footer>&copy;팁 계산기</Footer>
    </>
  );
};

export default TipCalc;