import React from 'react'

function Text({text,style, css}) {
  return (
    <div style={style} className={css}>{text}</div>
  )
}

export default Text