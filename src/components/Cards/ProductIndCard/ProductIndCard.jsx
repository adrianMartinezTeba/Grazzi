import React from 'react'
import './ProductIndCard.scss'
const ProductIndCard = ({ product }) => {

  return (
    <div className='productIndCard-container'>
      <div className='productIndCard-img'>
        <img src={product.image} alt=""></img>
        <div className='productIndCard-img-text'>
          <h3>Tallas</h3>
          <p>{product.tallas}</p>
        </div>
      </div>
      <div className='productIndCard-text'>
        <h3>{product.name}</h3>
        <strong>{product.price}</strong>
        {/* //sera un link para ir a ese producto */}
        <p>MÁS COLORES</p>
      </div>
    </div>
  )
}

export default ProductIndCard
