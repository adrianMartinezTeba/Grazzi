import React, { useEffect } from 'react'
import './ProductsComponentCard.scss'
import ProductIndCard from '../ProductIndCard/ProductIndCard'

const ProductsComponentCard = ({products,category,filter}) => {
//colecciones mejor que otra cosa para organizar esto y todo o no se ya vere
  useEffect(() => {
    
  },[products])
  return (
    <div className='productsComponentCard-container'>
      <div className='productsComponentCard-Category'>{category}</div>
        <div className='productsComponentCard-filter'>{filter}</div>
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

export default ProductsComponentCard
