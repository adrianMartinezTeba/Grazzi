import React, { useEffect } from 'react'
import ProductsGeneralCard from '../../../../Cards/ProductsGeneralCard/ProductsGeneralCard.jsx'
import CommonFilter from '../../../../Filter/CommonFilter/CommonFilter.jsx'
import './Polos.scss'
import { useSelector, useDispatch } from 'react-redux';
import { getProducts } from '../../../../../features/product/productSlice.js'
const Polos = () => {
  const category = 'POLOS'
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.product);
  useEffect(() => {
    dispatch(getProducts())
  }, [])
  useEffect(() => {

  }, [products])
  return (
    <div className='polos-container'>
      {
        products ?
          (
            <ProductsGeneralCard products={products} category={category} filter={<CommonFilter />} />
          ) : null
      }
   
    </div>
  )
}

export default Polos
