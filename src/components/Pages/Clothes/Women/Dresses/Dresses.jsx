import React from 'react'
import accesorio1 from '../../../../../assets/imgAccesorios/accesorio1.jpg'
import accesorio2 from '../../../../../assets/imgAccesorios/accesorio2.jpg'
import ProductGeneralCard from '../../../../Cards/ProductsComponentCard/ProductsComponentCard.jsx'
import FilterDress from './FilterDress/FilterDress.jsx'
const Dresses = () => {
  const category = 'VESTIDOS'
  const vestidos = [
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
        <ProductGeneralCard products={vestidos} category={category} filter={<FilterDress />} />
      </div>
    </div>
  )
}

export default Dresses
