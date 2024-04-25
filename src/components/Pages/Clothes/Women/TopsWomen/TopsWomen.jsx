import React from 'react'
import accesorio1 from '../../../../../assets/imgAccesorios/accesorio1.jpg'
import accesorio2 from '../../../../../assets/imgAccesorios/accesorio2.jpg'
import ProductsGeneralCard from '../../../../Cards/ProductsGeneralCard/ProductsGeneralCard.jsx'

import CommonFilter from '../../../../Filter/CommonFilter/CommonFilter.jsx'
const TopsWomen = () => {
  const category = 'TOPS'
  const tops = [
    {
      name: 'Gorra de algodón con bordado',
      image: accesorio1,
      price: 24.99 + '€',
      tallas: 'Talla única'
    },
    {
      name: 'Gorra de algodón con bordado',
      image: accesorio2,
      price: 24.99 + '€',
      tallas: 'Talla única'
    },
    {
      name: 'Gorra de algodón con bordado',
      image: accesorio2,
      price: 24.99 + '€',
      tallas: 'Talla única'
    },
    {
      name: 'Gorra de algodón con bordado',
      image: accesorio2,
      price: 24.99 + '€',
      tallas: 'Talla única'
    },
    {
      name: 'Gorra de algodón con bordado',
      image: accesorio2,
      price: 24.99 + '€',
      tallas: 'Talla única'
    }
  ]
  return (
    <div>
      <div className='accesories-container'>
        <ProductsGeneralCard products={tops} category={category} filter={<CommonFilter/>} />
      </div>
    </div>
  )
}

export default TopsWomen
