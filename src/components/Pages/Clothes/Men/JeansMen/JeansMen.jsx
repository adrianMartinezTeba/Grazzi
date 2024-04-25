import React, { useEffect } from 'react'
import ProductsGeneralCard from '../../../../Cards/ProductsGeneralCard/ProductsGeneralCard.jsx'
import CommonFilter from '../../../../Filter/CommonFilter/CommonFilter.jsx'
import { getProducts } from '../../../../../features/product/productSlice.js'
import { useSelector, useDispatch } from 'react-redux';
const JeansMen = () => {
  const category = 'JEANS'
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.product);
  useEffect(() => {
    dispatch(getProducts())
  }, [])
  useEffect(() => {

  }, [products])

  return (
    <div className='jeansMen-container'>
        {
        products ?
          (
            <ProductsGeneralCard products={products} category={category} filter={<CommonFilter />} />
          ) : null
      }
     
    </div>
  )
}

export default JeansMen
