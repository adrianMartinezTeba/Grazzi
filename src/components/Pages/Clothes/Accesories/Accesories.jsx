import React, { useEffect } from 'react'
import './Accesories.scss'
import { useSelector, useDispatch } from 'react-redux';
import { getProducts } from '../../../../features/product/productSlice';
import accesorio1 from '../../../../assets/imgAccesorios/accesorio1.jpg'
import accesorio2 from '../../../../assets/imgAccesorios/accesorio2.jpg'
import ProductsGeneralCard from '../../../Cards/ProductsGeneralCard/ProductsGeneralCard.jsx'
import NavBar from '../../../NavBar/NavBar.jsx';
import CommonFilter from '../../../Filter/CommonFilter/CommonFilter.jsx';
const Accesories = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.product);
  useEffect(() => {
    dispatch(getProducts())
  }, [])
  useEffect(() => {

  }, [products])
  const category = 'ACCESORIOS'

  return (
    <div className='accesories-container'>
      {/* <NavBar /> */}
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
