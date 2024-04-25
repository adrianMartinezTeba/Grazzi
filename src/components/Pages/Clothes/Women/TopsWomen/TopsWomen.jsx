import React, { useEffect } from 'react'
import './TopsWomen.scss'
import { useSelector, useDispatch } from 'react-redux';
import ProductsGeneralCard from '../../../../Cards/ProductsGeneralCard/ProductsGeneralCard.jsx'
import { getProducts } from '../../../../../features/product/productSlice.js';

import CommonFilter from '../../../../Filter/CommonFilter/CommonFilter.jsx'
const TopsWomen = () => {
  const category = 'TOPS'
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.product);
  useEffect(() => {
    dispatch(getProducts())
  }, [])
  useEffect(() => {

  }, [products])
  return (
    <div className='topsWomen-container'>
   {
        products ?
          (
            <ProductsGeneralCard products={products} category={category} filter={<CommonFilter />} />
          ) : null
      }
    </div>
  )
}

export default TopsWomen
