import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { getProducts } from '../../../../../features/product/productSlice.js';
import './Shirts.scss'
import ProductsGeneralCard from '../../../../Cards/ProductsGeneralCard/ProductsGeneralCard.jsx'
import CommonFilter from '../../../../Filter/CommonFilter/CommonFilter.jsx'
const Shirts = () => {
  const category = 'CAMISETAS'
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.product);
  useEffect(() => {
    dispatch(getProducts())
  }, [])
  useEffect(() => {

  }, [products])

  return (
    <div className='shirts-container'>
      {
        products ?
          (
            <ProductsGeneralCard products={products} category={category} filter={<CommonFilter />} />
          ) : null
      }
    </div>
  )
}

export default Shirts
