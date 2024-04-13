import Header from "../main/Header.jsx";
import ContentFrame from "../main/ContentFrame.jsx";
import { useState} from "react";

import useProduct from "../hooks/useProduct";
import Button, {ButtonDelete} from "../ui/Button";
import Input from "../ui/Input";
import axios from "axios";
import {BASE_URL} from "../components/config/config";

const Ch04_persistence_product = () => {

  const [productId, setProductId] = useState("");

  const [postData, setPostData] = useState({
    id: 0, name: '', price: 0, stock: 0, category: ''
  })

  const {product, productList} = useProduct(productId, postData)
  console.log(product)

  function handleClick(id) {
    const product = productList.find(p => id === p.productId)
    setProductId(product.productId)
  }

  function handleSubmit(e) {
    // e.preventDefault();

    axios.post(`${BASE_URL}/product-api/product`, {
        productId: Number(postData.id) ? Number(postData.id) : Math.round(Math.random() * 1000000),
        productName: postData.name ? postData.name : "default name",
        productCategory: postData.category ? postData.category : "default category",
        productPrice: Number(postData.price) ? Number(postData.price) : 1,
        productStock: Number(postData.stock) ? Number(postData.price) : 1,
      }
    );
  }

  function onChange(e) {
    e.preventDefault();
    setPostData(data => {
      return {...data, [e.target.name]: e.target.value}
    })
  }

  function handleDelete(id) {
    axios.delete(`${BASE_URL}/product-api/product/${Number(id)}`)
      .then(res => console.log(res.data))
  }

  return (
    <>
      <Header fontFamily='roboto' weight='600'>product</Header>
      <ContentFrame padding='1rem 2rem'>
        <div className='flex flex-col gap-4'>
          {productList && productList.map(product =>
            <div  key={product.productId} className='flex gap-4 align-middle items-center justify-between'>
              <li
                  onClick={() => handleClick(product.productId)}>
                이름 : {product.productName}, 카타고리: {product.productCategory}
                , price: {product.productPrice}, stock: {product.productStock}
              </li>
              <ButtonDelete onClick={() => handleDelete(product.productId)}>X</ButtonDelete>
            </div>
          )}
        </div>
        <div>
          {product.productName && <div>
            선택한 물건 => 이름 : {product.productName}, 카타고리: {product.productCategory}
            , price: {product.productPrice},stock: {product.productStock}
          </div>}
        </div>
        <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
          <label>id</label>
          <Input type='number' name='id' value={postData.id}
                 onChange={onChange}/>
          <label>name</label>
          <Input type='text' name='name' value={postData.name}
                 onChange={onChange}/>
          <label>category</label>
          <Input type='text' name='category' value={postData.category}
                 onChange={onChange}/>
          <label>price</label>
          <Input type='number' name='price' value={postData.price}
                 onChange={onChange}/>
          <label>stock</label>
          <Input type='number' name='stock' value={postData.stock}
                 onChange={onChange}/>
          <Button>submit</Button>
        </form>

      </ContentFrame>

    </>
  );
};

export default Ch04_persistence_product;