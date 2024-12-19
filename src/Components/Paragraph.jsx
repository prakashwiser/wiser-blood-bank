import React from 'react'

function Paragraph({text,Styles}) {
  return (
    <p className={Styles}>{text}</p>
  )
}

export default Paragraph