import React from 'react'

const FLEX_WRAP = {
  display: 'flex',
  flexWrap: 'wrap'
}

const FormWrapper = ({ children }) => (
  <div style={FLEX_WRAP}>
    {children}
  </div>
)

export default FormWrapper
