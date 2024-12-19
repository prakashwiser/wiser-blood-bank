import React from 'react'

function Image({style, className,src='https://www.thoughtco.com/thmb/hhWjn_nQRG4-vZ4uULUVaUugKfE=/1500x1476/filters:fill(auto,1)/blood_cells-56a09aeb5f9b58eba4b202be.jpg', alt='dummy'}) {
  return (
    <img style={style} className={className}  src={src} alt={alt} />
  )
}

export default Image