import React , { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import ProductsGeneralCard from '../../../../Cards/ProductsGeneralCard/ProductsGeneralCard.jsx'
import { getProducts } from '../../../../../features/product/productSlice.js'
import CommonFilter from '../../../../Filter/CommonFilter/CommonFilter.jsx'
const JeansWomen = () => {
  const category = 'JEANS'
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.product);
  useEffect(() => {
    dispatch(getProducts())
  }, [])
  useEffect(() => {

  }, [products])
  return (
    <div  className='jeansWomen-container'>
         {
        products ?
          (
            <ProductsGeneralCard products={products} category={category} filter={<CommonFilter />} />
          ) : null
      }
    </div>
  )
}

export default JeansWomen
