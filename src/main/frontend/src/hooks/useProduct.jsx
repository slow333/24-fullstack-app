import {useEffect, useState} from 'react';
import axios from "axios";
import {BASE_URL} from "../components/config/config";

const useProduct =  (productId, postData) => {

  const [product, setProduct] = useState({});
  const [productList, setProductList] = useState([]);

  useEffect( () => {
    axios.get(`${BASE_URL}/product-api/products`)
      .then(res => res.data)
      .then(data => setProductList(data))
  }, [postData]);

  useEffect( () => {
    if(!productId) return;
    axios.get(`${BASE_URL}/product-api/product/${productId}`)
      .then(res => res.data)
      .then(data => setProduct(data))
  }, [productId]);

  return {productList, product}
};

export default useProduct;
