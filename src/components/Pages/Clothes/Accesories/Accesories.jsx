import React, { useEffect } from 'react'
import './Accesories.scss'
import { useSelector, useDispatch } from 'react-redux';
import { getProducts } from '../../../../features/product/productSlice';
import ProductsGeneralCard from '../../../Cards/ProductsGeneralCard/ProductsGeneralCard.jsx'
import CommonFilter from '../../../Filter/CommonFilter/CommonFilter.jsx';
const Accesories = () => {
  const category = 'ACCESORIOS'
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.product);
  useEffect(() => {
    dispatch(getProducts())
  }, [])
  useEffect(() => {

  }, [products])

  return (
    <div className='accesories-container'>
      {
        products ?
          (
            <ProductsGeneralCard products={products} category={category} filter={<CommonFilter />} />
          ) : null
      }
    </div>
  )
}

export default Accesories
