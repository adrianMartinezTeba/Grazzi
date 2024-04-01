import React, { useEffect } from 'react'
import './Accesories.scss'
import { useSelector, useDispatch } from 'react-redux';
import { getProducts } from '../../../../features/product/productSlice';
import accesorio1 from '../../../../assets/imgAccesorios/accesorio1.jpg'
import accesorio2 from '../../../../assets/imgAccesorios/accesorio2.jpg'
import ProductGeneralCard from '../../../Cards/ProductsComponentCard/ProductsComponentCard.jsx'
import FilterAcce from './FilterAcce/FilterAcce.jsx'
import NavBar from '../../../NavBar/NavBar.jsx';
const Accesories = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.product);
  useEffect(() => {
    dispatch(getProducts())
  },[])
  useEffect(() => {
   
  },[products])
  const category = 'ACCESORIOS'

  return (
    <div className='accesories-container'>
      <NavBar/>
    {
      products ? 
      (
        <ProductGeneralCard products={products} category={category} filter={<FilterAcce/>} />
      ) : null
    }
    </div>
  )
}

export default Accesories
