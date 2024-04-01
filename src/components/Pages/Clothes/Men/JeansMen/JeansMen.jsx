import React from 'react'
import accesorio1 from '../../../../../assets/imgAccesorios/accesorio1.jpg'
import accesorio2 from '../../../../../assets/imgAccesorios/accesorio2.jpg'
import ProductGeneralCard from '../../../../Cards/ProductsComponentCard/ProductsComponentCard.jsx'
import FilterJeansMen from './FilterJeansMen/FilterJeansMen.jsx'
const JeansMen = () => {
  const category = 'JEANS'
  const jeansMen = [
    // {
    //   name: 'Gorra de algodón con bordado',
    //   image: accesorio1,
    //   price: 24.99 + '€',
    //   tallas: 'Talla única'
    // },
    // {
    //   name: 'Gorra de algodón con bordado',
    //   image: accesorio2,
    //   price: 24.99 + '€',
    //   tallas: 'Talla única'
    // },
    // {
    //   name: 'Gorra de algodón con bordado',
    //   image: accesorio2,
    //   price: 24.99 + '€',
    //   tallas: 'Talla única'
    // },
    // {
    //   name: 'Gorra de algodón con bordado',
    //   image: accesorio2,
    //   price: 24.99 + '€',
    //   tallas: 'Talla única'
    // },
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
        <ProductGeneralCard products={jeansMen} category={category} filter={<FilterJeansMen/>} />
      </div>
    </div>
  )
}

export default JeansMen
