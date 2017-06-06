import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const PapeStyled = styled.div`
  width: 250px;
  margin: 1em auto;
  padding: 1em;
`

const SignupLoginWrapper = ({children}) => (
  <PapeStyled>
    {children}
  </PapeStyled>
)

SignupLoginWrapper.propTypes = {
  children: PropTypes.array.isRequired
}

export default SignupLoginWrapper
