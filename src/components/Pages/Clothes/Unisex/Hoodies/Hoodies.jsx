import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { getProducts } from '../../../../../features/product/productSlice.js';
import ProductsGeneralCard from '../../../../Cards/ProductsGeneralCard/ProductsGeneralCard.jsx'
import CommonFilter from '../../../../Filter/CommonFilter/CommonFilter.jsx'
import './Hoodies.scss'

const Hoodies = () => {
  const category = 'SUDADERAS'
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.product);
  useEffect(() => {
    dispatch(getProducts())
  }, [])
  useEffect(() => {

  }, [products])

  return (
    <div className='hoodies-container'>
    {
        products ?
          (
            <ProductsGeneralCard products={products} category={category} filter={<CommonFilter />} />
          ) : null
      }
    </div>
  )
}

export default Hoodies
