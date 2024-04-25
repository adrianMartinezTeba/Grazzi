import React, { useEffect }  from 'react'
import { useSelector, useDispatch } from 'react-redux';
import ProductsGeneralCard from '../../../../Cards/ProductsGeneralCard/ProductsGeneralCard.jsx'
import CommonFilter from '../../../../Filter/CommonFilter/CommonFilter.jsx'
import { getProducts } from '../../../../../features/product/productSlice.js';
const Dresses = () => {
  const category = 'VESTIDOS'
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.product);
  useEffect(() => {
    dispatch(getProducts())
  }, [])
  useEffect(() => {

  }, [products])
  return (
    <div>
      <div className='dressesWomen-container'>
      {
        products ?
          (
            <ProductsGeneralCard products={products} category={category} filter={<CommonFilter />} />
          ) : null
      }
      </div>
    </div>
  )
}

export default Dresses
