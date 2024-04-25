import React, { useEffect } from 'react'
import './ProductsGeneralCard.scss'
import ProductIndCard from '../ProductIndCard/ProductIndCard'
import CommonFilter from '../../Filter/CommonFilter/CommonFilter'

const ProductsGeneralCard = ({products,category}) => {
//colecciones mejor que otra cosa para organizar esto y todo o no se ya vere
  useEffect(() => {
    
  },[products])
  const handleFilterValues = () => {
    //hago la funcion aqui 
  }
  return (
    <div className='productsComponentCard-container'>
      <div className='productsComponentCard-Category'><p className='productsComponentCard-Category-p'>{category}</p></div>
        <div className='productsComponentCard-filter'><CommonFilter /></div>
       <div className='productsComponentCard-products'>
         {
              products.map((product,index) => {
                  return <ProductIndCard  className='' product={product} key={index} />
              })
          }
       </div>
    </div>
  )
}

export default ProductsGeneralCard
