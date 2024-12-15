import React from 'react'

function Div({children, style, className}) {
  return (
    <div style={style} className={className}>{children}</div>
  )
}

export default Div