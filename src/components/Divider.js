import React from 'react'

const Divider = ({ color, marginSize}) => {
  const defaultMargin = 16;
  const defaultColor = '#888';
  
  return (
    <hr style={{
      border: 'none',
      borderTop: `1px solid ${color || defaultColor}`,
      marginTop: marginSize || defaultMargin,
      marginBottom: marginSize || defaultMargin,
    }} />
  )
}

export default Divider