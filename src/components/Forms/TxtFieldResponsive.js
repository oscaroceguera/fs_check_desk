import React from 'react'
import {TextField} from 'material-ui'
import styled from 'styled-components'
import breakpoint from 'styled-components-breakpoint'

const Container = styled.div`
  width: 100%;
  ${breakpoint('tablet')`
    width: ${props => props.width ? props.width : '50%'};
    margin-right: 1em;
  `}
`

const TxtFieldResponsive = (props) => (
  <Container width={props.width}>
    <TextField
      {...props}
      style={{width: '100%'}}
    />
  </Container>
)

export default TxtFieldResponsive
